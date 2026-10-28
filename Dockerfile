# ==========================================
# 1. Build Stage
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Salin package manifest terlebih dahulu untuk optimasi caching layer
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh source code proyek
COPY . .

# Build proyek Vite untuk produksi
RUN npm run build

# ==========================================
# 2. Production Stage (Nginx Alpine)
# ==========================================
FROM nginx:alpine AS runner

# Install curl untuk kompatibilitas monitoring/healthcheck
RUN apk add --no-cache curl

# Bersihkan file default bawaan Nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin hasil kompilasi dari stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Salin konfigurasi kustom Nginx (mendukung SPA routing & dual-stack IPv4/IPv6)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port yang dibuka untuk reverse proxy Coolify
EXPOSE 80

# Jalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]

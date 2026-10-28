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

# Bersihkan file default nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin hasil kompilasi dari stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Salin konfigurasi kustom Nginx untuk SPA & Coolify
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port yang dibuka (Coolify akan mengarahkan Traefik reverse proxy ke port 80 ini)
EXPOSE 80

# Healthcheck untuk status monitoring Coolify
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Jalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]

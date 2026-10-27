@echo off
title Garden Coffee ^& Eatery - Dev Server
echo ========================================================
echo   Garden Coffee ^& Eatery - React + Tailwind Frontend
echo ========================================================
echo.

:: Pastikan path Node.js portable terdeteksi
set "NODE_PATH=C:\Users\ASUS\AppData\Local\Programs\node\node-v20.18.0-win-x64"
set "PATH=%NODE_PATH%;%PATH%"

cd /d "%~dp0"

echo [1/2] Memeriksa Node.js ^& NPM...
node -v
if errorlevel 1 (
    echo [ERROR] Node.js tidak ditemukan di %NODE_PATH%!
    pause
    exit /b 1
)

echo.
echo [2/2] Memulai server Vite di port 3000...
echo Server dapat diakses di:
echo  - http://localhost:3000
echo  - http://127.0.0.1:3000
echo.
echo Membuka browser dalam 2 detik...
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:3000"

:: Jalankan Vite development server
call npm run dev

pause

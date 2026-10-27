@echo off
title Garden Coffee ^& Eatery - Production Preview
echo ========================================================
echo   Garden Coffee ^& Eatery - Production Build Preview
echo ========================================================
echo.

set "NODE_PATH=C:\Users\ASUS\AppData\Local\Programs\node\node-v20.18.0-win-x64"
set "PATH=%NODE_PATH%;%PATH%"

cd /d "%~dp0"

echo Menjalankan build produksi...
call npm run build

echo.
echo Menjalankan preview server di http://localhost:3000 ...
start http://localhost:3000
call npm run preview

pause

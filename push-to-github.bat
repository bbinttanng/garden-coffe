@echo off
title Push to GitHub - Garden Coffee
echo ========================================================
echo   Push Project ke GitHub: bbinttanng/garden-coffe
echo ========================================================
echo.

set "GIT_PATH=C:\Users\ASUS\AppData\Local\Programs\Git\cmd"
set "PATH=%GIT_PATH%;%PATH%"

cd /d "%~dp0"

echo [1/2] Memeriksa status Git...
git status

echo.
echo [2/2] Melakukan push ke origin main...
echo (Jika muncul jendela browser/popup login GitHub, silakan klik 'Sign in with browser')
echo.

git push -u origin main

echo.
if errorlevel 1 (
    echo [INFO] Jika gagal autentikasi, pastikan Anda sudah login ke akun GitHub 'bbinttanng'.
) else (
    echo [SUKSES] Berhasil dipush ke https://github.com/bbinttanng/garden-coffe !
)

pause

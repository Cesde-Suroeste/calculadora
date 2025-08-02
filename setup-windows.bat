@echo off
echo ====================================
echo    CALCULADORA REACT NATIVE SETUP
echo    Configuración automática para Windows 11
echo ====================================
echo.

:: Verificar si Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no está instalado.
    echo Por favor, descarga e instala Node.js desde: https://nodejs.org/
    echo Después ejecuta este script nuevamente.
    pause
    exit /b 1
)

echo [✓] Node.js está instalado:
node --version

:: Verificar si npm está disponible
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm no está disponible.
    pause
    exit /b 1
)

echo [✓] npm está disponible:
npm --version
echo.

:: Instalar dependencias del proyecto
echo [INFO] Instalando dependencias del proyecto...
echo.
npm install

if %errorlevel% neq 0 (
    echo [ERROR] Error al instalar las dependencias.
    echo Intentando limpiar caché y reinstalar...
    npm cache clean --force
    rmdir /s /q node_modules 2>nul
    npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Fallo crítico en la instalación.
        pause
        exit /b 1
    )
)

echo.
echo [✓] Dependencias instaladas correctamente.
echo.

:: Instalar Expo CLI globalmente (opcional)
echo [INFO] Instalando Expo CLI...
npm install -g @expo/cli

echo.
echo ====================================
echo [✓] CONFIGURACIÓN COMPLETADA
echo ====================================
echo.
echo Para ejecutar la aplicación, usa:
echo   .\run-app.bat
echo.
echo O manualmente:
echo   npm start
echo.
pause
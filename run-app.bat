@echo off
echo ====================================
echo    CALCULADORA REACT NATIVE
echo    Iniciando aplicación...
echo ====================================
echo.

:: Verificar si Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no está instalado.
    echo Ejecuta primero: .\setup-windows.bat
    pause
    exit /b 1
)

:: Verificar si existe package.json
if not exist package.json (
    echo [ERROR] No se encuentra package.json.
    echo Asegúrate de estar en el directorio correcto del proyecto.
    pause
    exit /b 1
)

:: Verificar si existen las dependencias
if not exist node_modules (
    echo [WARNING] No se encontró la carpeta node_modules.
    echo Instalando dependencias...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Error al instalar dependencias.
        echo Ejecuta: .\setup-windows.bat
        pause
        exit /b 1
    )
)

echo [INFO] Iniciando servidor de desarrollo...
echo.
echo ====================================
echo OPCIONES DISPONIBLES:
echo ====================================
echo - Escanea el código QR con Expo Go
echo - Presiona 'w' para abrir en navegador
echo - Presiona 'a' para Android (requiere emulador)
echo - Presiona 'i' para iOS (solo macOS)
echo - Presiona 'q' para salir
echo ====================================
echo.

:: Iniciar la aplicación
npm start

:: Si el proceso termina, mostrar mensaje
echo.
echo ====================================
echo Aplicación cerrada.
echo ====================================
pause
#!/bin/bash

echo "===================================="
echo "   CALCULADORA REACT NATIVE"
echo "   Iniciando aplicación..."
echo "===================================="
echo

# Colores para mejor visualización
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar mensajes con color
print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado."
    print_info "Ejecuta primero: ./setup-linux.sh"
    exit 1
fi

# Verificar si existe package.json
if [ ! -f "package.json" ]; then
    print_error "No se encuentra package.json."
    print_info "Asegúrate de estar en el directorio correcto del proyecto."
    exit 1
fi

# Verificar si existen las dependencias
if [ ! -d "node_modules" ]; then
    print_warning "No se encontró la carpeta node_modules."
    print_info "Instalando dependencias..."
    echo
    if npm install; then
        print_status "Dependencias instaladas correctamente."
    else
        print_error "Error al instalar dependencias."
        print_info "Ejecuta: ./setup-linux.sh"
        exit 1
    fi
fi

print_info "Iniciando servidor de desarrollo..."
echo
echo "===================================="
echo "OPCIONES DISPONIBLES:"
echo "===================================="
echo "- Escanea el código QR con Expo Go"
echo "- Presiona 'w' para abrir en navegador"
echo "- Presiona 'a' para Android (requiere emulador)"
echo "- Presiona 'i' para iOS (solo macOS)"
echo "- Presiona 'q' para salir"
echo "===================================="
echo

# Función para manejar Ctrl+C
cleanup() {
    echo
    echo "===================================="
    print_info "Aplicación cerrada."
    echo "===================================="
    exit 0
}

# Capturar señal de interrupción
trap cleanup SIGINT SIGTERM

# Iniciar la aplicación
npm start

# Si el proceso termina normalmente
echo
echo "===================================="
print_info "Aplicación cerrada."
echo "===================================="
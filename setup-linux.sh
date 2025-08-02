#!/bin/bash

echo "===================================="
echo "   CALCULADORA REACT NATIVE SETUP"
echo "   Configuración automática para Linux"
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
    print_info "Instalando Node.js..."
    
    # Detectar distribución de Linux
    if command -v apt-get &> /dev/null; then
        # Ubuntu/Debian
        print_info "Detectado sistema basado en Debian/Ubuntu"
        sudo apt-get update
        curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif command -v yum &> /dev/null; then
        # CentOS/RHEL/Fedora
        print_info "Detectado sistema basado en Red Hat"
        curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
        sudo yum install -y nodejs npm
    elif command -v pacman &> /dev/null; then
        # Arch Linux
        print_info "Detectado Arch Linux"
        sudo pacman -S nodejs npm
    else
        print_error "Distribución de Linux no soportada automáticamente."
        print_info "Por favor, instala Node.js manualmente desde: https://nodejs.org/"
        exit 1
    fi
    
    # Verificar instalación
    if ! command -v node &> /dev/null; then
        print_error "Fallo la instalación de Node.js"
        exit 1
    fi
fi

print_status "Node.js está instalado: $(node --version)"

# Verificar si npm está disponible
if ! command -v npm &> /dev/null; then
    print_error "npm no está disponible."
    exit 1
fi

print_status "npm está disponible: $(npm --version)"
echo

# Instalar dependencias del proyecto
print_info "Instalando dependencias del proyecto..."
echo

if npm install; then
    print_status "Dependencias instaladas correctamente."
else
    print_warning "Error al instalar dependencias. Intentando limpiar caché..."
    npm cache clean --force
    rm -rf node_modules 2>/dev/null
    if npm install; then
        print_status "Dependencias instaladas correctamente después de limpiar caché."
    else
        print_error "Fallo crítico en la instalación de dependencias."
        exit 1
    fi
fi

echo

# Instalar Expo CLI globalmente (opcional)
print_info "Instalando Expo CLI..."
if npm install -g @expo/cli; then
    print_status "Expo CLI instalado correctamente."
else
    print_warning "No se pudo instalar Expo CLI globalmente. Intentando sin sudo..."
    if npm install -g @expo/cli --unsafe-perm; then
        print_status "Expo CLI instalado correctamente."
    else
        print_warning "Expo CLI no se pudo instalar globalmente, pero la app funcionará con npx."
    fi
fi

echo
echo "===================================="
print_status "CONFIGURACIÓN COMPLETADA"
echo "===================================="
echo
echo "Para ejecutar la aplicación, usa:"
echo "  ./run-app.sh"
echo
echo "O manualmente:"
echo "  npm start"
echo

# Hacer el script de ejecución ejecutable
if [ -f "run-app.sh" ]; then
    chmod +x run-app.sh
    print_info "Script de ejecución configurado."
fi

echo "¡Listo para usar! 🚀"
# 📱 Calculadora React Native

Una aplicación de calculadora básica desarrollada con React Native y Expo, diseñada para dispositivos móviles con funcionalidades matemáticas fundamentales.

## 🚀 Características

- ✅ Operaciones básicas: suma (+), resta (-), multiplicación (×), división (÷)
- ✅ Función limpiar (C) para resetear la calculadora
- ✅ Botón de cambio de signo (±)
- ✅ Función de porcentaje (%)
- ✅ Manejo de números decimales
- ✅ Interfaz intuitiva similar a calculadoras iOS
- ✅ Responsive design adaptable a diferentes tamaños de pantalla
- ✅ Manejo de errores (división por cero)

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil multiplataforma
- **Expo** - Plataforma para desarrollo y construcción de aplicaciones React Native
- **JavaScript** - Lenguaje de programación principal
- **React Hooks** - Para manejo del estado de la aplicación

## 📋 Prerrequisitos

### Para ambos sistemas operativos:
- Node.js (versión 16 o superior)
- npm o yarn (gestor de paquetes)
- Git (para clonar el repositorio)

### Windows 11:
- Windows PowerShell o Command Prompt
- Opcionalmente: Windows Subsystem for Linux (WSL2)

### Linux (Ubuntu/Debian):
- Terminal
- curl o wget (generalmente preinstalados)

## 🔧 Instalación y Configuración

### 📥 Clonar el Repositorio

```bash
git clone https://github.com/Cesde-Suroeste/calculadora.git
cd calculadora
```

### 🚀 Instalación Automática (Recomendado)

Hemos creado scripts para automatizar todo el proceso de instalación:

#### En Windows 11:
```cmd
# Ejecutar en PowerShell como Administrador
.\setup-windows.bat
```

#### En Linux:
```bash
# Dar permisos de ejecución y ejecutar
chmod +x setup-linux.sh
./setup-linux.sh
```

### 📱 Instalación Manual

Si prefieres instalar manualmente, sigue estos pasos:

#### Paso 1: Instalar Node.js

**Windows 11:**
1. Descargar Node.js desde [nodejs.org](https://nodejs.org/)
2. Ejecutar el instalador y seguir las instrucciones
3. Verificar la instalación:
```cmd
node --version
npm --version
```

**Linux:**
```bash
# Usando NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version
```

#### Paso 2: Instalar Dependencias del Proyecto

```bash
# Navegar al directorio del proyecto
cd calculadora

# Instalar dependencias
npm install

# O si prefieres usar yarn
npm install -g yarn
yarn install
```

#### Paso 3: Instalar Expo CLI (Opcional - para desarrollo)

```bash
npm install -g @expo/cli
```

## 🏃‍♂️ Ejecutar la Aplicación

### 🚀 Ejecución Rápida (Script Automático)

#### Windows 11:
```cmd
.\run-app.bat
```

#### Linux:
```bash
./run-app.sh
```

### 📱 Ejecución Manual

```bash
# Navegar al directorio del proyecto
cd calculadora

# Iniciar el servidor de desarrollo
npm start

# O alternativamente:
npx expo start
```

### 📲 Opciones de Visualización

Una vez que el servidor esté corriendo, tendrás varias opciones:

1. **Expo Go App** (Recomendado para pruebas):
   - Descarga Expo Go desde tu tienda de aplicaciones
   - Escanea el código QR que aparece en la terminal

2. **Simulador/Emulador**:
   ```bash
   # Para Android (requiere Android Studio)
   npm run android
   
   # Para iOS (solo en macOS con Xcode)
   npm run ios
   
   # Para navegador web
   npm run web
   ```

## 📁 Estructura del Proyecto

```
calculadora/
├── components/           # Componentes reutilizables
│   ├── Calculator.js    # Componente principal de la calculadora
│   ├── Button.js        # Componente de botón personalizado
│   └── Display.js       # Pantalla de visualización
├── styles/              # Estilos de la aplicación
│   └── styles.js        # StyleSheet principal
├── utils/               # Utilidades y lógica
│   └── calculator.js    # Lógica de cálculos matemáticos
├── assets/              # Recursos estáticos
├── App.js              # Componente raíz
├── app.json            # Configuración de Expo
├── package.json        # Dependencias y scripts
└── README.md           # Este archivo
```

## 🧪 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS (solo macOS)
npm run ios

# Ejecutar en navegador web
npm run web

# Limpiar caché de Expo
npx expo start --clear
```

## 🐛 Solución de Problemas

### Problema: "Metro has encountered an error"
```bash
# Limpiar caché y reiniciar
npx expo start --clear
```

### Problema: "Unable to resolve module"
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install
```

### Problema: Puerto en uso
```bash
# Usar un puerto diferente
npx expo start --port 19001
```

### Windows: Error de permisos en PowerShell
```powershell
# Ejecutar como administrador y cambiar política de ejecución
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 📱 Uso de la Calculadora

1. **Números**: Toca los botones numéricos (0-9) para ingresar números
2. **Operaciones**: Usa +, -, ×, ÷ para operaciones matemáticas
3. **Igual (=)**: Calcula y muestra el resultado
4. **Limpiar (C)**: Resetea la calculadora a cero
5. **Cambio de signo (±)**: Cambia el signo del número actual
6. **Porcentaje (%)**: Convierte el número actual a porcentaje
7. **Punto decimal (.)**: Permite ingresar números decimales

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Desarrollado por

**Cesde Suroeste**
- Email: cesde.s.software@gmail.com
- GitHub: [@Cesde-Suroeste](https://github.com/Cesde-Suroeste)

## 🙋‍♂️ Soporte

Si tienes algún problema o pregunta, por favor:

1. Revisa la sección de [Solución de Problemas](#-solución-de-problemas)
2. Busca en los [Issues](https://github.com/Cesde-Suroeste/calculadora/issues) existentes
3. Crea un nuevo [Issue](https://github.com/Cesde-Suroeste/calculadora/issues/new) si no encuentras solución

---

⭐ ¡Si este proyecto te fue útil, considera darle una estrella en GitHub!
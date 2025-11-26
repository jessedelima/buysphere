# BuySphere - Superapp da BuyCorp

Este projeto contém tanto a versão móvel (Flutter) quanto a versão web (React + Vite) do superapp BuySphere da BuyCorp.

## 🌐 Versão Web (Implementada)

A versão web foi desenvolvida com React, Vite e Tailwind CSS, oferecendo uma experiência moderna e responsiva.

### ✅ Funcionalidades Implementadas
- Interface principal com grid de 15 aplicativos
- Design responsivo e moderno
- Logo BuySphere integrado (cabeçalho e rodapé)
- Navegação entre diferentes seções
- Cards interativos para cada aplicativo
- Tema consistente com as cores da marca

### 🚀 Como Executar a Versão Web
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Acessar em: http://localhost:5173/
```

### 📦 Deploy para Produção (Web)

### URL em Produção (GitHub Pages)
- Publicação automática via GitHub Actions
- Acesse: https://jessedelima.github.io/buysphere/


#### Opção 1: Build Estático
```bash
# Gerar build de produção
npm run build

# Os arquivos estarão na pasta 'dist/'
# Fazer upload para qualquer servidor web (Netlify, Vercel, etc.)
```

#### Opção 2: Netlify (Recomendado)
1. Conectar repositório ao Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `dist`
4. Deploy automático a cada commit

#### Opção 3: Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Opção 4: Servidor Próprio
```bash
# Build
npm run build

# Servir com nginx, Apache ou qualquer servidor web
# Apontar para a pasta 'dist/'
```

---

## 📱 Versão Mobile (Flutter)

## Pré-requisitos para Desenvolvimento (Windows)

### 1. Instalar Flutter SDK
1. Baixe o Flutter SDK do site oficial: https://flutter.dev/docs/get-started/install/windows
2. Extraia o arquivo ZIP em um local como `C:\flutter`
3. Adicione `C:\flutter\bin` ao PATH do sistema

### 2. Instalar Android Studio
1. Baixe e instale o Android Studio: https://developer.android.com/studio
2. Durante a instalação, certifique-se de instalar:
   - Android SDK
   - Android SDK Platform-Tools
   - Android SDK Build-Tools
   - Android Emulator

### 3. Configurar VS Code para Flutter
1. Instale a extensão "Flutter" no VS Code
2. Instale a extensão "Dart" no VS Code
3. Execute `Ctrl+Shift+P` e digite "Flutter: New Project" para verificar se está funcionando

### 4. Verificar Instalação
Execute no terminal:
```bash
flutter doctor
```

## Estrutura do Projeto

```
buysphere-mobile/
├── lib/
│   ├── main.dart                 # Ponto de entrada do app
│   ├── models/                   # Modelos de dados
│   ├── screens/                  # Telas do aplicativo
│   │   ├── home_screen.dart
│   │   ├── apps/                 # Telas dos apps individuais
│   │   │   ├── buy_connect_screen.dart
│   │   │   ├── buy_drive_screen.dart
│   │   │   ├── buy_bank_screen.dart
│   │   │   └── ...
│   ├── widgets/                  # Widgets reutilizáveis
│   ├── services/                 # Serviços e APIs
│   └── utils/                    # Utilitários e constantes
├── assets/
│   ├── images/
│   └── icons/
├── android/                      # Configurações Android
├── ios/                          # Configurações iOS
└── pubspec.yaml                  # Dependências do projeto
```

## Funcionalidades Principais

### Tela Principal (Home)
- Grid com todos os 15 aplicativos do BuySphere
- Navegação rápida entre os apps
- Perfil do usuário
- Notificações

### Aplicativos Integrados
1. **BuyConnect** - Rede social com perfil profissional
2. **BuyDrive** - Transporte com mapa interativo
3. **BuyBank** - Serviços bancários
4. **BuyExpress** - Grandes entregas
5. **BuyMusic** - Streaming de música
6. **BuyVideo** - Streaming de vídeo e podcasts
7. **BuyTravel** - Viagens e hospedagens
8. **BuyFood** - Delivery de comida
9. **BuyFarma** - Entrega de medicamentos
10. **BuyShop** - E-commerce
11. **BuyCourse** - Cursos profissionalizantes
12. **BuyUniversit** - Cursos superiores EAD
13. **BuyCity** - Cidade virtual com AR
14. **BuyGame** - Games na nuvem
15. **BuyMessage** - Mensagens instantâneas

## Como Executar

### No Windows (Desenvolvimento)
1. Abra o projeto no VS Code
2. Conecte um dispositivo Android ou inicie um emulador
3. Execute `F5` ou use o terminal:
```bash
flutter run
```

### Build para Produção
```bash
# Android APK
flutter build apk --release

# Android App Bundle (recomendado para Google Play)
flutter build appbundle --release

# iOS (apenas no macOS)
flutter build ios --release
```

## Dependências Principais

- `flutter/material.dart` - UI Components
- `provider` - Gerenciamento de estado
- `http` - Requisições HTTP
- `shared_preferences` - Armazenamento local
- `camera` - Acesso à câmera
- `geolocator` - Localização GPS
- `google_maps_flutter` - Mapas (para BuyDrive)
- `video_player` - Reprodução de vídeo
- `audioplayers` - Reprodução de áudio

## Cores da Marca

```dart
class BuySphereColors {
  static const Color primary = Color(0xFF0056B3);      // Azul principal
  static const Color secondary = Color(0xFF28A745);    // Verde secundário
  static const Color accent = Color(0xFFFFC107);       // Amarelo destaque
  static const Color background = Color(0xFFF8F9FA);   // Cinza claro
  static const Color white = Color(0xFFFFFFFF);        // Branco
}
```

## 🛠️ Tecnologias Utilizadas (Versão Web)

- **React** - Biblioteca para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
 - **vite-imagetools** - Otimização de imagens (gera WebP leve no build)

## 📋 Próximos Passos

### Para a Versão Web:
1. ✅ Interface principal implementada
2. ✅ Logo integrado e responsivo
3. 🔄 Implementar funcionalidades específicas de cada app
4. 🔄 Integrar com APIs backend
5. 🔄 Adicionar autenticação de usuários
6. 🔄 Implementar sistema de notificações
7. 🔄 Testes automatizados
8. 🔄 Deploy para produção

### Para a Versão Mobile (Flutter):
1. Configurar o ambiente Flutter no Windows
2. Criar a estrutura básica do projeto
3. Implementar a tela principal com grid de apps
4. Desenvolver as telas individuais de cada app
5. Integrar com APIs backend (Java)
6. Testes em dispositivos reais
7. Build para produção

## 🚀 Status do Projeto

- **Versão Web**: ✅ MVP Implementado - Pronto para produção
- **Versão Mobile**: 🔄 Em desenvolvimento
- **Backend**: 🔄 Em desenvolvimento

## 📞 Suporte

Para dúvidas sobre o desenvolvimento, consulte a documentação técnica ou entre em contato com a equipe de desenvolvimento da BuyCorp.


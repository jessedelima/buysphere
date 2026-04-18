# BuySphere — O Super App do Brasil

![Version](https://img.shields.io/badge/Versão-0.1.0--pilot-0056B3)
![Status](https://img.shields.io/badge/Status-MVP_Online-28A745)
![Stack](https://img.shields.io/badge/Stack-React_%2B_Flutter-FFC107)
![License](https://img.shields.io/badge/License-MIT-green)

### 15 serviços. 1 login. 0 dor de cabeça.

**Tese**: Brasileiro médio usa 4 apps todo dia: banco, comida, transporte e chat. BuySphere junta esses 4 + 11 serviços em 1 app.

**Por que agora**: PIX movimentou R$ 24 TRI em 2025. Open Finance liberou os dados. 88% dos brasileiros têm smartphone. A janela do Super App BR abriu e fecha em 24 meses.

> 🚀 **[Testar Demo Online](https://jessedelima.github.io/buysphere/)** | 📱 [Código Mobile](/lib) | 📝 [Documentação Completa](Documentação%20Completa%20-%20Projeto%20BuySphere.md)

---

## 📱 O que é o BuySphere

Um login. Um saldo PIX. 15 verticais integradas:

| Categoria | Apps |
|-----------|------|
| **Fintech + Mobilidade** | BuyBank, BuyDrive, BuyTravel |
| **Lifestyle** | BuyFood, BuyFarma, BuyShop, BuyMessage |
| **Conteúdo** | BuyMusic, BuyVideo, BuyGame, BuyCity |
| **Social + Carreira** | BuyConnect, BuyCourse, BuyUniversit |
| **Logística** | BuyExpress |

**Diferencial**: Usuário não troca de app, troca de aba. Saldo do BuyBank paga corrida, comida, curso e remédio sem fricção.

---

## 📋 Índice Rápido

- [Demo & Código](#-demo--código)
- [Stack Técnica](#-stack-técnica)
- [Setup Desenvolvimento](#-setup-desenvolvimento)
- [Roadmap](#-roadmap)
- [Arquitetura](#-arquitetura)
- [Troubleshooting](#-troubleshooting)
- [Contribuindo](#-contribuindo)

## 🚀 Demo & Código

| Plataforma | Status | Acesso |
|-----------|--------|---------|
| **Web** | ✅ Online | [jessedelima.github.io/buysphere](https://jessedelima.github.io/buysphere/) |
| **Mobile Flutter** | 🔄 Desenvolvimento | `/lib` neste repo |
| **Backend API** | 🔄 Em progresso | Roadmap abaixo |

---

## 🛠️ Stack Técnica

**Frontend Web**:
- React 18.x + Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)
- ESLint + Prettier (code quality)

**Mobile**:
- Flutter 3.x (cross-platform)
- Provider (state management)
- Google Maps Flutter (maps)
- Dio (HTTP client)

**Backend (Roadmap)**:
- Node.js + Express
- PostgreSQL
- Redis (cache)
- JWT (auth)

**DevOps**:
- GitHub Pages (deploy web)
- GitHub Actions (CI/CD)
- Docker (containers)
- AWS (target scaling)

**Decisão Técnica**: Flutter + React permite 1 time dominar Web, Android e iOS. Velocidade prioridade no estágio pilot.

---

## 🌐 Versão Web (Implementada)

A versão web foi desenvolvida com React, Vite e Tailwind CSS, oferecendo uma experiência moderna e responsiva.

### ✅ Funcionalidades Implementadas
- Interface principal com grid de 15 aplicativos
- Design responsivo e moderno
- Logo BuySphere integrado (cabeçalho e rodapé)
- Navegação entre diferentes seções
- Cards interativos para cada aplicativo
- Tema consistente com as cores da marca


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
- **vite-imagetools** - Otimização de imagens

---

## 🚨 Troubleshooting

### Flutter
| Problema | Solução |
|----------|---------|
| `flutter doctor` mostra erros | Execute `flutter doctor --verbose` para diagnóstico completo |
| Emulador não conecta | Reinicie o emulador ou execute `flutter clean` |
| Build falha no Android | Execute: `flutter clean` e `gradle clean` |
| Erro de PATH do Flutter | Reinicie o terminal após adicionar ao PATH |
| Erro de assinatura no APK | Verifique `signingConfigs` em `android/app/build.gradle` |

### React/Web
| Problema | Solução |
|----------|---------|
| Porta 5173 já em uso | Execute `npm run dev -- --port 3000` |
| Módulos não encontrados | Execute `npm install` e `npm cache clean --force` |
| Build lento | Use `npm run build` com produção ativa |
| Erro de importação CSS | Verifique imports em `src/main.jsx` |

### Geral
| Problema | Solução |
|----------|---------|
| Git com muitos conflitos | Execute `git reset --hard HEAD` (cuidado!) |
| Node/npm versão incompatível | Use Node 16+ e npm 8+ (verifique com `node -v`) |

---

## 🚀 Roadmap

### ✅ Concluído (Versão 0.1 - Piloto)
- [x] Interface web principal com React
- [x] Grid de 15 aplicativos
- [x] Design responsivo
- [x] Estrutura Flutter base
- [x] Documentação completa

### 🔄 Versão 0.2 (Próximo - 1-2 meses)
- [ ] Autenticação com OAuth2/JWT
- [ ] Dashboard de usuário funcional
- [ ] API backend (Node.js ou Java)
- [ ] Banco de dados (PostgreSQL/MongoDB)
- [ ] Testes unitários (Jest/Vitest)

### 📅 Versão 0.3 (2-3 meses)
- [ ] BuyBank - Sistema de pagamentos
- [ ] BuyMessage - Chat em tempo real
- [ ] BuyDrive - Integração com Mapas
- [ ] BuyFood - Integração com restaurantes
- [ ] Notificações push

### 🎯 Versão 1.0 (Beta Aberto - 4-6 meses)
- [ ] Todos os 15 apps funcionais e testados
- [ ] Testes de segurança e penetration testing
- [ ] Deploy em produção (AWS/Azure)
- [ ] App iOS compilado (macOS necessário)
- [ ] Analytics e monitoramento

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Para detalhes, consulte o arquivo [LICENSE](LICENSE).

---

## 👥 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/MinhaFeature`
3. Commit suas mudanças: `git commit -m 'Adiciona MinhaFeature'`
4. Push para a branch: `git push origin feature/MinhaFeature`
5. Abra um Pull Request

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

---

## 📞 Contato e Suporte

- **Desenvolvedor Principal**: Jesse de Lima
- **Email**: jessedelima@hoymail.com
- **GitHub Issues**: [Reporte bugs](https://github.com/jessedelima/buysphere/issues)
- **Discussões**: [Faça perguntas](https://github.com/jessedelima/buysphere/discussions)
- **Documentação**: Veja [Documentação Completa - Projeto BuySphere.md](Documentação%20Completa%20-%20Projeto%20BuySphere.md)

---

**Última atualização**: Abril de 2026
**Versão**: 0.1.0-pilot

Para dúvidas sobre o desenvolvimento, consulte a documentação técnica ou entre em contato com a equipe de desenvolvimento da BuyCorp.


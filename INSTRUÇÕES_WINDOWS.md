# Instruções Detalhadas para Configurar o BuySphere Mobile no Windows

## Passo 1: Instalar o Flutter SDK

### 1.1 Download do Flutter
1. Acesse: https://flutter.dev/docs/get-started/install/windows
2. Clique em "Download Flutter SDK"
3. Baixe o arquivo ZIP (aproximadamente 1.5GB)

### 1.2 Extrair e Configurar
1. Crie uma pasta `C:\flutter` (sem espaços no caminho)
2. Extraia o conteúdo do ZIP para `C:\flutter`
3. Você deve ter a estrutura: `C:\flutter\bin\flutter.bat`

### 1.3 Adicionar ao PATH
1. Pressione `Win + R`, digite `sysdm.cpl` e pressione Enter
2. Clique na aba "Avançado"
3. Clique em "Variáveis de Ambiente"
4. Na seção "Variáveis do sistema", encontre "Path" e clique em "Editar"
5. Clique em "Novo" e adicione: `C:\flutter\bin`
6. Clique "OK" em todas as janelas

### 1.4 Verificar Instalação
1. Abra um novo Prompt de Comando (cmd)
2. Digite: `flutter --version`
3. Deve mostrar a versão do Flutter instalada

## Passo 2: Instalar Android Studio

### 2.1 Download e Instalação
1. Acesse: https://developer.android.com/studio
2. Baixe o Android Studio (aproximadamente 1GB)
3. Execute o instalador como administrador
4. Durante a instalação, certifique-se de marcar:
   - ✅ Android SDK
   - ✅ Android SDK Platform-Tools
   - ✅ Android SDK Build-Tools
   - ✅ Android Emulator

### 2.2 Configuração Inicial
1. Abra o Android Studio
2. Siga o assistente de configuração inicial
3. Aceite as licenças do Android SDK
4. Aguarde o download dos componentes necessários

### 2.3 Criar um Dispositivo Virtual (AVD)
1. No Android Studio, clique em "More Actions" > "AVD Manager"
2. Clique em "Create Virtual Device"
3. Escolha um dispositivo (recomendado: Pixel 4)
4. Selecione uma imagem do sistema (recomendado: API 30 ou superior)
5. Clique em "Finish"

## Passo 3: Configurar VS Code para Flutter

### 3.1 Instalar Extensões
1. Abra o VS Code
2. Vá para Extensions (Ctrl+Shift+X)
3. Procure e instale:
   - ✅ "Flutter" (por Dart Code)
   - ✅ "Dart" (por Dart Code)

### 3.2 Verificar Configuração
1. Pressione `Ctrl+Shift+P`
2. Digite "Flutter: Doctor"
3. Pressione Enter
4. Verifique se não há erros críticos

## Passo 4: Configurar o Projeto BuySphere

### 4.1 Copiar Arquivos do Projeto
1. Copie toda a pasta `buysphere-mobile` para seu computador Windows
2. Recomendado: `C:\Users\SeuUsuario\Documents\buysphere-mobile`

### 4.2 Abrir no VS Code
1. Abra o VS Code
2. File > Open Folder
3. Selecione a pasta `buysphere-mobile`

### 4.3 Instalar Dependências
1. Abra o terminal no VS Code (Ctrl+`)
2. Execute: `flutter pub get`
3. Aguarde o download das dependências

## Passo 5: Executar o Aplicativo

### 5.1 Iniciar Emulador
1. No VS Code, pressione `Ctrl+Shift+P`
2. Digite "Flutter: Launch Emulator"
3. Selecione o emulador criado anteriormente
4. Aguarde o emulador inicializar completamente

### 5.2 Executar o App
1. No VS Code, pressione `F5`
2. Ou use o terminal: `flutter run`
3. O aplicativo será compilado e executado no emulador

## Passo 6: Desenvolvimento

### 6.1 Hot Reload
- Após fazer alterações no código, pressione `r` no terminal
- Ou use `Ctrl+S` para salvar e recarregar automaticamente

### 6.2 Estrutura de Arquivos Importantes
```
lib/
├── main.dart                 # Arquivo principal
├── screens/
│   ├── home_screen.dart      # Tela inicial
│   └── apps/                 # Telas dos apps
├── widgets/
│   └── app_card.dart         # Card dos aplicativos
├── models/
│   └── app_model.dart        # Modelos de dados
└── utils/
    ├── colors.dart           # Cores da marca
    └── app_data.dart         # Dados dos apps
```

## Passo 7: Build para Produção

### 7.1 Build APK de Debug
```bash
flutter build apk --debug
```

### 7.2 Build APK de Release
```bash
flutter build apk --release
```

### 7.3 Build App Bundle (Google Play)
```bash
flutter build appbundle --release
```

## Solução de Problemas Comuns

### Problema: "flutter não é reconhecido"
**Solução:** Verifique se o PATH foi configurado corretamente e reinicie o terminal.

### Problema: "No devices found"
**Solução:** Certifique-se de que o emulador está rodando ou conecte um dispositivo físico com USB debugging habilitado.

### Problema: "Gradle build failed"
**Solução:** Execute `flutter clean` e depois `flutter pub get`.

### Problema: Emulador muito lento
**Solução:** 
1. Habilite a virtualização no BIOS
2. Instale Intel HAXM
3. Aumente a RAM do emulador para 4GB

## Comandos Úteis

```bash
# Verificar configuração
flutter doctor

# Limpar cache
flutter clean

# Instalar dependências
flutter pub get

# Executar em modo debug
flutter run

# Executar em modo release
flutter run --release

# Ver dispositivos conectados
flutter devices

# Criar novo projeto
flutter create nome_do_projeto
```

## Próximos Passos

1. ✅ Configurar ambiente de desenvolvimento
2. ✅ Executar o aplicativo básico
3. 🔄 Personalizar as telas dos aplicativos
4. 🔄 Implementar navegação entre telas
5. 🔄 Adicionar funcionalidades específicas
6. 🔄 Integrar com APIs backend
7. 🔄 Testes em dispositivos reais
8. 🔄 Preparar para publicação

## Suporte

Se encontrar problemas:
1. Consulte a documentação oficial: https://flutter.dev/docs
2. Verifique o Stack Overflow: https://stackoverflow.com/questions/tagged/flutter
3. Execute `flutter doctor -v` para diagnóstico detalhado


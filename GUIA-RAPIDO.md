# 🚀 Guia de Início Rápido - PWA Futsal

## Opção 1: Início Automático (Recomendado)

### Windows:
Dê duplo clique no arquivo:
```
start.bat
```

### PowerShell:
```powershell
.\start.ps1
```

## Opção 2: Comandos Manuais

### 1. Instalar Dependências
```bash
npm install
```

### 2. Gerar Ícones
Abra no navegador:
```
icons/gerador-icones.html
```
Clique em "Gerar e Baixar Todos os Ícones" e mova os arquivos para a pasta `icons/`

### 3. Iniciar Aplicativo
```bash
npm run dev
```

## ✅ Verificar Instalação do PWA

1. Abra o DevTools (F12)
2. Vá em **Application** > **Manifest**
3. Vá em **Application** > **Service Workers**
4. Teste offline marcando "Offline" e recarregando

## 🎯 Próximos Passos

- Teste o botão "📱 Instalar App" no canto inferior direito
- Teste a funcionalidade offline
- Compartilhe via WhatsApp ou exporte em PDF

## 🌐 Deploy Online

### Vercel (Recomendado):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages:
```bash
git init
git add .
git commit -m "Initial commit - PWA"
git branch -M main
git remote add origin SEU_REPOSITORIO
git push -u origin main
```

## 📞 Suporte

Se encontrar algum problema, verifique:
- Node.js instalado (`node --version`)
- npm instalado (`npm --version`)
- Porta 8080 disponível
- Conexão com internet para instalação inicial

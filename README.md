# Gerador de Times de Futsal ⚽ - Progressive Web App (PWA)

Aplicativo web progressivo para sorteio equilibrado de times de futsal, com funcionalidade offline e instalável em dispositivos móveis e desktop.

## 🚀 Características

- ✅ **PWA Completo**: Instalável em qualquer dispositivo
- 📱 **Funciona Offline**: Continue usando sem internet
- ⚡ **Rápido e Leve**: Cache inteligente de recursos
- 🎨 **Interface Moderna**: Design responsivo com Tailwind CSS
- 📄 **Exportação PDF**: Gere relatórios dos times
- 📲 **Compartilhamento**: Envie resultados via WhatsApp

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente vem com Node.js)

## 🛠️ Instalação e Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Gerar Ícones do PWA

```bash
npm run generate-icons
```

Este comando criará automaticamente todos os ícones necessários na pasta `icons/`.

### 3. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

O aplicativo abrirá automaticamente no navegador em `http://localhost:8080`

## 📱 Como Instalar o PWA

### No Desktop (Chrome/Edge):
1. Abra o aplicativo no navegador
2. Clique no ícone de instalação na barra de endereços (➕) ou
3. Clique no botão "📱 Instalar App" que aparece no canto inferior direito

### No Android (Chrome):
1. Abra o aplicativo no Chrome
2. Toque no menu (⋮) > "Adicionar à tela inicial" ou
3. Toque no botão "📱 Instalar App"

### No iOS (Safari):
1. Abra o aplicativo no Safari
2. Toque no botão de compartilhar (📤)
3. Role para baixo e toque em "Adicionar à Tela de Início"

## 🎮 Como Usar

### Funcionalidades Principais

#### Adicionar e Remover Jogadores
- **Adicionar**: Digite o nome do jogador no campo de texto e clique em `"Adicionar"`.
- **Remover**: Clique no ícone de lixeira ao lado do nome de um jogador para removê-lo da lista.

### Validação de Nomes:
- É obrigatório digitar um nome para adicionar um jogador.
- Não é permitido adicionar nomes duplicados. A verificação ignora espaços e diferenças entre letras maiúsculas e minúsculas (*ex: "Danilo", "danilo" e "danilo " são considerados o mesmo nome*).

### Gerar os Times
- Clique no botão `"Gerar Times"` para iniciar o sorteio.
- Após o sorteio, os resultados são exibidos na tela.
- Use os botões `"Gerar PDF"` ou `"Enviar via WhatsApp"` para compartilhar o resultado.
- O botão `"Limpar Times"` reinicia o sorteio, mantendo a lista de jogadores.

## 2. Regras do Sorteio

O sorteio segue um conjunto de regras para garantir a organização e o equilíbrio dos jogos.

### Regras Gerais
- **Mínimo de Jogadores**: É necessário ter pelo menos 2 jogadores na lista para realizar o sorteio.
- **Seleção de Goleiros**: Os 2 primeiros jogadores da lista embaralhada são sempre designados como goleiros.
- **Atribuição dos Goleiros**: Se forem formados 2 ou mais times, o sistema sorteia e atribui aleatoriamente qual goleiro jogará no Time 1 e qual jogará no Time 2.

### Regras de Formação de Times

A lógica para formar os times varia de acordo com o número total de jogadores.

#### Cenário 1: 10 ou menos jogadores
- **Regra do Número Par**: O número total de jogadores na lista deve ser par (2, 4, 6, 8 ou 10). Se o número for ímpar, o sistema exibirá um erro.
- **Divisão dos Times**: Após a seleção dos 2 goleiros, os jogadores de linha restantes são divididos igualmente em 2 times.
  - *Exemplo (6 jogadores)*: 2 goleiros são sorteados. Os 4 jogadores restantes são divididos em 2 times de 2.
  - *Exemplo (10 jogadores)*: 2 goleiros são sorteados. Os 8 jogadores restantes são divididos em 2 times de 4.

#### Cenário 2: Mais de 10 jogadores
- **Regra do Número Par (Flexível)**: A regra do número par não se aplica. O sorteio pode ser feito com qualquer quantidade de jogadores (11, 12, 13, etc.).
- **Divisão dos Times**: Após a seleção dos 2 goleiros, o sistema cria o máximo de times completos com 4 jogadores de linha.
- **Jogadores Fora**: Qualquer jogador que sobrar após a formação dos times completos é movido para a lista de "Jogadores Fora".
  - *Exemplo (12 jogadores)*: 2 goleiros são sorteados. Dos 10 jogadores de linha restantes, 2 times de 4 são formados, e os 2 jogadores que sobraram vão para "Jogadores Fora".
  - *Exemplo (13 jogadores)*: 2 goleiros são sorteados. Dos 11 jogadores de linha restantes, 2 times de 4 são formados, e os 3 que sobraram vão para "Jogadores Fora".

## 3. Regras do Jogo

- **Primeiro Jogo**: Se forem gerados 2 ou mais times, uma observação é exibida informando que o Time 1 joga contra o Time 2 primeiro.
- **Início com a Bola**: O sistema sorteia aleatoriamente entre o Time 1 e o Time 2 para decidir qual deles inicia com a bola. O time escolhido é marcado com um ícone de bola (⚽).

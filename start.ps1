# Script de instalação e inicialização para PowerShell
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Gerador de Times de Futsal - PWA" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "[1/3] Instalando dependências..." -ForegroundColor Yellow
    npm install
    Write-Host ""
} else {
    Write-Host "[1/3] Dependências já instaladas ✓" -ForegroundColor Green
    Write-Host ""
}

# Verificar se os ícones existem
if (-not (Test-Path "icons\manifest-icon-192.maskable.png")) {
    Write-Host "[2/3] IMPORTANTE: Gere os ícones!" -ForegroundColor Yellow
    Write-Host "   Abra: icons/gerador-icones.html" -ForegroundColor White
    Write-Host "   Clique em 'Gerar e Baixar Todos os Ícones'" -ForegroundColor White
    Write-Host ""
    Read-Host "Pressione Enter após gerar os ícones"
} else {
    Write-Host "[2/3] Ícones já gerados ✓" -ForegroundColor Green
    Write-Host ""
}

Write-Host "[3/3] Iniciando servidor..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Aplicativo disponível em:" -ForegroundColor Green
Write-Host "  http://localhost:8080" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Gray
Write-Host ""

npm run dev

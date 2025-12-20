@echo off
echo ========================================
echo   Gerador de Times de Futsal - PWA
echo ========================================
echo.

REM Verificar se node_modules existe
if not exist "node_modules\" (
    echo [1/3] Instalando dependencias...
    call npm install
    echo.
) else (
    echo [1/3] Dependencias ja instaladas ✓
    echo.
)

REM Verificar se os icones existem
if not exist "icons\manifest-icon-192.maskable.png" (
    echo [2/3] IMPORTANTE: Gere os icones!
    echo    Abra: icons/gerador-icones.html
    echo    Clique em "Gerar e Baixar Todos os Icones"
    echo.
    pause
) else (
    echo [2/3] Icones ja gerados ✓
    echo.
)

echo [3/3] Iniciando servidor...
echo.
echo ========================================
echo   Aplicativo disponivel em:
echo   http://localhost:8080
echo ========================================
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

call npm run dev

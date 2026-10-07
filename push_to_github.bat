@echo off
title Push vers GitHub - atelier2
echo ============================================================
echo   Connexion et Push du projet vers GitHub (atelier2)
echo ============================================================
echo.
cd /d "%~dp0"
git push -u atelier2 main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCES] Le projet a ete push avec succes sur GitHub !
) else (
    echo [ATTENTION] Le push n'a pas pu se terminer.
)
echo.
echo Vous pouvez fermer cette fenetre.
pause

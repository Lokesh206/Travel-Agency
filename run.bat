@echo off
setlocal
title Travel India - Open Mobility Platform

echo ======================================================
echo   Starting Travel India Web Application...
echo ======================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 goto use_node

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 goto use_python

echo [INFO] Opening index.html directly in browser...
start "" "index.html"
goto done

:use_node
echo [OK] Node.js detected.
echo.
echo Opening browser at: http://localhost:3000
start "" "http://localhost:3000"
echo.
echo ======================================================
echo   CLICKABLE LINK: http://localhost:3000
echo ======================================================
echo Starting server - Press Ctrl+C in this window to stop.
echo.
node server.js
goto done

:use_python
echo [OK] Python detected.
echo.
echo Opening browser at: http://localhost:3000
start "" "http://localhost:3000"
echo.
echo ======================================================
echo   CLICKABLE LINK: http://localhost:3000
echo ======================================================
echo Starting server - Press Ctrl+C in this window to stop.
echo.
python -m http.server 3000
goto done

:done
echo.
echo Server closed.
pause

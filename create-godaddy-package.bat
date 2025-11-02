@echo off
echo ================================
echo GoDaddy Deployment Package Creator
echo ================================
echo.

REM Check if dist folder exists
if not exist "dist\roxane-belanger-app\browser" (
    echo ERROR: Production build not found!
    echo Please run: ng build --configuration production
    echo.
    pause
    exit /b 1
)

REM Create deployment package
echo Creating deployment package...
if exist "godaddy-deployment" rmdir /s /q "godaddy-deployment"
mkdir "godaddy-deployment"

echo Copying production files...
xcopy "dist\roxane-belanger-app\browser\*" "godaddy-deployment\" /s /e /y

echo.
echo ================================
echo DEPLOYMENT PACKAGE READY!
echo ================================
echo.
echo Files are ready in: godaddy-deployment\
echo.
echo Upload ALL files from this folder to your GoDaddy hosting:
echo - Via File Manager: Upload to public_html folder
echo - Via FTP: Upload to your domain root directory
echo.
echo IMPORTANT: Make sure to upload the .htaccess file!
echo.
echo Files to upload:
dir /b "godaddy-deployment\"
echo.
pause
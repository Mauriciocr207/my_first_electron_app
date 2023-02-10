# HUMAN - MACHINE INTERFACE : FRIDAY

__Para integrantes del equipo__

Téngase en cuenta que, para utilizar correctamente el programa, debe utilizarse el sketch guardado en la carpeta 'Arduino', de modo que los datos enviados por Arduino Uno se procesen correctamente en esta interfaz.

- Para utilizar el programa en desarrollo debes instalar primero [NodeJS](https://nodejs.org/es/) y [Git](https://git-scm.com/download/win).

- Descarga el repositorio por medio del ZIP que proporciona Github, o clona el repositorio en tu computadora con:
```PowerShell
git clone 'https://github.com/Mauriciocr207/cansatProgram.git'
```

- Una vez con el respositorio en tu computadora, en la terminal de windows, ve al directorio donde tienes guardado el archivo. Por ejemplo, si lo guardaste en el escritorio, el comando debe verse así:
```PowerShell
cd 'C:\Users\Tu_Usuario\Desktop'
```

- Instala las dependencias del proyecto ejecutando el siguiente código en la terminal.
``` PowerShell
npm ci
```
- En este punto, debes tener cargado el skecth de arduino en tu Arduino Uno que se ubi en la carpeta 'Arduino', para utilizar correctamente el programa.

- Inicia el programa en desarrollo
``` PowerShell
npm run electron
```
__IMPORTANTE!!__
- No ejecutes los scripts de start, package, make o tailwindcss (se verían como sigue):
```PowerShell
npm run start
npm run package
npm run make
npm run tailwindcss
```
Al ejecutarlos comenzarás a crear el ejecutable del proyecto (.exe). Dado que aun estamos en la etapa de desarrollo de la interfaz, no es necesario que obtengamos un ejecutable. Con el comando: 
```PowerShell
npm run electron
```
es suficiente para visualizar el programa. 


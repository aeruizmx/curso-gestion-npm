# curso-gestion-npm

**git init** 
Iniciar repositorio git

**npm init**
Crear el archivo package.json

* package name - nombre del paquete
* version
* description - descripcion del proyecto
* entry point  - punto de entrada de nuestro proyecto
* keywords - palabras clave
* author - persona que contruye el proyecto
* license - licencia

**npm init -y** 
Configurar un package rapido

**npm set init.author.email "correo"** 
Asignar correo default

**npm set init.author.name "nombre"** 
Asignar nombre default

**npm install paquete | npm install paquete --save | npm install paquete -S**
Instalar paquete como una dependencia

**npm install paquete --save-dev | npm install paquete -D**
Instalar paquete como una dependencia de desarrollo

**npm install paquete -g**
Instalar un paquete de forma global, revisar permisos, usar sudo cuando se ocupe

**npm list -g --depth 0**
Buscar paquetes instalados de forma global

**npm install paquete -O**
Instalar paquete de forma opcional

**npm fund**
Nos da la informacion sobre financiamiento de paquetes

**npm install paquete --dry-run**
Simula la instalación para ver información del paquete

**npm install paquete -f**
Instalar paquete forzando desde la ultima versión

**npm install**
Reinstalación completa del contenido de package.json

npm install paquete@0.15.0
Instalar un paquete con una versión especifica

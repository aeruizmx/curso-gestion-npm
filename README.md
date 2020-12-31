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

**npm install paquete@0.15.0**
Instalar un paquete con una versión especifica

**npm list**
Listar todo el arbol de paquetes instalados

**npm outdate**
Listar paquetes desactualizados

**npm outdate --dd**
Listar paquetes desactualizados a más detalle, ver el output

**npm update**
Actualizar paquetes

**npm install paquete@latest**
Actualizar a ultima version un paquete

**npm uninstall paquete**
Elimina paquete dentro de node_modules y package.json

**npm uninstall paquete --no-save**
Eliminar paquete en node_modules sin eliminar del package.json

**sudo npm link**
Instalar paquete en el equipo, debe situarse en el paquete hecho

**sudo npm install -g /Users/aruiz/Documents/Platzi/curso-gestion-dependencias-npm/random-messages**
Actualizar paquete

**npm publish**
Publicar paquete

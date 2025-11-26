## APLICACIONES DISTRIBUIDAS – 202551

### Carrera de Ingeniería en Tecnologías de la Información – ESPE

Esta práctica fue desarrollada en la asignatura Aplicaciones Distribuidas. En este proyecto se implementó una aplicación con Node.js, Express y PostgreSQL, trabajando de forma convencional, sin utilizar ORM.

## Instrucciones para ejecutar el proyecto

# Instalar dependencias

En la raíz del proyecto ejecuta:

    npm install

# Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto y copia las variables que se encuentran en .env.example (conexión a PostgreSQL, puertos, etc.).

# Crear la base de datos

En PostgreSQL crea una base de datos con el nombre:

biblioteca

# Ejecutar el script SQL

En la carpeta database encontrarás un archivo SQL que contiene todas las tablas requeridas.
Ejecuta este script en PostgreSQL (por medio de pgAdmin o psql) para generar toda la estructura de forma convencional.

# Iniciar la aplicación
Finalmente, puedes iniciar el servidor con alguno de los siguientes comandos:

    npm start

o

    npm run dev

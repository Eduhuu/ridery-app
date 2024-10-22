# Aplicación Eduardo Suarez


## Objetivos Técnicos
- Utilizar tecnologías modernas como Vue.js, Node.js, Express, MongoDB y Mongoose para construir la aplicación.
- Arquitectura: Adoptar una arquitectura SPA clara y modular para facilitar el desarrollo y mantenimiento de la aplicación.


## Proyecto


Este proyecto consta de tres elementos:
- Carpeta frontend
- Carpeta backend
- docker-compose.yml


## Docker Compose
### Requisitos previos
Debe de tener instalado:
- `Docker` (https://docs.docker.com/engine/install/)
- `docker compose` (https://docs.docker.com/compose/install/)


Este archivo nos permite ejecutar el proyecto rápidamente construyendo las imágenes necesarias de los elementos que interactúan en el proyecto.
### Estructura del archivo
Este archivo debe de tener la siguiente forma:


```
version: "3.8"
services:
  mongo_app:
    image: mongo
    ports:
      - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: <NOMBRE DE USUARIO DE LA BASE DE DATOS>
      MONGO_INITDB_ROOT_PASSWORD: <CONTRASEÑA DE USUARIO DE LA BASE DE DATOS>
  express-app:
    build: ./backend
    container_name: express-app
    ports:
      - 3000:3000
    depends_on:
      - mongo_app
    environment:
      - PORT=3000
      - JWT_SECRET=<SECRETO PARA JWT>
      - MONGO_URI=mongodb://<NOMBRE DE USUARIO DE LA BASE DE DATOS>:<CONTRASEÑA DE USUARIO DE LA BASE DE DATOS>@mongo_app:27017/<NOMBRE DE LA BASE DE DATOS>
  vue-app:
    build: ./frontend
    container_name: vue-app
    ports:
      - 8000:8000
    depends_on:
      - mongo_app
      - express-app


```
### Ejecutar docker compose
Para ejecutar este archivo debe situarse en la raíz del proyecto y ejecutar el siguiente comando:


    docker compose up -d


si obtuvo un error, pruebe con:


    docker-compose up -d


Este comando construye y ejecuta las imágenes necesarias del proyecto. Luego se puede dirigir a en su navegador:


    http://localhost:8000/




## Frontend


Carpeta que aloja la aplicación relacionada con el frontend. Esta está desarrollada utilizando `Vue 3`, `Pinia` como gestor de estados y `Vuetify` como librería de componentes.


### Requisitos previos
Debe de tener instalado:
- Node y npm (https://nodejs.org/en/download/package-manager)


### Variables de entorno
Este proyecto posee la siguiente forma:
```
VITE_BACKEND_URL=
```
VITE_BACKEND_URL variable que se utiliza para realizar peticiones al backend. Esta tiene un valor por defecto pero se puede cambiar, tomando en cuenta que si se cambia, se debe de actualizar también donde se ejecuta el servicio backend.


### Ejecutar
Para ejecutar la aplicación se debe primero instalar las dependencias:


    npm install


Luego ejecutar la aplicación con:


    npm run dev


También puede ejecutar la aplicación utilizando el Docker utilizando el dockerfile:


    docker build -t <NOMBRE DE LA IMAGEN> .
    docker run -it <NOMBRE DE LA IMAGEN>


Debe de tener en cuenta que si quiere poder utilizar la aplicación recuerde que debe de tener corriendo tanto el backend como la base de datos.


## Backend


Carpeta que aloja la aplicación relacionada con el backend. Esta fue desarrollada utilizando la tecnología de `Node` y `Express.js`


Debe de tener instalado:
- Node y npm (https://nodejs.org/en/download/package-manager)


### Variables de entorno
Este proyecto posee la siguiente forma:
```
PORT=3000
JWT_SECRET=<SECRETO PARA EL CIFRADO DE LOS TOKEN DE SESIÓN>
MONGO_URI=mongodb://<NOMBRE DE USUARIO DE LA BASE DE DATOS>:<CONTRASEÑA DE USUARIO DE LA BASE DE DATOS>@localhost:27017/<NOMBRE DE LA BASE DE DATOS>
```


### Ejecutar
Para ejecutar la aplicación se debe primero instalar las dependencias:


    npm install


Luego ejecutar la aplicación con:


    npm run dev


También puede ejecutar la aplicación utilizando el Docker utilizando el dockerfile:


    docker build -t <NOMBRE DE LA IMAGEN> .
    docker run -it <NOMBRE DE LA IMAGEN>


Debe de tener en cuenta que si quiere poder utilizar la aplicación recuerde que debe de tener corriendo tanto el frontend como la base de datos.


### Base de datos
Para el desarrollo de la aplicación se utilizó una imagen de Mongodb.
### Requisitos previos
Acceso a una instancia de Mongodb. Para ello utilizamos una imagen de  Docker (https://hub.docker.com/_/mongo).


### Variables de entorno
Para la configuración de la base de datos se deben de suministrar las siguientes variables de entorno al momento de ser ejecutado:


    MONGO_INITDB_ROOT_USERNAME
    MONGO_INITDB_ROOT_PASSWORD


### Ejecutar


Para correr el contenedor de Docker, se debe de ejecutar el siguiente comando:


    docker run -d --name <NOMBRE DE LA IMAGEN> \
    -p <PUERTO DONDE CORRERA MONGO>:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=<NOMBRE DEL USUARIO DE LA BASE DE DATOS> \
    -e MONGO_INITDB_ROOT_PASSWORD=<CONTRASEÑA DEL USUARIO DE LA BASE DE DATOS> \
    mongo




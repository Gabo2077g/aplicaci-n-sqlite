# Aplicación Back-End con SQLite

## Información General

### Materia
Desarrollo de Aplicaciones con Base de datos

### Docente
Jesus Alejandro Flores Hernandez

### Integrantes

| Nombre | Matrícula | Carrera | Rol |
|----------|----------|----------|----------|
| Gabriel Ernesto Gonzalez Palomo | 190468 | Ingeniería en Sistemas computacionales | Desarrollo de API |
| Josue de Jesus Anzueto Reyes | 220951 | Ingeniería en Sistemas computacionales | Diseño de Base de Datos |
| Carlos Rafael Mendez Gonzalez | 191209 | Ingeniería en Sistemas computacionales | Documentación |
| Raul Eduardo Cobarrubias Ballester | 220952 | Ingeniería en Sistemas computacionales | Pruebas y Validación |

---

# Objetivo del Proyecto

Desarrollar una aplicación Back-End utilizando Node.js, Express y Better-SQLite3 para administrar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), implementando una base de datos SQLite y siguiendo buenas prácticas de programación y documentación.

---

# Análisis del Problema

Las empresas y negocios requieren sistemas que permitan gestionar información de productos de manera rápida y eficiente.

Para resolver esta necesidad se desarrolló una API REST que permite:

- Registrar productos.
- Consultar productos existentes.
- Actualizar información de productos.
- Eliminar productos del sistema.

La aplicación utiliza SQLite como gestor de base de datos debido a su facilidad de implementación y bajo consumo de recursos.

---

# Alcance del Proyecto

La aplicación desarrollada consiste en una API REST para la gestión de productos utilizando Node.js, Express y SQLite.

El sistema permite realizar operaciones CRUD (Create, Read, Update y Delete) sobre una tabla de productos almacenada en una base de datos SQLite.

Las funcionalidades implementadas son:

* Consulta de todos los productos registrados.
* Consulta de un producto específico mediante su identificador.
* Registro de nuevos productos.
* Actualización de información existente.
* Eliminación de productos.
* Creación automática de la base de datos mediante un script de inicialización.
* Inserción de datos de ejemplo para pruebas.

La aplicación está diseñada para ejecutarse localmente y servir como ejemplo práctico de integración entre Node.js, Express y SQLite.

---

# Tecnologías Utilizadas

- Node.js
- Express.js
- SQLite
- Better-SQLite3
- JavaScript
- Thunder Client (Pruebas)

---

# Estructura del Proyecto

```
backend-sqlite/
│
├── package.json
├── README.md
├── database.db
│
├── src/
│   ├── app.js
│   ├── db.js
│   └── routes/
│       └── productos.routes.js
│
└── scripts/
    └── seed.js
```

---

# Descripción de la Base de Datos

La base de datos contiene una tabla llamada:

## productos

| Campo | Tipo | Descripción |
|---------|---------|---------|
| id | INTEGER | Identificador único |
| nombre | TEXT | Nombre del producto |
| descripcion | TEXT | Descripción |
| precio | REAL | Precio |
| stock | INTEGER | Existencias |
| categoria | TEXT | Categoría |

---

# Modelo de Datos

La base de datos está compuesta por una única tabla denominada **productos**.

Representación lógica:

productos

* id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
* nombre (TEXT)
* descripcion (TEXT)
* precio (REAL)
* stock (INTEGER)
* categoria (TEXT)

Relación:

La tabla productos almacena la información necesaria para la administración de inventario dentro de la aplicación. Cada registro representa un producto único identificado mediante un campo id autoincremental.

---

# Sentencia SQL de Creación

```sql
CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL,
    categoria TEXT NOT NULL
);
```

---

# Datos de Ejemplo

```sql
INSERT INTO productos
(nombre, descripcion, precio, stock, categoria)
VALUES
('Laptop Acer Nitro V15','Laptop gamer con RTX 4050',18500,5,'Computadoras');
```

---

## Descargar el proyecto

### Opción 1: Descargar ZIP

Descargar y descomprimir el archivo del proyecto.

### Opción 2: Clonar repositorio

## 1. Clonar el repositorio

```bash
git clone https://github.com/Gabo2077g/aplicaci-n-sqlite.git
```

## 2. Entrar al proyecto

```bash
cd backend-sqlite
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Crear la base de datos

```bash
npm run seed
```

## 5. Iniciar el servidor

```bash
npm start
```

---

# Ejecución

Una vez iniciado el servidor:

```txt
http://localhost:3001
```

---

# Endpoints Disponibles

## Obtener todos los productos

```http
GET /productos
```

### Ejemplo

```http
http://localhost:3001/productos
```

---

## Obtener un producto por ID

```http
GET /productos/:id
```

### Ejemplo

```http
http://localhost:3001/productos/1
```

---

## Crear un producto

```http
POST /productos
```

### Body

```json
{
  "nombre": "Monitor Samsung",
  "descripcion": "Monitor Full HD",
  "precio": 3500,
  "stock": 10,
  "categoria": "Monitores"
}
```

---

## Actualizar un producto

```http
PUT /productos/1
```

### Body

```json
{
  "nombre": "Laptop Acer Nitro V15 Actualizada",
  "descripcion": "RTX 4050 y Ryzen 5",
  "precio": 19000,
  "stock": 6,
  "categoria": "Computadoras"
}
```

---

## Eliminar un producto

```http
DELETE /productos/1
```

---

# Pruebas Realizadas

Se realizaron pruebas utilizando Thunder Client para verificar:

- Consulta de registros.
- Inserción de registros.
- Actualización de registros.
- Eliminación de registros.
- Manejo correcto de respuestas JSON.

---

# Manejo de Errores

La API implementa manejo básico de errores utilizando bloques try/catch.

Se contemplan los siguientes casos:

- Error 400: datos inválidos o incompletos.
- Error 404: recurso no encontrado.
- Error 500: error interno del servidor.

Las respuestas son enviadas en formato JSON para facilitar su interpretación por parte del cliente.

---

# Conclusiones

El proyecto permitió implementar una API REST utilizando Node.js, Express y SQLite. Se logró desarrollar correctamente las operaciones CRUD requeridas, así como la creación y manipulación de una base de datos local mediante Better-SQLite3.

Además, se reforzaron conocimientos relacionados con el desarrollo Back-End, manejo de rutas, consultas SQL y pruebas de servicios web.
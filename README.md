# Backend Project

## Descripción
Este proyecto es un backend desarrollado en Node.js que utiliza Express.js como framework principal, Sequelize como ORM para la base de datos y JWT para autenticación. A continuación, se describen los pasos desde la instalación hasta el despliegue.

---

## Requisitos Previos

1. **Node.js**: Asegúrate de tener instalado Node.js en tu máquina. [Descargar Node.js](https://nodejs.org)
2. **PostgreSQL**: Instala y configura PostgreSQL. [Descargar PostgreSQL](https://www.postgresql.org/download/)
3. **Git**: Opcional para clonar el repositorio.

---

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend```

2. Instalar las dependencias

    ```npm install```

3. Configurar las variables de entorno, encotntrara las variables necesarias en el archivo `.env.example`

4. Ejecutar las migraciones con 
    ``` npm run migrations:run ```

5. Generar el secreto para los JWT con el siguiente comando
    ``` npm run generate:jwt ```

6. Ejecutar el proyecto con
    ``` npm run start ```


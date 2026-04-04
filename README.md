# API REST Evento Deportivo 15K

API RESTful construida con Node.js y Express para gestionar el registro de corredores en un evento deportivo de 15K.

## Tecnologías

- **Node.js** + **Express** — Servidor y rutas
- **Zod** — Validación de datos
- **Arquitectura MVC** — Separación de responsabilidades

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/corredores` | Obtener todos los corredores |
| GET | `/corredores?categoria=Master` | Filtrar por categoría |
| GET | `/corredores/:id` | Obtener corredor por ID |
| POST | `/corredores` | Registrar nuevo corredor |

## Estructura del Proyecto
```
├── index.js
└── src/
    ├── controllers/
    │   └── corredorController.js
    ├── routes/
    │   └── corredorRoutes.js
    ├── schemas/
    │   └── corredorSchema.js
    ├── service/
    │   └── corredor.js
    └── data/
        └── corredores.js
```

## Validaciones

Los corredores deben cumplir:

- `nombre`: String, mínimo 2 caracteres
- `edad`: Número entero, mínimo 18 años
- `categoria`: `Libre`, `Máster` o `Veterano`
- `tiempoObjetivoMinutos`: Número entero mayor a 0

## Ejecución Local
```bash
# Instalar dependencias
npm install

# Iniciar servidor
node index.js
```

El servidor corre en `http://localhost:4000`
# Data Log API - NestJS Application

Una aplicación NestJS que permite almacenar y recuperar texto en una base de datos PostgreSQL, lista para desplegar en CapRover con el dominio **data-log.nexa-code.net**.

## 🚀 Características

- **API REST** completa para gestión de texto
- **Base de datos PostgreSQL** con TypeORM
- **Validación** de datos con class-validator
- **Dockerizada** para fácil despliegue
- **Configurada para CapRover** 
- **Health checks** incluidos

## 📋 Endpoints de la API

### Base
- `GET /api` - Mensaje de bienvenida
- `GET /api/health` - Estado de la aplicación

### Text Logs
- `POST /api/text-logs` - Crear un nuevo log de texto
- `GET /api/text-logs` - Obtener todos los logs
- `GET /api/text-logs/count` - Obtener el conteo total
- `GET /api/text-logs/:id` - Obtener un log específico
- `PATCH /api/text-logs/:id` - Actualizar un log
- `DELETE /api/text-logs/:id` - Eliminar un log

### 📖 Documentación API (Swagger)
- `GET /api/docs` - **Interfaz interactiva de Swagger UI**
- `GET /api/docs-json` - Especificación OpenAPI en formato JSON
- `GET /api/docs-yaml` - Especificación OpenAPI en formato YAML

> **🎯 Tip**: Usa la interfaz de Swagger en `/api/docs` para probar todos los endpoints de forma interactiva con ejemplos incluidos.

### Ejemplo de uso

```bash
# Crear un nuevo log de texto
curl -X POST https://data-log.nexa-code.net/api/text-logs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi primer log",
    "content": "Este es el contenido del log de texto"
  }'

# Obtener todos los logs
curl https://data-log.nexa-code.net/api/text-logs
```

## 🛠️ Desarrollo Local

### Prerrequisitos
- Node.js 18 o superior
- PostgreSQL (o usar Docker)

### Instalación
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tu configuración de base de datos

# Ejecutar la aplicación en modo desarrollo
npm run start:dev
```

### Con Docker
```bash
# Ejecutar con docker-compose (incluye PostgreSQL)
docker-compose up -d

# Solo build de la aplicación
docker build -t data-log-api .
docker run -p 3000:3000 data-log-api
```

## 🚢 Despliegue en CapRover

### Preparación
1. **Configura tu servidor CapRover** en `https://caprover.nexa-code.net/`
2. **Crea una nueva app** llamada `data-log`
3. **Configura la base de datos PostgreSQL** (puede ser una app separada en CapRover)

### Variables de entorno en CapRover
```bash
NODE_ENV=production
DATABASE_HOST=srv-captain--postgres-db  # o tu host de PostgreSQL
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=tu_password_seguro
DATABASE_NAME=data_log_db
PORT=3000
```

### Dominio personalizado
1. En CapRover, ve a tu app `data-log`
2. En la sección **HTTP Settings**:
   - Habilita **HTTPS**
   - Añade el dominio: `data-log.nexa-code.net`
   - Configura el certificado SSL

### Despliegue
```bash
# Opción 1: Desde el repositorio
# Conecta tu repositorio Git en CapRover

# Opción 2: Deploy manual
# Crea un tar.gz con los archivos del proyecto
tar -czf deploy.tar.gz --exclude=node_modules --exclude=.git .
# Sube el archivo en CapRover UI

# Opción 3: CLI de CapRover
npm install -g caprover
caprover deploy
```

## 🔧 Configuración de Cloudflare

Para usar **Cloudflare Tunnel** con tu servidor:

1. **En Cloudflare Dashboard**:
   - Ve a **Zero Trust** > **Access** > **Tunnels**
   - Crear un nuevo tunnel
   - Configura el hostname: `data-log.nexa-code.net`
   - Apunta al servicio: `http://tu-servidor-caprover:80`

2. **En tu servidor**:
   ```bash
   # Instalar cloudflared
   curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb -o cloudflared.deb
   sudo dpkg -i cloudflared.deb
   
   # Ejecutar el tunnel
   cloudflared tunnel --config /path/to/config.yml run
   ```

## 📁 Estructura del Proyecto

```
src/
├── controllers/     # Controladores de las rutas
├── dto/            # Data Transfer Objects
├── entities/       # Entidades de TypeORM
├── modules/        # Módulos de NestJS
├── services/       # Lógica de negocio
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts

docker/
├── Dockerfile
├── docker-compose.yml
└── captain-definition
```

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Coverage
npm run test:cov
```

## 📝 Notas Importantes

- La aplicación usa **sincronización automática** de la base de datos en desarrollo
- Para producción, considera usar **migraciones** de TypeORM
- Los logs se ordenan por fecha de creación (más recientes primero)
- Se incluye validación completa de datos de entrada
- CORS está habilitado para requests cross-origin

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

**🌐 Acceso en producción**: [https://data-log.nexa-code.net](https://data-log.nexa-code.net)
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

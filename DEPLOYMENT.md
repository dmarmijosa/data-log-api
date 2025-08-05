# 🚀 Guía de Despliegue en CapRover

## Archivo de despliegue creado ✅

El archivo `deploy.tar.gz` está listo para subir a CapRover.

## 📋 Pasos para el despliegue:

### 1. 🎯 Acceder a CapRover
```
URL: https://caprover.nexa-code.net
```

### 2. 🆕 Crear nueva aplicación
- Nombre de la app: `data-log`
- Activar "Has Persistent Data" (si usarás almacenamiento persistente)

### 3. 📦 Subir el código
- Ve a la pestaña "Deployment"
- Selecciona "Upload tar.gz file"
- Sube el archivo `deploy.tar.gz`

### 4. ⚙️ Configurar variables de entorno
En la pestaña "App Configs" > "Environment Variables":

```bash
NODE_ENV=production
PORT=3000
DATABASE_HOST=srv-captain--postgres-db
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=TU_PASSWORD_SEGURO_AQUI
DATABASE_NAME=data_log_db
```

### 5. 🗄️ Configurar base de datos PostgreSQL

#### Opción A: PostgreSQL en CapRover
1. Crear una nueva app llamada `postgres-db`
2. Usar la imagen: `postgres:15-alpine`
3. Variables de entorno:
   ```bash
   POSTGRES_DB=data_log_db
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=TU_PASSWORD_SEGURO_AQUI
   ```
4. Activar "Has Persistent Data"
5. Configurar puerto interno: 5432

#### Opción B: Base de datos externa
Usar una base de datos PostgreSQL externa y ajustar las variables de entorno.

### 6. 🌐 Configurar dominio
1. En "HTTP Settings" de la app `data-log`
2. Habilitar HTTPS
3. Añadir dominio personalizado: `data-log.nexa-code.net`
4. Forzar HTTPS

### 7. ☁️ Configurar Cloudflare Tunnel

En Cloudflare Dashboard:
1. Zero Trust > Access > Tunnels
2. Crear nuevo tunnel o usar existente
3. Configurar hostname: `data-log.nexa-code.net`
4. Servicio: `http://tu-servidor-caprover:80`

### 8. 🔍 Verificar despliegue

Una vez desplegado, verifica:
- ✅ Health check: `https://data-log.nexa-code.net/api/health`
- ✅ API base: `https://data-log.nexa-code.net/api`
- ✅ Swagger docs: `https://data-log.nexa-code.net/api/docs`

### 9. 🧪 Probar la API

```bash
# Health check
curl https://data-log.nexa-code.net/api/health

# Crear un log
curl -X POST https://data-log.nexa-code.net/api/text-logs \
  -H "Content-Type: application/json" \
  -d '{"title": "Primer log en producción", "content": "¡La API está funcionando en producción!"}'

# Obtener todos los logs
curl https://data-log.nexa-code.net/api/text-logs
```

## 🔧 Resolución de problemas

### Error de conexión a base de datos:
- Verificar que PostgreSQL esté ejecutándose
- Revisar variables de entorno de conexión
- Verificar que el nombre del servicio sea correcto

### Error 502/503:
- Verificar que la app esté ejecutándose
- Revisar logs en CapRover
- Verificar health check

### Dominio no funciona:
- Verificar configuración de Cloudflare
- Verificar DNS
- Verificar certificado SSL

## 📊 Monitoreo

Una vez desplegado, puedes monitorear:
- **Logs**: En CapRover > Apps > data-log > Logs
- **Métricas**: CPU, memoria, red en CapRover
- **Health**: Endpoint `/api/health`
- **Documentación**: Swagger UI en `/api/docs`

## 🎉 ¡Listo!

Tu API NestJS con PostgreSQL ya está ejecutándose en producción con:
- ✅ API REST completa
- ✅ Base de datos PostgreSQL
- ✅ Documentación Swagger
- ✅ Health checks
- ✅ HTTPS habilitado
- ✅ Dominio personalizado

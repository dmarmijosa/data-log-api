# 🔗 Guía de Despliegue con Git Repository

## 📁 Repositorio Git creado ✅

El proyecto ya está inicializado como repositorio Git con el commit inicial.

## 🚀 Opciones de despliegue:

### Opción 1: GitHub + CapRover (RECOMENDADO)

#### 1. Crear repositorio en GitHub
```bash
# Ve a github.com y crea un nuevo repositorio llamado 'data-log-api'
# Luego ejecuta estos comandos:

git remote add origin https://github.com/TU_USUARIO/data-log-api.git
git branch -M main
git push -u origin main
```

#### 2. Configurar CapRover para usar GitHub
1. En CapRover Dashboard: `https://caprover.nexa-code.net`
2. Crear nueva app: `data-log`
3. En la pestaña "Deployment":
   - Seleccionar "Method 3: Deploy from Github/Bitbucket/Gitlab"
   - Repository: `https://github.com/TU_USUARIO/data-log-api`
   - Branch: `main`
   - Username: tu username de GitHub
   - Password: usar un Personal Access Token

#### 3. Personal Access Token de GitHub
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token con scopes:
   - `repo` (acceso completo al repositorio)
3. Usar este token como password en CapRover

---

### Opción 2: GitLab + CapRover

#### 1. Crear repositorio en GitLab
```bash
git remote add origin https://gitlab.com/TU_USUARIO/data-log-api.git
git branch -M main
git push -u origin main
```

#### 2. Configurar CapRover para usar GitLab
- Repository: `https://gitlab.com/TU_USUARIO/data-log-api`
- Username: tu username de GitLab
- Password: usar un Personal Access Token de GitLab

---

### Opción 3: Deploy Manual (si prefieres)

```bash
# Usar el archivo tar.gz ya creado
./deploy.sh
# Luego subir deploy.tar.gz manualmente en CapRover
```

## ⚙️ Configuración en CapRover

### Variables de entorno (para cualquier método):
```bash
NODE_ENV=production
PORT=3000
DATABASE_HOST=srv-captain--postgres-db
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=TU_PASSWORD_SEGURO
DATABASE_NAME=data_log_db
```

### Configuración de dominio:
- Domain: `data-log.nexa-code.net`
- Enable HTTPS: ✅
- Force HTTPS: ✅

## 🔄 Deploy automático

Una vez configurado con Git, cada vez que hagas push a la rama main:

```bash
# Hacer cambios en el código
git add .
git commit -m "✨ Nuevas características"
git push origin main
# CapRover automáticamente detectará el cambio y hará redeploy
```

## 🎯 URLs después del deploy

- **API**: `https://data-log.nexa-code.net/api`
- **Health**: `https://data-log.nexa-code.net/api/health`
- **Swagger**: `https://data-log.nexa-code.net/api/docs`

## 🔧 Resolución de problemas

### Error de autenticación Git:
- Verificar que el Personal Access Token tenga los permisos correctos
- Verificar que el token no haya expirado

### Error de build:
- Verificar que el `captain-definition` esté en la raíz
- Verificar que el `Dockerfile` sea accesible
- Revisar logs de build en CapRover

### Error de conexión DB:
- Verificar que PostgreSQL esté ejecutándose en CapRover
- Verificar variables de entorno de conexión

## 📊 Ventajas del deploy con Git:

✅ **Deploy automático** en cada push
✅ **Historial de versiones** completo
✅ **Rollback fácil** a versiones anteriores
✅ **Colaboración** con otros desarrolladores
✅ **CI/CD** fácil de implementar
✅ **Backup automático** del código

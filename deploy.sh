#!/bin/bash

# Script de despliegue para CapRover
# Uso: ./deploy.sh

echo "🚀 Iniciando despliegue a CapRover..."

# Verificar que estemos en el directorio correcto
if [ ! -f "captain-definition" ]; then
    echo "❌ Error: No se encontró captain-definition. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Crear archivo tar.gz para CapRover
echo "📦 Creando archivo de despliegue..."
tar -czf deploy.tar.gz \
    --exclude=node_modules \
    --exclude=.git \
    --exclude=dist \
    --exclude=.env \
    --exclude=docker-compose*.yml \
    --exclude=deploy.tar.gz \
    .

echo "✅ Archivo deploy.tar.gz creado exitosamente"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ve a tu CapRover dashboard: https://caprover.nexa-code.net"
echo "2. Crea una nueva app llamada 'data-log'"
echo "3. Sube el archivo deploy.tar.gz"
echo "4. Configura las variables de entorno:"
echo "   - NODE_ENV=production"
echo "   - DATABASE_HOST=srv-captain--postgres-db"
echo "   - DATABASE_PORT=5432"
echo "   - DATABASE_USERNAME=postgres"
echo "   - DATABASE_PASSWORD=tu_password_seguro"
echo "   - DATABASE_NAME=data_log_db"
echo "   - PORT=3000"
echo "5. Configura el dominio: data-log.nexa-code.net"
echo "6. Habilita HTTPS"
echo ""
echo "🌐 Una vez desplegado, tu API estará disponible en:"
echo "   https://data-log.nexa-code.net/api"
echo "   https://data-log.nexa-code.net/api/docs"

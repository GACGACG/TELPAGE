# 1. Ejecuta un contenedor a partir de una imagen
docker run [opciones] nombre_imagen [comando]

# 2. Muestra los contenedores en ejecución
docker ps [opciones]

# 3. Muestra todos los contenedores, incluyendo los detenidos
docker ps -a

# 4. Detiene un contenedor en ejecución
docker stop ID_o_nombre_contenedor

# 5. Inicia un contenedor detenido
docker start ID_o_nombre_contenedor

# 6. Reinicia un contenedor
docker restart ID_o_nombre_contenedor

# 7. Ejecuta un comando dentro de un contenedor en ejecución
docker exec [opciones] ID_o_nombre_contenedor [comando]

# 8. Construye una imagen desde un Dockerfile en un directorio
docker build [opciones] ruta_directorio

# 9. Lista las imágenes disponibles en la máquina
docker images [opciones]

# 10. Elimina una imagen
docker rmi nombre_imagen

# 11. Descarga una imagen desde Docker Hub
docker pull nombre_imagen

# 12. Sube una imagen a Docker Hub
docker push nombre_imagen

# 13. Gestiona redes Docker
docker network [opciones]

# 14. Gestiona volúmenes Docker
docker volume [opciones]

# 15. Muestra los logs de un contenedor en ejecución
docker logs ID_o_nombre_contenedor

# 16. Construir la imagen desde la carpeta ./Backend/BBDD, ejecuta el siguiente comando:
docker build -t nombre_imagen .

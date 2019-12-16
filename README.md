Pasos para ejecutar la aplicacion (se debe estar en el directorio del proyecto):
-se debe contar con una base de datos mysql ya creada con el nombre de "empresas" (acorde a lo indicado en el archivo ".env")
-renombrar el archivo ".env.example" a ".env."
-editar el archivo ".env." con la siguiente linea:
DB_DATABASE=empresas
-generar la key de la aplicacion con el comando: php artisan:key genarate
-instalar dependencias con el comando: composer install
-ejectutar la migracion con el comando: php artisan migrate
-levantar la aplicacion con el comando php artisan serve. Ir a :http://localhost:8000 para ver en funcionamiento la aplicación.

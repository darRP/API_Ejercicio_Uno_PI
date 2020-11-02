#  API_Ejercicio_Uno_PI 
Esta API recibe un parámetro de entrada que calcula un número random entre (parámetro/2 y el parámetro). Luego calcula los decimales del pi considerando el número random.
## Instalación
### 1 Paso
**1 forma**. Dar clic en Code y luego en Donwload Zip

**2 forma.** Crear una carpeta, ingresar a git bash y ejecutar

    git clone https://github.com/darRP/API_Ejercicio_Uno_PI.git
### 2 Paso
- Instala [NodeJS](https://nodejs.org/es/ "NodeJS")

### 3 Paso
- Instala la linea de comandos de  [AdonisJS](https://adonisjs.com/docs/4.1/installation "AdonisJS")

       npm i -g @adonisjs/cli
	  
### 4 Paso
- Descarga las dependencias para que el proyecto funcione correctamente.

       npm install

### 5 Paso
- Una vez realizado todo lo anterior podemos ejecutar el siguiente comando para levantar nuestro proyecto.

      adonis serve --dev
	  
## Ejecución
### 1 Paso
- Ya con nuestro proyecto funcionando pueden dirigirse a su manejador de peticiones favorito, en este caso se trabajo con Postman en este mismo proyecto se encuentra el archivo [APIEjercicioUno.postman_collection.json](https://github.com/darRP/API_Ejercicio_Uno_PI/blob/main/APIEjercicioUno.postman_collection.json "APIEjercicioUno.postman_collection.json") el cual es la colección de postman que se uso para pruebas, el método usado es GET y la url por defecto es http://127.0.0.1:3333/getPI?numero=0 (si utilizas el mismo [.env ](https://github.com/darRP/API_Ejercicio_Uno_PI/blob/main/.env ".env ")que se subió con este proyecto tendrás el mismo puerto y url del servidor localhost), también en esta colección se detalla los response de errores en caso de que se envié un numero vació o un string o un negativo.
## Test
### 1 Paso
- Si necesita hacer Test a la aplicación solo ejecute el comando:

      adonis test
### 2 Paso
- Si necesita ver la cobertura del código también puede hacerlo, ya que se utilizo la librería [nyc](https://www.npmjs.com/package/nyc "nyc") para ver la cobertura, puede ejecutar el comando:

      .\node_modules\.bin\nyc adonis test --bail


## Documentacion
### Swagger
- Si necesitas ver la documentación de esta API de una forma mas interactiva puedes ir a https://editor.swagger.io, aquí podrás importar el archivo [SwaggerApiEjercicioUno-PI.yaml](https://github.com/darRP/API_Ejercicio_Uno_PI/blob/main/SwaggerApiEjercicioUno-PI.yaml "SwaggerApiEjercicioUno-PI.yaml") que se encuentra en este proyecto.

## Dudas
- Si no sabes como ejecutar este código o no entiendes alguna cosa sobre las tecnologías usadas puedes contactarme a:
    danretamalesp@gmail.com

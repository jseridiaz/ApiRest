# Introduccion Api concesionarios y vehículos

Aquí encontrarás todo lo necesario para encontrar las rutas para obtener los datos de la Api de coches y concesionarios. 

La API provee de todos los vehículos que se encuentran en la base de datos como también de los concesionarios registrados en la web. Los datos que se podrán obtener de esta api de ellos son los siguientes:
- Nombre de los Concesionarios de vehículos
- Dirección del concesionarios
- Marcas de vehículos
- Vehículos
- Kilometraje de los vehículos
- Estado
- Color
- Precios
- Accesorios
- Modelo
- Cilindrada
- Año


Para Acceder a ellos se realiza a través de la solicitud de la siguiente Url y endpoints que se encuentran a continuación. 

## Base url:
-   La URL base de la api es la siguiente: http://localhost:3000/api/v1/
-   A continuación se detallaran los endpoints para conseguir los datos del que dispone la Api.


## ENDPOINTS PARA BUSQUEDA DE VEHICULOS:
```sh
/car - Obtención de todos los vehículos
/car/:marca -Busqueda de vehículos por marca
/car/price/:precio - Busqueda de vehículo por precio
/car/:marca/price/:precio - Busqueda de vehículo por marca y precio
```
### /car
Con este Endpoint se obtendra en un array de objetos con **todos los vehículos registrados por la Api** y todos sus datos. A continuación se muestra un ejemplo de como se obtendrán los datos;

>{
>		"_id": "664b1c3653c8fd42f6542bd4",
>		"marca": "Mercedes-Benz",
>		"nombre": "Clase-C",
>		"modelo": "200 Avantgarde",
>		"cilindrada": 1497,
>		"carroceria": "Otro",
>		"km": 124002,
>		"año_Fab": 2020,
>		"precio": 23000,
>		"color": [
>			"white"
>		],
>		"estado": "Usado",
>		"imgUrl": [
>			"https://images.hgmsites.net/lrg/2020-mercedes-benz-c-class-angular-front-exterior-vie>           w_100745106_l.jpg"
>		],
>		"accesorios": [
>			"Nav",
>			"clima"
>		],
>		"combustible": "Diesel",
>		"cambio": "Manual",
>		"__v": 0,
>   	"updatedAt": "2024-05-21T10:39:45.050Z"
>	},
	
### /car/:marca
Introduciendo el endpoint :marca se obtendrán como resultado **los vehículos pertenecientes a la marca indicada**. ¿Cuales son las marcas que están incluidas?

|Marcas|
|----|
|Audi|
|BMW|
|Mercedes-Benz|
|Seat|
|Porsche|

### /car/price/:precio
Con el endpoint precio se obtendrá como resultado un array con los vehículos que tengan un precio igual o inferior al indicado. 

### /car/:marca/price/:precio
Introduciendo los valores de marca y precio **se obtendrán los vehículos que coincidan con la marca introducida y que además tenga un precio igual o menos que el indicado** en la solicitud.

## ENDPOINTS PARA BUSQUEDA DE CONCESIONARIOS:
```sh
/concesionarios - Todos los concesionarios
/concesionarios/:marca - Concesionarios que poseen la marca indicada
```
### /concesionarios
Al añadir a la URL Base el endpoint /concesionarios **se consiguen todos los resultados de los concesionarios** del que disponen la Api. En la solicitud se obtendrá la siguiente información de cada uno de ellos:
>	{
		"_id": "664c83b32619e51f30e9ac0e",
		"nombre": "Concesionario Las Palmeras",
		"direccion": "Avenida las palmeras 32",
		"telefono": 687214440,
		"marcas": [
			"BMW",
			"Mercedes-Benz", ...
		],
		"vehiculos": [{....}]
		"createdAt": "2024-05-21T11:21:23.143Z",
		"updatedAt": "2024-05-21T11:40:36.075Z",
		"__v": 0
	}

## /concesionarios/:marca

Al indicar la marca **se obtienen los concesionarios que tienen coches de la marca indicada**.
Las marcas de los vehículos que se pueden elegir en la Api son se encuentran en la siguiente tabla:
|Marcas|
|----|
|Audi|
|BMW|
|Mercedes-Benz|
|Seat|
|Porsche|



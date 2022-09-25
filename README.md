# BSale Product API
  Proyecto creado como reto técnico para empresa Bsale.

Tecnologías utilizadas: Express, Javascript, MySQL, Sequelize.

```
```
**Sugerencia para el manejo**
[Axios](https://axios-http.com/) librería JavaScript para generar las operaciones como cliente HTTP.
```
```
## Uso de la API

### Manejo de Categorías / Productos

Para el manejo es la misma estructura de petición con axios y la respuesta, sólo cambia la ruta:

_Ruta requerida productos: `http://localhost:8000/product`_

  _Ruta requerida: `http://localhost:8000`_
  
  _Uso de Axios para hacer la petición HTTP_
  _Método_: `GET`
  
  ```javascript
  axios
  .get('http://localhost:8000')
  .then((response)=> {
    console.log(response.data)
  })
  .catch((error)=> {
    console.log(error)
  })

  *Ejemplo de respuesta*
    
```json
{
    "message": "Operación exitosa",
    "result": [
        {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1
        }
    ]
}
```

*Link repositorio de referencia*: https://github.com/cazavi/bsale-front-challenge

```



import axios from "axios"

//consumiendo la lista de los personajes con el metodo fetch
const getPersonajes = async () => {
    try{
        //el metodo fetch por lo general toma en cuenta que el endpoint de la API es de tipo GET, si el endpoint fuera de otro tipo (POST, PUT, PATCH, DELETE..) se tiene que especificar
        const response = await fetch("https://dragonball-api.com/api/characters")
        //convirtiendo la respuesta en un json
        const dataPersonajes = await response.json()
        return dataPersonajes

    }catch(error){
        console.log("Error al consumir la lista de personajes", error)
    }
}

//consumiento la lista con la libreria axios
const getCharacters = async () => {
    try{
        //peticiones HTTP: get, post, put, patch, delete
        //axios solicita el tipo de peticion HTTP que se va realizar con el endpoint y la respuesta ya la devuelve en un json
        const response = await axios.get("https://dragonball-api.com/api/characters")
        return response

    }catch(error){
        console.log("Error al consumir la lista de personajes", error)
    }
}


export { getPersonajes, getCharacters }
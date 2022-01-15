const {Character,Episode} = require('../db');
const axios= require('axios');

const getAllCharacters= async (req,res) =>{
    try{
        const api= await axios.get("https://rickandmortyapi.com/api/character")
       
        //con el findAll decimos q traiga la info de la api, mas la info de la db,usando la pk(trae todos los personajes,de la api y creados)
        const db=await Character.findAll({include:Episode})//traigo un personaje con sus episodios incluidos

        if(api || db){
            let apiResponse= api.data.results?.map((ch)=>{
                return {
                    name:ch.name,
                    species:ch.species,
                    origin:ch.origin.name,
                    image:ch.image,
                    episode:ch.episode,
                }
            })
            let response= [...apiResponse,db];
            res.send(response);
        }
    }catch(e){
        console.error(e)
    }
}

const postCharacter= async(req,res)=>{
    try{
        const aCharacter= req.body;
             //aCharacter guarda la info que recibe el form.
       
        let [newCharacter, ch]= await Character.findOrCreate({
            //busca un personaje con las caracteristicas especificadas en el where, y si no lo encuentra lo crea
            // 'ch' es un booleano que indica si lo tuvo que crear o no
            where:{
                name: aCharacter.name,
                species: aCharacter.species,
                origin: aCharacter.origin,
                image: aCharacter.image,
                created:true,
            }
            
        })
        // console.log(' este es el newCharacter:',newCharacter )
        // console.log('este es el ch:',ch )
        //seteamos los episodes del array de episodios mediante la tabla intermedia, a el nuevo personaje
        await newCharacter.setEpisodes(aCharacter.episode);
        console.log(newCharacter) //add/set + nombre del model en plural
        return res.send(newCharacter);
       
       }
    catch(e){
        console.error(e)
    }
}

module.exports={
    getAllCharacters,
    postCharacter
}
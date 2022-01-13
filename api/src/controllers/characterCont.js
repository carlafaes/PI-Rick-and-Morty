const {Character,Episode} = require('../db');
const axios= require('axios');

const getAllCharacters= async (req,res) =>{
    try{
        const api= await axios.get("https://rickandmortyapi.com/api/character")
        const db=await Character.findAll({include:Episode})

        if(api || db){
            let apiResponse= api.data.results?.map((ch)=>{
                return {
                    name:ch.name,
                    species:ch.species,
                    origin:ch.origin,
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
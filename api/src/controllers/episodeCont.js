const {Episode} = require('../db');
const axios= require('axios');

const getEpisodes = async(req,res)=>{
 try{
     //hacemos el pedido a la api
     let episode= await axios.get('https://rickandmortyapi.com/api/episode');
    

     if(episode){
        //mapeamos a la variable response para obtener solo el id y el name
        let response= episode.data.results?.map((e)=>{
            return{
                id:e.id,
                name:e.name
            }
        })
       

        //recorre el la variable response y busca el objeto, si no lo encuentra lo crea con el find or create
        response.forEach(async (e)=>{
            await Episode.findOrCreate({
                where:{
                    id:e.id,
                    name:e.name,
                }
            })
        })
        return res.send(response);
     }
     else{
         console.log('episodes:',episode)
     }
    }
    catch(e){
        console.error(e);
    }
}

module.exports={
    getEpisodes
}
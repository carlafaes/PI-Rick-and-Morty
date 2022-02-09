const {Character,Episode} = require('../db');
const {Op} = require('sequelize')
const axios= require('axios');

const getAllCharacters= async (req,res) =>{
   
    //--------------------Name-----------------//
    try{
        let{name} = req.query;
        let api;
        // console.log(api,'este 1 api')
        let db;
        let response=[];
        // const charForPage= 5;
        if(name){

            // busqueda por nombre
            api = (await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)).data.results;                                                                                
            db= await Character.findAll({
                include:Episode,
                where:{
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            response= [...db, api]
            res.status(200).send(response.length ? response : 'Info character not found');
            // res.status(200).json(response.slice(charForPage * (page -1), (charForPage * (page - 1)) + charForPage)) 

        }
        else{
            api= await axios.get("https://rickandmortyapi.com/api/character")
       
            //con el findAll decimos q traiga la info de la api, mas la info de la db,usando la pk(trae todos los personajes,de la api y creados)
           db=await Character.findAll({include:Episode})
        //   console.log(db)
           dbFlat= db.flat()
         
           //traigo un personaje con sus episodios incluidos

    
            if(api || dbFlat){
                let apiResponse= api.data.results?.map((ch)=>{
                    return {
                        id: ch.id,
                        name:ch.name,
                        species:ch.species,
                        origin:ch.origin.name,
                        image:ch.image,
                        episode:ch.episode,
                    }
                })
              
                response= [...apiResponse,dbFlat];
                let resFlat= response.flat()
            //    console.log(db)
            //  console.log('este es el response',resFlat)
                res.status(200).json(resFlat);
                 // res.status(200).json(response.slice(charForPage * (page -1), (charForPage * (page - 1)) + charForPage))
            }
              
     
        }
       
       

        //-------------------Pagination-----------------------//
        // if(page.length > 0){
        //     return  res.json(response.slice(charForPage * (page -1), (charForPage * (page - 1)) + charForPage)) 
        // }
        // else{
        //     return res.send('no existen los personajes')
        // }
       

       

    }catch(e){
        console.error(e)
    }
}

const postCharacter= async(req,res)=>{
    try{
        const aCharacter= req.body;
             //aCharacter guarda la info que recibe el form.
             console.log(aCharacter,'es el aCharacter')
       
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
        let epiFlat= aCharacter.episode.flat()
         console.log(epiFlat,'este es el epiflat')
        await newCharacter.setEpisodes(epiFlat);
        console.log(newCharacter,'este es el new character') //add/set + nombre del model en plural
        return res.send(newCharacter);
       
       }
    catch(e){
        console.error(e)
    }
}

const idCharacter= async(req,res)=>{
    const {id}=req.params;
    console.log(id)
    // npm

    let character;
    try{
        if(isNaN(id)){
                character = await Character.findByPk(id,{
                    include:{
                        model:Episode,
                        attributes:['name'],
                            through:{
                                attributes:[],
                            }
                        }
                    }
                )
                 console.log(character)
            //  res.send(character)
         }
        else{
                //API
                character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                character = character.data
            }
            character?
            // return 
            res.status(200).json(character):
            res.status(404).send("the character doesn't exist")
       
    }
    catch(err){
        console.log(err,'error de idCharacter');
    }
    console.log(character,'idcharacter')
}

       



module.exports={
    getAllCharacters,
    postCharacter,
    idCharacter
}
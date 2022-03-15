const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const {Episode} = require('./src/db')
const {getEpisodes} = require('./src/controllers/episodeCont')

// Syncing all the models at once.
conn.sync({ force: true }).then( () => {

  // let aux= await Episode.findAll();//busca si hay algo en db
  // if(!aux.length){
  //   getEpisodes() //si no hay nada realiza la precarga
  // }

  server.listen(process.env.PORT, () => {
    console.log('Listening at 3001') // eslint-disable-line no-console
  })
})
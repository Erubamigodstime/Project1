const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

  let _dbConnection




 const connectToDb = (clb) =>{
    if (_dbConnection) {
        console.log('DB is already connected')
        return clb(null, _dbConnection)
        
    }
    MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true,   })
    .then((client)=>{
        _dbConnection = client;
        console.log('server connected')
        clb(null, _dbConnection)
       

  
    })
    .catch(err => {
        console.log(err)
        return clb(err)
    })   


 };





 const getDb = () => {
    if (!_dbConnection) {
        throw error('Db not initialized')
        
    }
    return _dbConnection
 };

 


 module.exports = {
    connectToDb,
    getDb
    
 }


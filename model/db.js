//  const  MongoClient = require('mongodb').MongoClient
const { MongoClient, ServerApiVersion } = require('mongodb');

  let _dbConnection
 const uir = "mongodb://atlas-sql-66031ecfd7650526f26cd240-wd5ag.a.query.mongodb.net/Books?ssl=true&authSource=admin";
 const url = 'mongodb+srv://erubamigodstime:godstime@cse340.uclncjl.mongodb.net/Contacts';
 
 const link = 'mongodb://atlas-sql-66031ecfd7650526f26cd240-wd5ag.a.query.mongodb.net/Contacts?ssl=true&authSource=admin'



 const connectToDb = (clb) =>{
    if (_dbConnection) {
        console.log('DB is already connected')
        return clb(null, _dbConnection)
        
    }
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  auth: {
        username: 'erubamigodstime',
        password: 'godstime'
      } })
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


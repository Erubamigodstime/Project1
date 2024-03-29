// const { ObjectId } = require('bson');
const mongodb = require('../model/db');
const ObjectId = require('mongodb').ObjectId




let db;
const homePage = (req, res)=>{
    res.json({title: 'Home Page', body: 'This is the Home page'}); 

}

const getOne = async (req, res, next) => {
  try {
    let userId = new ObjectId(req.params.id); // convert string id
    console.log('Connected to the database');
    const collection = mongodb.getDb().db().collection('users');
    const count = await collection.countDocuments();
    console.log(`Number of documents in the user collection: ${count}`);
    if (count === 0) {
      console.log('users collection is empty');
    }
    const result = await collection.find({_id: userId});
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving the data.');
  }
};
const getAll = async (req, res, next) => {
  try {
    console.log('Connected to the database');
    const collection = mongodb.getDb().db().collection('users');
    const count = await collection.countDocuments();
    console.log(`Number of documents in the user collection: ${count}`);
    if (count === 0) {
      console.log('user collection is empty');
    }
    const result = await collection.find();
    const lists = await result.toArray();     
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving the data.');
  }
};
module.exports = { getOne, getAll, homePage };







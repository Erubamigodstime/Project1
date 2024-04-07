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

const createUser = async (req, res, next) => {
  try {
    console.log(req);
    console.log(req.body);

    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favouriteColor: req.body.favouriteColor,
      birthday: req.body.birthday
    }
    const collection = mongodb.getDb().db().collection('users');
    const initialCount = collection.countDocuments();
    await collection.insertOne(user);
    const newCount = collection.countDocuments();
    // Checking whether a document was added or not by comparing counts before and after adding an item
    res.setHeader('Content-Type', 'application/json');
    if (initialCount == newCount) {
      throw Error("Failed to add a new user.");
    } else {
      res.status(201).json({ message: "User created successfully." });       
    
  }} catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving the data.');
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userId = new ObjectId (req.params.id);
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favouriteColor: req.body.favouriteColor,
      birthday: req.body.birthday
    }
    const collection = mongodb.getDb().db().collection('users');    
    await collection.replaceOne({_id: userId}, user);   
       
    res.setHeader('Content-Type', 'application/json');    
    res.status(201).json({ message: "User updated successfully." });

       
  } catch (error) {
    console.error(error);
    res.status(500).send(`Unable to Update user with ${userId}.`);
    
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = new ObjectId (req.params.id);
    const user = {
      firstName: req.firstName,
      lastName: req.lastName,
      email: req.email,
      favouriteColor: req.favouriteColor,
      birthday: req.birthday
    }
    const collection = mongodb.getDb().db().collection('users');
    
    await collection.remove({_id: userId},user);   
       
    res.setHeader('Content-Type', 'application/json');
    if (response.deletedCount > 0) {
      res.status(201).json({ message: "User updated successfully." });
      
    }else{
      res.status(500).send(`Unable to delete user with ${userId}.`);

    }    
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving the data.');
  }
};
module.exports = { getOne, getAll, homePage, updateUser, createUser, deleteUser };







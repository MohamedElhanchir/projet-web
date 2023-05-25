var express = require('express')
var router = express.Router()

const {getUsers, getUser, addUser,delUser,updateUser}=require('../models/users')


const authentification=require('../middleware/authentification')

/**
 * get all users
 */
router.get('/', function(req, res, next) {
  const {take,skip}=req.query;
  try{
  getUsers(take,skip).then(users=>res.json(users))
   }
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des utilisateurs' });
   }
});

/**
 * get user by id
 */
router.get('/:id([0-9]+)', function(req, res, next) {
   try{getUser(parseInt(req.params.id)).then(user=>res.json(user))}
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération d\'utilistateur '+ parseInt(req.params.id)});
    }
});


/**
 * create a new user
 */
router.post('/', authentification,function(req, res, next) {
 try{addUser(req.body).then(user=>res.json(user))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création d\'utilistateur '});
  }
})

/**
 * upadte user
 */
router.patch('/',authentification,function(req, res, next) {
  try{updateUser(req.body).then(user=>res.json(user))}
  catch(error){
   console.error(error);
   res.status(500).json({ error: 'Une erreur est survenue lors de la modification d\'utilistateur '+parseInt(req.body.id)});
   }
 })

/**
 * delete a user
 */
router.delete('/:id([0-9]+)', authentification,function(req, res, next) {
 try{delUser(parseInt(req.params.id)).then(user=>res.json(user))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création d\'utilistateur '+parseInt(req.params.id)});
  }
});




module.exports = router;

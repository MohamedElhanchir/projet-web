var express = require('express')
var router = express.Router()

const {getCategories, getCategorie, addCategorie,delCategorie,updateCategorie}=require('../models/categories')


/**
 * get all categories
 */
router.get('/', function(req, res, next) {
  const {take,skip}=req.query;
  try{
  getCategories(take,skip).then(users=>res.json(users))
   }
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des categories' });
   }
});

/**
 * get categorie by id
 */
router.get('/:id([0-9]+)', function(req, res, next) {
   try{getCategorie(parseInt(req.params.id)).then(user=>res.json(user))}
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du categorie '+ parseInt(req.params.id)});
    }
});


/**
 * create a new categorie
 */
router.post('/', function(req, res, next) {
 try{addCategorie(req.body).then(user=>res.json(user))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création du categorie '});
  }
})

/**
 * upadte a categorie
 */

router.patch('/',function(req, res, next) {
  try{updateCategorie(req.body).then(user=>res.json(user))}
  catch(error){
   console.error(error);
   res.status(500).json({ error: 'Une erreur est survenue lors de la modification du categorie '+ parseInt(req.body.id)});
   }
 })

/**
 * delete a categorie
 */
router.delete('/:id([0-9]+)', function(req, res, next) {
 try{delCategorie(parseInt(req.params.id)).then(user=>res.json(user))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création du categorie '+ parseInt(req.params.id)});
  }
});




module.exports = router;

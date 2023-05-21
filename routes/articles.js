var express = require('express')
var router = express.Router()


const {getArticles, getArticle, addArticle,delArticle,updateArticle}=require('../models/articles')


/**
 * get all articles
 */
router.get('/', function(req, res, next) {
  const {take,skip}=req.query;
  try{
  getArticles(take,skip).then(users=>res.json(users))
   }
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des articles' });
   }
});

/**
 * get article by id
 */
router.get('/:id([0-9]+)',function(req, res, next) {
   try{getArticle(parseInt(req.params.id)).then(user=>res.json(user))}
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération d\'article '+ parseInt(req.params.id)});
    }
});


/**
 * create a new article
 */
router.post('/', function(req, res, next) {
 try{addArticle(req.body).then(user=>res.json(user))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création d\'article '});
  }
})

/**
 * upadte article
 */
router.patch('/',function(req, res, next) {
  try{updateArticle(req.body).then(user=>res.json(user))}
  catch(error){
   console.error(error);
   res.status(500).json({ error: 'Une erreur est survenue lors de la modification d\'article '});
   }
 })

/**
 * delete a article
 */
router.delete('/:id([0-9]+)',function(req, res, next) {
 try{delArticle(parseInt(req.params.id)).then(user=>res.json(user))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création d\'article '});
  }
});


module.exports = router;

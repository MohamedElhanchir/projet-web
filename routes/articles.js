var express = require('express')
var router = express.Router()

const authentification=require('../middleware/authentification')

const {getArticles, getArticle, addArticle,delArticle,updateArticle,getArticlesContentById,
       getArticlesContent}=require('../models/articles')


/**
 * get all articles
 */
router.get('/', function(req, res, next) {
  const {take,skip}=req.query;
  try{
  getArticles(take,skip).then(articles=>res.json(articles))
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
   try{getArticle(parseInt(req.params.id)).then(article=>res.json(article))}
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération d\'article '+ parseInt(req.params.id)});
    }
});


/**
 * create a new article
 */
router.post('/', authentification,function(req, res, next) {
 try{addArticle(req.body).then(article=>res.json(article))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création d\'article '});
  }
})

/**
 * upadte article
 */
router.patch('/',authentification,function(req, res, next) {
  try{updateArticle(req.body).then(article=>res.json(article))}
  catch(error){
   console.error(error);
   res.status(500).json({ error: 'Une erreur est survenue lors de la modification d\'article '});
   }
 })

/**
 * delete a article
 */
router.delete('/:id([0-9]+)',authentification,function(req, res, next) {
 try{delArticle(parseInt(req.params.id)).then(article=>res.json(article))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la suppression d\'article '});
  }
});
/**
 * get all articles with content
 */
router.get('/contenu',async (req, res) => {
  try{getArticlesContent().then(articles=>res.json(articles))}
  catch(error){
   console.error(error);
   res.status(500).json({ error });
   }
})

/**
 * get all article with content
 */
router.get('/contenuById:id([0-9]+)',async (req, res) => {
  try{getArticlesContentById(parseInt(req.params.id)).then(article=>res.json(article))}
  catch(error){
   console.error(error);
   res.status(500).json({ error });
   }
})

module.exports = router;

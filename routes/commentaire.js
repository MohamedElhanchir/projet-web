var express = require('express')
var router = express.Router()

const {getCommentaires, getCommentaire, addCommentaire,delCommentaire,updateCommentaire}=require('../models/commentaire')

const authentification=require('../middleware/authentification')

/**
 * get all commentaires
 */
router.get('/', function(req, res, next) {
  const {take,skip}=req.query;
  try{
  getCommentaires(take,skip).then(commenaires=>res.json(commenaires))
   }
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des commentaires' });
   }
});

/**
 * get commentaire by id
 */
router.get('/:id([0-9]+)', function(req, res, next) {
   try{getCommentaire(parseInt(req.params.id)).then(commenaire=>res.json(commenaire))}
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du commentaire '+ parseInt(req.params.id)});
    }
});


/**
 * create a new commentaire
 */
router.post('/', authentification,function(req, res, next) {
 try{addCommentaire(req.body).then(commenaire=>res.json(commenaire))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la création du commentaire '});
  }
})

/**
 * upadte a commentaire
 */

router.patch('/', authentification,function(req, res, next) {
  try{updateCommentaire(req.body).then(commenaire=>res.json(commenaire))}
  catch(error){
   console.error(error);
   res.status(500).json({ error: 'Une erreur est survenue lors de la modification du commentaire '+ parseInt(req.body.id)});
   }
 })

/**
 * delete a commentaire
 */
router.delete('/:id([0-9]+)', authentification, function(req, res, next) {
 try{delCommentaire(parseInt(req.params.id)).then(commenaire=>res.json(commenaire))}
 catch(error){
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du commentaire '+ parseInt(req.params.id)});
  }
});


module.exports = router;

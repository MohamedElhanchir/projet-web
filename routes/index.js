var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// Route pour la connexion
router.post('/login', async function(req, res, next) {
  try {
    const utilisateur = await prisma.utilisateur.findUnique({
      where: { email: req.body.email }
    })
    //Vérifier émail
    if (!utilisateur) {
      return res.status(401).json({ message: 'Email incorrect.' })
    }
    
    // Vérifier le mot de passe
    const motPasse = (req.body.Password === utilisateur.Password)
    if (!motPasse) {
      return res.status(401).json({ message: 'Mot de passe incorrect.' })
    }
    
    // Générer le JWT avec l'ID de l'utilisateur
    const token = jwt.sign({ userId: utilisateur.id, role: utilisateur.role }, process.env.JWT_SECRET,{ expiresIn: '24h' })
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 })

    
    // Renvoyer le JWT et l'utilisateur au client
    res.status(200).json({ token, utilisateur })
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'authentification :', error)
    res.status(500).json({ message: 'Erreur lors de l\'authentification.' })
  }
})


// Route pour la déconnexion
router.post('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.json({ message: 'Déconnexion réussie' });
});

module.exports = router;

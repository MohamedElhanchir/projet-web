const jwt = require('jsonwebtoken');

const authentification = (req, res, next) => {
    const token = req.cookies.jwt
    if (!token) {
      return res.status(401).json({ message: 'Veuillez s\'authentfier d\'abord' })
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded.user
      next()
    } catch (error) {
      console.error('Erreur lors de la vérification du token JWT :', error)
      return res.status(401).json({ message: 'Token JWT invalide' })
    }
  };

module.exports=authentification;
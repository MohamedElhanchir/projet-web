# Projet de fin du module
* Je suis Mohamed ELHANCHIR étudiant en 1er année cycle d'ingénieur filière GLSID
### Développement d'un blog
* Une application Web (Blog) basée sur le framework Express avec accès à une base de données MySql.

## Installation
```bash
  git clone https://github.com/MohamedElhanchir/projet-web.git
  express --no-view .
  npm i
  npm i -D prisma
  npm i faker
  npm i -S jsonwebtoken
  ```
  dans le fichier package.json remplcer:
  ```bash
   "scripts": {
    "start": "node ./bin/www"
  }
  ```
  par
 ```bash
    "scripts": {
    "start": "nodemon ./bin/www"
  }
  ```

  ## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

* `DATABASE_URL="mysql:/.........."`
* `JWT_SECRET`

    
## Deployment

```bash
  npx prisma migrate dev --name xxxx
  npx prisma generate
  cd projet-web
  node ./seeds/seed.js
  npm start
```


## Language & tools
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>



## Authors
- [@ELHANCHIRMohamed](https://github.com/MohamedElhanchir)



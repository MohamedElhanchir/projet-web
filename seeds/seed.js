

const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient

const faker=require('faker')



async function clearDb(){
 // Supprimer tous les commentaires
 await prisma.commentaire.deleteMany()

 await prisma.categorieArticle.deleteMany()
 // Supprimer tous les articles
 await prisma.article.deleteMany()

 // Supprimer toutes les catégories
 await prisma.categorie.deleteMany()

 // Supprimer tous les utilisateurs
 await prisma.utilisateur.deleteMany()
}

// Fonction pour créer des utilisateurs
async function createUsers() {
  const authorRole = 'AUTHOR'
  const adminRole = 'ADMIN'

  const users = []
    // Créer 10 utilisateurs ayant le rôle "AUTHOR"
  for (let i = 0; i < 10; i++) {
    const user = await prisma.utilisateur.create({
      data: {
        nom: faker.name.findName(),
        email: faker.internet.email(),
        Password: faker.internet.password(),
        role: authorRole
      }
    })
    //On conserve les 10 utilisateurs dans le tableau user 
    users.push(user)
  }//fin de boucle

  // Créer 1 utilisateur ayant le rôle "ADMIN"
  const adminUser = await prisma.utilisateur.create({
    data: {
      nom: faker.name.findName(),
      email: faker.internet.email(),
      Password: faker.internet.password(),
      role: adminRole
    }
  }) 
  return { users, adminUser }
}


// Fonction pour créer des catégories
async function createCategories() {
  const categories = []
  for (let i = 0; i < 10; i++) {
    const category = await prisma.categorie.create({
      data: {
        nom: faker.random.word()
      }
    })
    categories.push(category)
  }
  return categories
}

// Fonction pour créer des articles
async function createArticles(users, categories) {
  const articles = []

  for (let i = 0; i < 100; i++) {
    const randomUserIndex = faker.datatype.number({ min: 0, max: users.length - 1 })
    const randomCategoryCount = faker.datatype.number({ min: 1, max: 4 })
    const shuffledCategories = faker.helpers.shuffle(categories)
    const randomCategories = shuffledCategories.slice(0, randomCategoryCount)

    const article = await prisma.article.create({
      data: {
        titre: faker.lorem.sentence(),
        contenu: faker.lorem.paragraphs(),
        image: faker.image.imageUrl(),
        published: faker.datatype.boolean(),
        utilisateurId:  users[randomUserIndex].id ,
        CategorieArticle: {
          create: randomCategories.map((category) => ({ categorie: { connect: { id: category.id } } }))
        }
      }
    })

    articles.push(article)
  }

  return articles
}



// Fonction pour créer des commentaires
async function createComments(articles) {
  for (const article of articles) {
    const commentCount = faker.datatype.number({ min: 0, max: 20 })
    for (let i = 0; i < commentCount; i++) {
      await prisma.commentaire.create({
        data: {
          email: faker.internet.email(),
          contenu: faker.lorem.sentence(),
          articleId: article.id
        }
      })
    }
  }
}



// Fonction principale pour générer les données de test
async function seed() {
  await clearDb()
  const { users, adminUser } = await createUsers()
  const categories = await createCategories()
  const articles = await createArticles(users, categories)
  await createComments(articles)
  
  console.log('Les données de test ont été créées avec succès !');
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});







const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient

function getArticles(take=0,skip=0){
    return prisma.article.findMany({
        take: parseInt(take),
        skip: parseInt(skip)});
}

function getArticle(id){
    return prisma.article.findUnique({
        where:{id}
    })
}

function  addArticle(article){
    return  prisma.article.create({data: article})
 }
 
 
 function updateArticle(article) {
    return prisma.article.update({
        where: { id: parseInt(article.id) },
        data: article
    })
    
}
function delArticle(id) {
    return prisma.article.delete({
        where :{id: id}
    })
    
}



function getArticlesContent(take=100,skip=0){
 
    try {
      const articles =  prisma.article.findMany({
        select: {
            id:true,
            titre: true,
            contenu: true,
            image: true,
            createAt: true,
            updateAt: true,
            published: true,
            commentaire: {
              select: {
                email: true,
                contenu: true,
                createAt: true,
                updateAt: true
              }
            },
            Utilisateur: {
              select: {
                nom: true,
                role: true,
                email: true,
              }
            },
            CategorieArticle: {
              select: {
                categorie: {
                  select: {
                    nom: true
                  }
                }
              }
            }
          }
      });
      return articles;
    } catch (error) {
      throw error;
    }
  
}

function getArticlesContentById(id){
try {
const article =  prisma.article.findUnique({
where :{id},
select: {
   titre: true,
   contenu: true,
   image: true,
   createAt: true,
   updateAt: true,
   published: true,
   commentaire: {
     select: {
       email: true,
       contenu: true,
       createAt: true,
       updateAt: true
     }
   },
   Utilisateur: {
     select: {
       nom: true,
       role: true,
       email: true,
     }
   },
   CategorieArticle: {
     select: {
       categorie: {
         select: {
           nom: true
         }
       }
     }
   }
 }
});
return article;
} catch (error) {
throw error;
}

}

module.exports={getArticles, getArticle, addArticle,delArticle,updateArticle,getArticlesContent,getArticlesContentById};

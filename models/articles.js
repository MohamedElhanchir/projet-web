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
module.exports={getArticles, getArticle, addArticle,delArticle,updateArticle};

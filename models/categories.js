const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient

function getCategories(take=0,skip=0){
    return prisma.categorie.findMany({
        take: parseInt(take),
        skip: parseInt(skip)});
}

function getCategorie(id){
    return prisma.categorie.findUnique({
        where:{id}
    })
}

function  addCategorie(categorie){
    return  prisma.categorie.create({data: categorie})
 }
 
 
 function updateCategorie(categorie) {
    return prisma.categorie.update({
        where: { id: parseInt(categorie.id) },
        data: categorie
    })
    
}
function delCategorie(id) {
    return prisma.categorie.delete({
        where :{id: id}
    })
    
}
module.exports={getCategories, getCategorie, addCategorie,delCategorie,updateCategorie};

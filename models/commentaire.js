const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient

function getCommentaires(take=0,skip=0){
    return prisma.commentaire.findMany({
        take: parseInt(take),
        skip: parseInt(skip)});
}

function getCommentaire(id){
    return prisma.commentaire.findUnique({
        where:{id}
    })
}

function  addCommentaire(commentaire){
    return  prisma.commentaire.create({data: commentaire})
 }
 
 
 function updateCommentaire(commentaire) {
    return prisma.commentaire.update({
        where: { id: parseInt(commentaire.id) },
        data: commentaire
    })
    
}
function delCommentaire(id) {
    return prisma.commentaire.delete({
        where :{id: id}
    })
    
}
module.exports={getCommentaires, getCommentaire, addCommentaire,delCommentaire,updateCommentaire};

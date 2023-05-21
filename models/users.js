const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient

function getUsers(take=0,skip=0){
    return prisma.utilisateur.findMany({
        take: parseInt(take),
        skip: parseInt(skip)});
}

function getUser(id){
    return prisma.utilisateur.findUnique({
        where:{id}
    })
}

function  addUser(user){
    return  prisma.utilisateur.create({data: user})
 }
 
 
 function updateUser(user) {
    return prisma.utilisateur.update({
        where: { id: parseInt(user.id) },
        data: user
    })
    
}
function delUser(id) {
    return prisma.utilisateur.delete({
        where :{id: id}
    })
    
}
module.exports={getUsers, getUser, addUser,delUser,updateUser};

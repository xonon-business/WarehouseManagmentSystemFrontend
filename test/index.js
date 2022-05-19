const { PrismaClient } = require("@prisma/client");

let prisma = new PrismaClient()

async function Main(args) {
    await prisma.$connect()
    let newUser = await prisma.user.deleteMany({
        where: { email: 'frodggyxd@gmail.com' }
    })
    console.log(newUser.count)
}

Main(process.argv).finally(async() => {
    await prisma.$disconnect() 
})
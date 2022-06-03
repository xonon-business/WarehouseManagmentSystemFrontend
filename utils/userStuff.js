let { PrismaClient } = require("@prisma/client");

let prisma = new PrismaClient()

async function Main(args) {

    await prisma.$connect
    await prisma.user.create({
        data: {
            
        }
    })
}

Main(process.argv).finally(async () => {
    await prisma.$disconnect()
})

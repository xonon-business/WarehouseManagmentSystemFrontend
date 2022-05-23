let { PrismaClient } = require("@prisma/client");

let prisma = new PrismaClient()

async function Main(args) {

    await prisma.$connect
    await prisma.user.delete({
        where: {
            email: 'frodggyxd@gmail.com'
        }
    })
}

Main(process.argv).finally(async () => {
    await prisma.$disconnect()
})

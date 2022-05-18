const { PrismaClient } = require("@prisma/client");

let prisma = new PrismaClient()

async function Main(args) {
    await prisma.$connect()
    let newUser = await prisma.user.create({
        data: {
            email: "frodggyxd@gmail.com",
            password: 'password123',
            firstName: 'Arif',
            lastName: 'ouattara',
            profilePictureUrl: 'https://github.com/favicon.ico',
            creditCardNumber: '012345678910',
            expDate: '5/19/40',
            cvv: 000,
            address: "30 heather hill rd",
        },
    })
    console.log(newUser)
}

Main(process.argv).finally(async() => {
    await prisma.$disconnect() 
})
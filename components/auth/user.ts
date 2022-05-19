import { RegisterForm } from "./types";
import bcrypt from 'bcrypt'
import { prisma } from "./prisma";


export async function createUser(user:RegisterForm) {
    const passwordHash = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            password: passwordHash,
            firstName: user.firstName,
            lastName: user.lastName,
        }
    })
    return { id: newUser.id, email: user.email }
}


import { prisma } from './prisma'
import type { LoginFrom, RegisterForm } from './types'
import { createUser } from './user'
import bcrypt from 'bcrypt'
import cookie from 'cookie'


export const storage = cookie.serialize

export const register = async (form: RegisterForm) => {
    let exists = await prisma.user.count({ where: { email: form.email }})
    if (exists) {
        return {
            error: '',
            status: ''
        }
    }
    let newUser = await createUser(form)
    if(!newUser) {
        return {
            error: '',
            status: ''
        }
    }

    return null
}

export async function login(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: { email: email }
    })

    if(!user || !(await bcrypt.compare(password, user.password))) {
        
    }
    return user
}

export async function createUserSession() {
    
}
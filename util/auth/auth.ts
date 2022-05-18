import { prisma } from './prisma'
import { RegisterForm } from './types'

const register = async (form: RegisterForm) => {
    let exsits = await prisma.user.count({ where: { email: form.email }})
}
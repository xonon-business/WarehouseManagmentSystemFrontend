import type { NextApiRequest, NextApiResponse } from 'next'
import Bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

let Api =  async (req: NextApiRequest, res: NextApiResponse) => {
  let { query: {
    firstName,
    lastName,
    email,
    password,
  }
  } = req
  let prisma = new PrismaClient()
  if (!(await prisma.user.count({ where: { email: email.toString() } }))) {
    const passwordHash = await Bcrypt.hash(password.toString(), 10)
    const newUser = await prisma.user.create({
      data: {
        email: email.toString(),
        password: passwordHash.toString(),
        firstName: firstName.toString(),
        lastName: lastName.toString(),
      }
    })
    res.status(200).json(newUser)
  } else {
    res.status(200).json({ error: 9100, message: '[Error] This email is already in use' })
  }
  
}

export default Api
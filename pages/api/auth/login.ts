import type { NextApiRequest, NextApiResponse } from 'next'
import Bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let { query: {
    email,
    password,
  }
  } = req
  let prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: { email: email.toString() }
  })
  const passwordHash = await Bcrypt.hash(password.toString(), 10)
  if (!user) {
    res.status(200).json({ error: 9150, message: '[Error] Email does not exsit' })
  }
  let passCheck = await Bcrypt.compare(password.toString(), passwordHash)
  if (passCheck) {
    res.status(200).json({check: passCheck, pass: password, hpass: user?.password })
  }
  res.status(200).json({ error: 9200, message: `[Error] Password does not match email` })

}

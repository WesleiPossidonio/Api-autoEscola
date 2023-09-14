import { v4 } from 'uuid'
import * as yup from 'yup'

import User from '../models/User.js'

class UserController {
  async store(request, response) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
      admin: yup.boolean(),
      tel: yup.string().required(),
      cargo: yup.string().required(),
    })

    const emailOrPasswordIncorrect = () => {
      return response
        .status(400)
        .json({ error: 'the email already exists' })
    }


    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, email, password, admin, tel, cargo } = request.body

    const users = await User.findOne({
      where: { email },
    })

    if (users) {
      return emailOrPasswordIncorrect()
    }


    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
      tel, 
      cargo
    })
    return response.status(201).json({ id: user.id, name, email, admin, tel, cargo })
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { password, email } = request.body

    const userExists = await User.findOne({
      where: { email },
    })

    if (!userExists) {
      return response.status(400).json({ error: 'User not found' })
    }

    await User.update({ password})

    return response.status(200).json()
  }
}

export default new UserController()

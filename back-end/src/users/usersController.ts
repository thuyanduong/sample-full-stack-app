import {Request, Response, RequestHandler} from 'express'

const User = require("./userModel")

const getAllUsers = async (req: Request, res: Response) => {
  try {
    let users = await User.getAllUsers()
    res.status(200).json(users)
  } catch {
    res.sendStatus(500)
  }
}

const getUser: RequestHandler = async (req, res) => {
  try {
    let user = await User.getUser(req.params.id)
    res.status(200).json(user)
  } catch {
    res.sendStatus(500)
  }
}

module.exports = {
  getAllUsers, 
  getUser
}
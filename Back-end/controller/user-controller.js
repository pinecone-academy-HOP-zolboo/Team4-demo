const UserModel = require("../model/user-model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res, next) => {
    const {  userName, email, password,  } = req.body
    const hashPassword = bcrypt.hashSync(password, 1)
    const createUser = await UserModel.create({
        Username: userName,
        Email: email,
        Password: hashPassword
    })
    res
        .status(201)
        .json({ message: `New user is created.`, data: createUser })
};
exports.getUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await UserModel.findById(id)
        res.status(200).json({ message: true, data: user })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
exports.getUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find()
        res.status(200).json({ message: true, data: users })
    } catch (error) {
        return res.status(400).json({ message: error, data: null })
    }
}
exports.deleteUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await UserModel.findByIdAndDelete(id)
        res.status(200).json({
            message: `User with ${id} id is deleted`,
            data: user
        })
    } catch (error) {
        return res.status(400).json({ message: error, data: null })
    }
}
exports.updateUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await UserModel.findByIdAndUpdate(id, { ...req.body })
        res.status(200).json({
            message: `User with ${id} id is updated`,
            data: user
        })
    } catch (error) {
        return res.status(400).json({ message: error, data: null })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({
            email: email
        })
        console.log(user)
        const comparePassword = bcrypt.compareSync(password, user.password);
        const role = user.role
        if (comparePassword) {
            const token = jwt.sign(
                { email, password, role },
                "password",
                { expiresIn: "1d" }
            )
            console.log(token)
            res.status(200).json({ token, user })
        }
        else res.status(200).json(null)

    }
    catch (error) {
        return res.status(400).json({ message: error, data: null })
    }
}
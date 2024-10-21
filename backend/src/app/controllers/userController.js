import jwt from "jsonwebtoken"
import User from "../db/models/user.js"
import { userSchema } from "../db/schemas/user.js"

export const createUser = async (req, res) => {
    try {
        try {
            await userSchema.validate(req.body)
        } catch (err) {
            return res.status(400).json({ type: err.name, message: err.message });
        }
        const { email, password } = req.body
        if (await User.findOne({ email })) {
            return res.status(400).json({ error: "Usuario ya existente." })
        }
        const user = new User({ email, password })
        const new_user = await user.save()
        res.status(200).json({ "user": new_user._id })
        return
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Ocurrio un error inesperado." })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({ message: "Todos los campos son obligatorios." })
            return
        }
        const user = await User.findOne({ email })
        if (!user || !(await user.comparePassword(password))) {
            res.status(400).json({ message: "Credenciales incorrectas." })
            return
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).json({ token, email })
        return
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Ocurrio un error inesperado." })
    }
}
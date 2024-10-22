import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config()

export const connect_mongo = async () => {
    let connection = null
    const mongo_uri = process.env.MONGO_URI || "mongodb://admin:admin@localhost:27017/mongo_db"
    try {
        connection = await mongoose.connect(mongo_uri,{
            authSource: 'admin'
        })
        console.log('Conexión a MongoDB establecida');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
    return connection
}
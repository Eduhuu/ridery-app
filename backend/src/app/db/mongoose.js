import mongoose from 'mongoose';

export const connect_mongo = async () => {
    let connection = null
    try {
        connection = await mongoose.connect('mongodb://admin:admin@localhost:27017/mongo_db',{
            authSource: 'admin'
        })
        console.log('Conexión a MongoDB establecida');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
    return connection
}
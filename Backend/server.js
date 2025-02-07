const app = require('./app');
const connectDB = require('./db/connect');

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log('connected to ' + port);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}

start();

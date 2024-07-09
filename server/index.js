import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import './db.js';
import { AdminRouter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';
import { Book } from './models/Book.js';
import { Student } from './models/Student.js';
import { Admin } from './models/Admin.js';
const RegisterModel = require('./models/Register')


const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);
mongoose.connect('mongodb+srv://khushi:khushi@cluster0.dowt7fj.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0')
app.use(cookieParser());
dotenv.config();
app.use('/auth', AdminRouter);
app.use('/student', studentRouter);
app.use('/book', bookRouter);

app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments();
        const admin = await Admin.countDocuments();
        const book = await Book.countDocuments();
        return res.json({ ok: true, student, book, admin });
    } catch (err) {
        return res.json(err);
    }
});

app.listen(process.env.PORT, () => {
    console.log('server is running');
});
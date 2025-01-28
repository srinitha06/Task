
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const server = express();
const mongoURI = process.env.mongouri;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => console.error('MongoDB connection error:', error));
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    section: {
        type: String
    }
});
const Student = mongoose.model('Student', studentSchema);
const port = 5050;
server.use(express.json());
server.get('/', (req, res) => {
    res.end(`Server is running on port ${port}`);
});

server.post('/students', async (req, res) => {
    const { name, age, class: className, section } = req.body;
    if (!name || !age || !className) {
        return res.status(400).json({ error: 'Name, age, and class are required' });
    }

    try {
        const newStudent = new Student({ name, age, class: className, section });
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add student' });
    }
});

server.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

server.get('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch student' });
    }
});


server.put('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, class: className, section } = req.body;
    if (!name && !age && !className && !section) {
        return res.status(400).json({ error: 'At least one field must be provided for update' });
    }

    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { name, age, class: className, section },
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json({ message: 'Student updated successfully', updatedStudent });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update student' });
    }
});


server.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json({ message: 'Student deleted successfully', deletedStudent });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete student' });
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

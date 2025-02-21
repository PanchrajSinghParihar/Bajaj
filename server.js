const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    let numbers = [];
    let alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });

    let highestAlphabet = alphabets.length ? [alphabets.sort().slice(-1)[0]] : [];

    res.json({
        is_success: true,
        user_id: "panchrajsinghparihar_11032003",
        email: "22bcs10575@cuchd.in",
        roll_number: "22BCS10575",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

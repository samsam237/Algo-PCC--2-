const path = require('path');

const express = require ("express");
const app = express ();

const PORT = 3000;

app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

const { createCanvas } = require('canvas');

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/pert", (req, res)=>{
    res.render("pert");
})

app.get('/canvas', (req, res) => {
    const width = 200;
    const height = 200;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);

    // Convertir le canvas en une URL de données au format base64
    const dataUrl = canvas.toDataURL();

    // Envoyer l'URL de données au frontend
    res.send(`${dataUrl}`);
});

app.listen (PORT, ()=>{
    console.log (`listenning on port ${PORT}`);
});
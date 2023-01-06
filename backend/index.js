const express = require('express');
const app = express();
const note = require('./routes/note');
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', note)

app.use(function(err, req, res, next){
    res.status(500).json({"msg": "internal server error"});
})
app.get('*', function(req, res) {
    res.status(404).json({"msg": "Not found"});
})
app.listen(PORT, () => {
    console.log(`App running on : http://localhost:${PORT}`)
})

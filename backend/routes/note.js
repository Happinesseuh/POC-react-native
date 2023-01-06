const express = require('express'), router = express.Router();
const db_con = require('../configs/db');

router
    //view all notes
.get('/', (req, res, next) => {
    db_con.query(`select * from note;`, function (err, result, fields) {
        if (err) {
            next(err);
        }
        else {
            res.status(200).json(result);
        }
        res.end();
    });
})

    //create a note
.post('/', (req, res, next) => {
    console.log('req body = ', req.body);
    db_con.query(`insert into note (title, content) values ("${req.body.title}", "${req.body.content}");`, function (err, result) {
        if (err) {
            next(err);
        } else {
            db_con.query(`select * from note where id = ${result.insertId}`, function (err2, result2, fields2) {
                res.status(201).json(result2[0]);
                res.end();
            });
        }
    });
})

    //update a note
.put('/:id', (req, res, next) => {
        db_con.query(`UPDATE note
            SET
                title="${req.body.title}",
                content="${req.body.content}"
            WHERE
                id=${req.params.id};`,
            function (err, result, fields) {
            if (err)
                next(err);
            else
                res.status(200).json(req.body);
            res.end();
        });
    })
    //delete a note
    .delete('/:id', (req, res, next) => {
        db_con.query(`DELETE FROM note WHERE id = ${req.params.id};`, function (err, result, fields) {
            if (err)
                next(err);
            else
                res.status(200).json({"msg" : `succesfully deleted record number: ${req.params.id}`});
            res.end();
        });
    })

module.exports = router;

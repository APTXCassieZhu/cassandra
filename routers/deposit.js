var express = require('express');
const app = express();
var router = express.Router();

var formidable = require('formidable');
var http = require('http');
const multer = require('multer');
//const upload = multer();

var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['localhost'], localDataCenter:'datacenter1', keyspace: 'hw5'});

var upload = multer({ dest: 'uploads/' })

//check connection to cassandra
client.connect(function(err, result) {
        if(err)
                console.log(err);
        else
                console.log('Connection with Cassandra established');
});

router.get('/',function (req, res, next) {
        res.send("OK");
});

router.post('/',upload.single('contents'),function(req, res){
        data = req.body;
        var fname = data.filename;
        var query = 'INSERT INTO imgs (filename, contents) VALUES (?, ?)';
        client.execute(query, [fname, req.file.buffer], function(err, result){
                if(err)
                        res.send(err);
                else    
                        res.send("OK");
        });

});

router.get 

module.exports = router;


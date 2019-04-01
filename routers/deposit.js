var express = require('express');
const app = express();
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var cassandra = require('cassandra-driver');
var cql = require('node-cassandra-cql');
//var client = new cql.Client({hosts: ['130.245.170.97:3000'], keyspace: 'hw5'});
var client = new cassandra.Client({contactPoints: ['130.245.170.97']});


//check connection to cql
client.connect(function(err, result) {
        if(err)
                console.log(err);
        else
                console.log('Connection with Cassandra established');
});

router.post('/',jsonParser,function(req, res){
        data = req.body;
        var query = 'INSERT INTO imgs';

});

module.exports = router;


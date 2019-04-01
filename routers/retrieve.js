var express = require('express');
const app = express();
var router = express.Router();


var cassandra = require('cassandra-driver');
var cql = require('node-cassandra-cql');
var client = new cql.Client({hosts: ['localhost'], keyspace: 'hw5'});
//var client = new cassandra.Client({contactPoints: ['130.245.170.97']});


//check connection to cql
client.connect(function established(err) {
        if(err)
                console.log(err);
        else
                console.log('Connection with Cassandra established');
});

//fliter
router.get('/', jsonParser, function(req, res) {
        var fname = req.params.filename;
        client.execute("SELECT filename, contents FROM hw5 WHERE key = fname"
});

module.exports = router;








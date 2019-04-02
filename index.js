var express = require('express');
const app = express();
var cassandra = require('cassandra-driver');
//var cql = require('node-cassandra-cql');
//var client = new cql.Client({hosts: ['localhost'], keyspace: 'hw5'});
var client = new cassandra.Client({contactPoints: ['localhost'], localDataCenter:'datacenter1', keyspace: 'hw5'});


//check connection to cassandra
client.connect(function(err, result) {
        if(err)
                console.log(err);
        else
                console.log('Connection with Cassandra established');
});

var deposit = require('./routers/deposit.js');
var retrieve = require('./routers/retrieve.js');

app.use('/deposit', deposit);
app.use('/retrieve', retrieve);
app.get('/',function (req, res, next) {
        res.send("OK");
});

//app.listen(port,'0.0.0.0', () => {
//        return console.log(`App listening on port ${port}!`);
//})
app.listen(80);

var express = require('express');
const app = express();
var router = express.Router();

var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['localhost'], localDataCenter:'datacenter1', keyspace: 'hw5'});

//check connection to cassandra
client.connect(function established(err) {
        if(err)
                console.log(err);
        else
                console.log('Connection with Cassandra established');
});

//fliter
router.get('/', function(req, res) {
        var fname = req.body.filename;
        client.execute("SELECT contents FROM hw5 WHERE filename =?", filename, function(err, result) {
                if(err)
                        res.send(err);
                else{
                        var type = req.query.filename.split('.')[1];
                        //res.writeHead(200, {'Content-Type': ct})
                        var ct = 'image/'+type;
                        res.type(ct);
                        res.send(result.first().contents);
                }
        });
});

module.exports = router;








var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'r9meuep6sltzzp81',
        password: 'ruxxi1bt7ar23j70',
        database: 'nczbydg0g01947bh',
    });
};

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
let simbaseDatabase = {};

const mysql = require('mysql2/promise');

var connection;
var connected = false;

simbaseDatabase.init = async function() {
  connection = await mysql.createConnection({
    host : 'localhost',
    user : 'simbase',
    password : 'simbase',
    database : 'simbase'
  });
  connection.connect();
  connected = true;
  const [rows, fields] = await connection.execute('SELECT 1 + 1 AS solution');
  return rows[0].solution;
};

simbaseDatabase.end = function() {
  if (connected === true) {
    connection.end();
  }
  connected = false;
}

simbaseDatabase.isConnected = function() {
  return connected;
}

simbaseDatabase.listTables = async function() {
  if (connected === true) {
    const [rows, fields] = await connection.execute('show tables like \'%testing%\';');
    return rows;
  } else {
    return undefined;
  }
}

module.exports = simbaseDatabase;

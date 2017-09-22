var express = require('express');
var mysql = require('mysql');
//var http = require('http').Server(express);

/*
var connection = mysql.createConnection({
  host : 'localhost';
  user : 'root';
  password : 'raja';
  database : 'socialblog';
});
*/
/*creating a pool connnection of database*/
var pool = mysql.createPool({
	connectionLimit : 100,
    host : 'localhost',
    user : 'root',
    password : 'raja',
    database : 'socialblog',
    debug : 'false'
});


var daoMethods = {};

daoMethods.getComments  = function(blogId,callback){

	pool.query("select * from `comment` where `blogId` = ?",[blogId],function(err, rows, fields){
       	if(!err){
       		//console.log(JSON.stringify(rows));
       		var length = rows.length;
       		if(length == 0){
       			callback(true,[]);
       		}
       		callback(false,rows);
       	}
       	else{
       		callback(true,[]);
       	}
       	});
};



daoMethods.saveComments = function(id,message,callback){
      pool.getConnection(function(err,connection){
         if(err){
         	callback(false);
         	return;
         }
        
        connection.query("INSERT INTO `comment`(`blogId`,`comments`) VALUES(?,?)",[id,message],function(err,rows){
            connection.release();
            if(!err){
            	callback(true);
            	return;
            }
        });

        connection.on('error',function(err){
            callback(false);
            return;
        });

      });
};


module.exports = daoMethods;






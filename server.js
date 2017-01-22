var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");

function send404() {
	response.writeHead(404, {"Content-type" : "text/plain"});
	response.("Error 404: resource not found");
	response.end();
}
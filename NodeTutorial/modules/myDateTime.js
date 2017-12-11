var service={};
service.myDateTime = myDateTime;

module.exports = service;

function myDateTime(){
	return Date();
}
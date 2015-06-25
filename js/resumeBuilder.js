var name = "Peramanathan";
var email = "sathyam.peram@gmail.com"
var role = "Emerging full-stack developer comfortable with Python, Node.js , RESTFul API development"

var formatedName = HTMLheaderName.replace("%data%", name);
var formatedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formatedName);
$("#header").append(formatedRole);


console.log(name);
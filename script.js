var database=[
{
	username:"mahi",
	password:"123"
},
{
	username:"sally",
	password:"1234"
},
{
	username:"bally",
	password:"12345"
},
{
	username:"cally",
	password:"123456"
}
];

var newsFeed=[
   {
       username: "bobby",
       timeline: "so tired from this"
   },
   {
   	   username: "mahiias",
   	   timeline:"aaaaaaaaaaaaaaaaaa"
   }
];

function isValid(username,password) {
	if(username===database[0].username && 
		password===database[0].password)
		return true;
	else
		return false;
	}

function signIn(user,pass){
	if(isValid(user,pass))
		console.log(newsFeed);
	else
		alert("sorry,wrong username or password");
}


var usernamePrompt = prompt("Your username?");
var passwordPrompt=prompt("your password?");

signIn(usernamePrompt,passwordPrompt);
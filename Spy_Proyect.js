var FirstName = prompt("Hello! What is your First Name?");
var LastName = prompt("What is your Last Name?");
var Age = prompt("What is your age?");
var Height = prompt("What is you height in cm?");
var PetName = prompt("What is your pet name?");
var names =null;
var age = null;
var height = null;
var petsname = null;

alert("Thanks for your information!");



if(FirstName[0]===LastName[0])
{
   names = true;
};

if(Age >= 20 && Age <= 30)
{
   age = true;
};

if(Height >=170)
{
   height = true;
};
if( PetName.slice(-1) === "y")
{
   petsname = true;
};

if (names  && age  && height  && petsname )
{
  console.log("Hello spy!");
}
else {
  console.log("Nothing to see here!");
}

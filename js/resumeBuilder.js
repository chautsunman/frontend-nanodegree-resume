/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Udacity: JavaScript Basics: Data Types: Format Data, Build a Resume Header
var name = "Man";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/* Udacity: JavaScript Basics: Getting Up and Running: Try .append() for Yourself
$("#main").append("Man");
*/

/* Udacity: JavaScript Basics: Data Types: string.replace()
var awesomeThoughts = "I am Man and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
*/
/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Udacity: JavaScript Basics: Data Types: Format Data, Build a Resume Header
var formattedName = HTMLheaderName.replace("%data%", "Man");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
$("#header").append(formattedName);
$("#header").append(formattedRole);

/* Udacity: JavaScript Basics: Data Types: string.replace()
var awesomeThoughts = "I am Man and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
*/

/* Udacity: JavaScript Basics: Getting Up and Running: Try .append() for Yourself
$("#main").append("Man");
*/
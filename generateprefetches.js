const countries = require("countries.js");

for(i=0;i<countries.length;i++) {
    var countryCode = countries[i].Code;
    var path  = "/flagz/assets/"+countryCode+".svg";
    var output = "<link rel='prefetch' href='"+ path +"' />"
    console.log(output)
}
// function printExampleHTML(html){

//   console.log(html);
// }


// var http = require("http");

// var requestOptions = {
//   host: "example.com",
//   path: "/"
// };

// http.get(requestOptions, (response) => {
//   response.setEncoding("utf8");

//   // response.on("data", function(data){
//   //   console.log(data);
//   // });
//   //or
//   response.on("data", printExampleHTML);

//   response.on("end", function(){
//     console.log("Stream complete");
//   });
// });

// Using request client
function printExampleHTML(err, response, body){
  if (err) {
    console.log(err);
  }
  console.log(body);
};

var request = require("request");

request("http://www.example.com", printExampleHTML);

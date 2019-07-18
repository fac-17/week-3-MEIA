//API URL and Callback abstraction
// url - string with url
// cb is function given result
// cors is Boolean, if true then use CORS proxy

function request(url, cb, cors){
    if (cors){
        url="https://cors-anywhere.herokuapp.com/"+url;
    }
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
// Passes response into the callback function, callback function processes it as needed.
      cb(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}



// request("https://corporatebs-generator.sameerkumar.website/",function (response){
//   console.log(response);
// });
if (typeof module!=="undefined"){

  module.exports = {
    
  }
}
//API URL and Callback abstraction
function request(url, cb){
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

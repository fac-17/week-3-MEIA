//API URL and Callback abstraction
// url - string with url
// cb is function given result
// cors is Boolean, if true then use CORS proxy

function request(url, cb, cors) {
  if (cors) {
    url = "https://cors-anywhere.herokuapp.com/" + url;
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

function getStatusClass(severityString) {
  return "tube-" + severityString.split(" ")[0].toLowerCase();
}

const shadowedNames = [
  "hammersmith-city",
  "circle",
  "victoria",
  "waterloo-city"
];

function requiresShadow(lineID){
  return shadowedNames.includes(lineID);
}


function getTimeOfDay(hour){
  if (hour > 5 && hour < 12)  return "Morning";
  if (hour > 11 && hour < 18) return "Afternoon";
  if (hour > 17 && hour < 22) return "Evening";
  return "Night"
}





if (typeof module !== "undefined") {
  module.exports = { getStatusClass, requiresShadow, getTimeOfDay };
}

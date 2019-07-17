const url = "https://www.google.com/";

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let response = JSON.parse(xhr.responseText);
    // DO SOMETHING
  }
};
xhr.open("GET", url, true);
xhr.send();

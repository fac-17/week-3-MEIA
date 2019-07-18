request("https://corporatebs-generator.sameerkumar.website/", function(response) {
  const sentence = document.querySelector('.sentence');
  let p = document.createElement('p')
  p.textContent = JSON.stringify(response.phrase)
  sentence.appendChild(p);
});

request("https://picsum.photos/v2/list?page=2&limit=100", function(response) {
  const image = document.querySelector('.image');
  let i = document.createElement('IMG')
  // i.innerHTML = JSON.stringify(response.download_url)
  image.appendChild(i);
});

request("https://corporatebs-generator.sameerkumar.website/", function(response) {
  const sentence = document.querySelector('.sentence');
  let p = document.createElement('p')
  p.textContent = JSON.stringify(response.phrase)
  sentence.appendChild(p);
});


const pages = Math.floor(Math.random() * 10);

request(`https://picsum.photos/v2/list?page=${pages}&limit=100`, function(response) {
  const image = document.querySelector('.image');
  const random = Math.floor(Math.random() * 100);
   image.src = response[random].download_url
});

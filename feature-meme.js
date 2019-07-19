const pages = Math.floor(Math.random() * 10);

request(`https://picsum.photos/v2/list?page=${pages}&limit=100`, function(
  response
) {
  const image = document.querySelector(".image");
  const random = Math.floor(Math.random() * 100);
  imageObj=response[random];
  image.src = imageObj.download_url;
  //dont load really wide images and portrait images
  while(imageObj.height/imageObj.width>0.7|| imageObj.width/imageObj.height > 1.8)
  {
    imageObj=response[Math.floor(Math.random() * 100)];
    image.src = imageObj.download_url;
  }
    image.addEventListener("load", () => {
    request("https://corporatebs-generator.sameerkumar.website/", function(
      response
    ) {
      const sentence = document.querySelector(".sentence");
      let p = document.createElement("p");
      p.textContent = response.phrase;
      sentence.appendChild(p);
    });
  });
});

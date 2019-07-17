request("https://corporatebs-generator.sameerkumar.website/", function(response) {
  const sentence = document.querySelector('.sentence');
  let p = document.createElement('p')
  p.textContent = JSON.stringify(response.phrase)
  sentence.appendChild(p);
});

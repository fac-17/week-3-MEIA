const shadowedNames = [
  "hammersmith-city",
  "circle",
  "victoria",
  "waterloo-city"
];

request("https://api.tfl.gov.uk/line/mode/tube/status", function(response) {
  const ul = document.createElement("ul");
  ul.classList.add("tube-line-ul");
  response.forEach(line => {
    let shadow = shadowedNames.includes(line.id) ? "tube-line-shadow" : "";
    let li = document.createElement("li");
    li.classList.add("tube-line-li");
    li.innerHTML = `
    <span class="tube-line-name line-${line.id} ${shadow}">${line.name}</span>
    <span class="tube-line-status">${
      line.lineStatuses[0].statusSeverityDescription
    }
    `;
    ul.appendChild(li);
  });
  let section = document.querySelector(".tube-section");
  section.innerHTML = "";
  let title = document.createElement("h1");
  title.textContent = "Tube Status";
  section.appendChild(title);
  section.appendChild(ul);
  console.log(response);
});

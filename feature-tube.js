request("https://api.tfl.gov.uk/line/mode/tube/status", function(response) {
  const ul = document.createElement("ul");
  ul.classList.add("tube-line-ul");
  response.forEach(line => {
    let shadow = requiresShadow(line.id) ? "tube-line-shadow" : "";
    const status = line.lineStatuses[0];
    let statusSeverityDescription = status.statusSeverityDescription;
    const reason = status.reason;
    let statusClass = getStatusClass(statusSeverityDescription);
    let li = document.createElement("li");
    li.classList.add("tube-line-li");
    li.innerHTML = `
    <span class="tube-line-name line-${line.id} ${shadow}">${line.name}</span>
    <span class="tube-line-status ${statusClass}">${statusSeverityDescription}</span>
    `;
    ul.appendChild(li);
    if (reason) {
      const reasonLi = document.createElement("li");
      reasonLi.innerHTML = `<p class="reason-text">${reason}</p>`;
      reasonLi.classList.add("tube-reason");
      reasonLi.classList.add("tube-shrunk-reason");
      ul.appendChild(reasonLi);
      li.addEventListener('click', (e)=>{
        reasonLi.classList.toggle("tube-shrunk-reason");
      });
    }
  });
  let section = document.querySelector(".tube-section");
  section.innerHTML = "";
  let title = document.createElement("h1");
  title.textContent = "Tube Status";
  section.appendChild(title);
  section.appendChild(ul);
});

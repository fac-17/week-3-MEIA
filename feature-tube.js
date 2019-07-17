request("https://api.tfl.gov.uk/line/mode/tube/status",function (response){
 
const ul=document.createElement("ul");
response.forEach(line=>{
    let li=document.createElement('li');
    li.innerHTML=`
    <span class="tube-line-name line-${line.id}">${line.name}</span>
    <span class="tube-line-status">${line.lineStatuses[0].statusSeverityDescription}
    `;
    ul.appendChild(li);
})
let section=document.querySelector('.tube-section');
section.innerHTML="";
section.append(ul);
console.log(response);
});
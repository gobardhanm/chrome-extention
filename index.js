let myLeads = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
const dltBtn = document.getElementById("dlt-btn")
const saveTab = document.getElementById("save-tab")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

saveTab.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

function render(leads){
    let listItems = []
for(let i= 0; i < leads.length; i++){

    // listItems += "<li><a  target=_blank href='"+leads[i]+"'>" + leads[i] + "</li>"

    // Template String or Literal
    listItems += 
    `<li>
        <a target=_blank href=" ${leads[i]} ">
         ${leads[i]}
        </a> 
    </li>`


    // ANOTHER WAY :
    //create element
    // // set textcontent
    // // append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}

ulEl.innerHTML = listItems
}

dltBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value= "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
})
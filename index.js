let myLeads = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value= "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();
})

function renderLeads(){
        let listItems = []
    for(let i= 0; i < myLeads.length; i++){
    
        // listItems += "<li><a  target=_blank href='"+myLeads[i]+"'>" + myLeads[i] + "</li>"

        // Template String or Literal
        listItems += 
        `<li>
            <a target=_blank href=" ${myLeads[i]} ">
             ${myLeads[i]}
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


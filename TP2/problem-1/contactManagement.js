class Contact{

    constructor(name, mobile, email){
        this.name = name;
        this.mobile = mobile;
        this.email = email;
    }
}

// Getting all the contacts already stored
let datas = localStorage.getItem("contactInfo");
if(datas == null){
    datasObj = [];
}
else{
    datasObj = JSON.parse(datas);
}


// Add an event listener so that the table is refreshed everytime the user types in a letter
let input = document.getElementById("mobileSearch");
input.addEventListener('keyup', function(e) {
    search();
});

showContactList(false);

///////////////////////////////////////
//////////* Add a contact *////////////
///////////////////////////////////////

function addContact(){

    let dataName = document.getElementById("name").value;
    let dataMobile = document.getElementById("mobile").value;
    let dataMail = document.getElementById("mail").value;

    let newContact = new Contact(dataName, dataMobile, dataMail);

    // Adding the contact to the storage
    datasObj.push(newContact);
    localStorage.setItem("contactInfo", JSON.stringify(datasObj));
    showContactList(false);
}


// Compare function used for sorting the table
function compare(a, b){
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;
    if(name1 > name2){
        comparison = 1;
    }
    else{
        comparison = -1;
    }

    return comparison;
}

///////////////////////////////////////
///////* Display all contacts *////////
///////////////////////////////////////

let toggle = 0;

function showContactList(sorted){
    
    if(sorted){
        toggle++;
        if(toggle % 2 == 1){
            datasObj.sort(compare);
        }
    }
    
    let html = "";

    let contactList = document.getElementById("contactListBody");
    
    datasObj.forEach(function callback(element, index) {
        if(index % 2 == 0){
            html += 
            `<tr style="background-color:#f2f2f2">
                <td>${element.name}</td>
                <td>${element.mobile}</td>
                <td>${element.email}</td>
            </tr>`
        }
        else{
            html += 
            `<tr>
                <td>${element.name}</td>
                <td>${element.mobile}</td>
                <td>${element.email}</td>
            </tr>`
        }
    });
    search();
    contactList.innerHTML = html;
    
}


///////////////////////////////////////
///////* Search for a contact *////////
///////////////////////////////////////



function search(){
    let filter = input.value;
    
    let tbody = document.getElementById("contactListBody");
    rows = tbody.getElementsByTagName("tr");
    let flag = false;
    let noResult = document.getElementById("noResult");
    noResult.style.visibility = "hidden";

    for(let row of rows){
        let cells = row.getElementsByTagName("td");
        for(let cell of cells){
            if(cell.textContent.toUpperCase().includes(filter)){
                flag = true;
                break;
            }
        }

        // If there's a match, display the row. Otherwise, hide it
        if(flag){
            row.style.display = "";
            noResult.style.visibility = "hidden";
        }
        else{
            row.style.display = "none";
        }
        if(!flag){
            noResult.style.visibility = "visible";
        }
        flag = false;
    }

}
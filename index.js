
const email = document.getElementById('email');
        email.addEventListener("input", () => validate(email));
        const submit = document.getElementById('submit');
        submit.addEventListener("click", () => validate(email));

        function validate(element){
            if(element.validity.typeMismatch){
                element.setCustomValidity("The Email is not in the right format!");
                element.reportValidity();
            }else{
                element.setCustomValidity('');
            }
        }
let userForm = document.getElementById("user-form");
let userEntries = [];

const retieveEntries = ()=>{
    let entries = localStorage.getItem('userEntries');
    if(entries){
        entries = JSON.parse(entries);
    }else{
        entries = [];
    }
    return entries;
}
const displayEntries = ()=>{
    let entries=retieveEntries()
        const tableEntries = entries.map((entry) => {
        const name = `<td>${entry.name}</td>`;
        const email = `<td>${entry.email}</td>`;
        const password = `<td>${entry.password}</td>`;
        const dob = `<td>${entry.dob}</td>`;
        const tac = `<td>${entry.tac}</td>`;
        
        const row = `<tr>${name} ${email} ${password} ${dob} ${tac}</tr>`;
        return row;
    }).join("\n");
    const table =` <table border="1">
        <tr>
        <th>Name </th>
        <th>Email </th>
        <th>Password </th>
        <th>Dob </th>
        <th>T & C </th>
        </tr>${tableEntries}
    </table>`
    let details = document.getElementById('user-entries');
    details.innerHTML=table;
}
const saveUserform = (event) => {
    event.preventDefault();
    const name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const tac = document.getElementById("tac").checked;
    var currentYear = new Date().getFullYear();
    var birthYear = dob.split("-");
    let year=birthYear[0];
    var age = currentYear-year;
    console.log({age,currentYear,birthYear})
    if(age < 18 || age > 55){
        document.getElementById('dob').style='border:1px solid blue';
    return  alert("Age must be between 18 and 55");

    }else{
        document.getElementById('dob').style='border:none';

        const entry ={
            name,
            email,
            password,
            dob,
            tac
        };
    
        userEntries=retieveEntries();
        userEntries.push(entry);
        localStorage.setItem("user-entries", JSON.stringify(userEntries));
        displayEntries();
        userForm.reset();
    }

}
    
userForm.addEventListener("submit", saveUserform);
displayEntries();

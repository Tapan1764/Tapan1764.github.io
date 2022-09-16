let userForm = document.getElementById("user-form");
var userEntries = [];

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
const name= `<td class='border px-4 py-2'>${entry.FullName}</td>`;
const email = `<td class='border px-4 py-2'>${entry.email}</td>`;
const password = `<td class='border px-4 py-2'>${entry.password}</td>`;
const dob = `<td class='border px-4 py-2'>${entry.dob}</td>`;
const acceptTerms = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;

const row = `<tr>${name} ${email} ${password} ${dob} ${acceptTerms}</tr>`;
return row;
}).join("\n");
const table =` <table class='table-auto w-full border'>
    <tr>
    <th class='px-4 py-2 border'>Name </th>
    <th class='px-4 py-2 border'>Email </th>
    <th class='px-4 py-2 border'>Password </th>
    <th class='px-4 py-2 border'>Dob </th>
    <th class='px-4 py-2 border'>Accepted terms? </th>
    </tr>${tableEntries}
</table>`
let details = document.getElementById('user-entries')
details.innerHTML=table
}

const saveUserForm = (event) => {
event.preventDefault();
const FullName = document.getElementById('name').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const dob = document.getElementById('dob').value
const acceptTerms = document.getElementById('acceptTerms').checked
var currentYear = new Date().getFullYear();
var birthYear = dob.split("-");
let year=birthYear[0];
var age = currentYear-year;
console.log({age,currentYear,birthYear})
if(age < 18 || age > 55){
    document.getElementById('dob').style='border:1px solid red';
  return  alert("Age must be between 18 and 55");

}else{
    document.getElementById('dob').style='border:none';

    const entry ={
        FullName,
        email,
        password,
        dob,
        acceptTerms
     }
     userEntries=retieveEntries();
     userEntries.push(entry);
     localStorage.setItem("userEntries",JSON.stringify(userEntries));
     displayEntries();
     userForm.reset();  
} 
}
userForm.addEventListener('submit',saveUserForm);
displayEntries();
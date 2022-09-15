let userForm = document.getElementById("user-form");

let userEntries = [];
const saveUserform = (event) => {
    event.preventDefault();
    const name = document.getElementById("full_name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const dob = document.getElementById("dob");
    const tac = document.getElementById("tac");

    const entry ={
        name,
        email,
        password,
        dob,
        tac
    };

    userEntries.push(entry);

    localStorage.setItem("user-entries", JSON.stringify(userEntries));
}

userForm.addEventListener("submit", saveUserform);
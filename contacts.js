let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let phonNumberEl = document.getElementById("phonNumber");
let phonNumberErrMsgEl = document.getElementById("phonNumberErrMsg");

let addUserEl = document.getElementById("addUserForm");

let formData = {
    name: "",
    email: "",
    phonNumber: "",
};

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

phonNumberEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        phonNumberErrMsgEl.textContent = "Required*";
    } else {
        phonNumberErrMsgEl.textContent = "";
    }

    formData.phonNumber = event.target.value;
});


function validateFormData(formData) {
    let {
        name,
        email,
        phonNumber
    } = formData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
    if (phonNumber === "") {
        phonNumberErrMsgEl.textContent = "Required*";
    }
}

addUserEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
});
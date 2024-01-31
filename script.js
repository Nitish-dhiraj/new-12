

// email addresses
let usedEmails = [];
let usedMobilNumber = [];


// date are submit from values

function submitForm(event) {
    event.preventDefault();
    document.getElementById("datemin").min = `${document.getElementById("datemax").value}`;
    // return true;
}



// const checkboxes = document.getElementsByClassName("deleteUser");

// Array.from(checkboxes).forEach(function (checkbox) {
//     // Your code to handle each checkbox goes here
//     console.log(checkbox); // Example: Logging each checkbox element
// });

// const checkbox = document.getElementsByClassName("deleteUser")
// Array.from(checkbox).forEach(el)


// function create in validation from

function validation() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let conpass = document.getElementById("conpass").value;
    let dob = document.getElementById("dob").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let datemax = document.getElementById("datemax").value;
    let datemin = document.getElementById("datemin").value;





    let age = calculateAgeFromDOB(dob);

    let errorMessages = false;

    if (user.trim() === "") {
        errorMessages = true;
        document.getElementById("usernameErr").innerHTML = "*Please fill the username";
    } else if (user.trim().length < 3) {
        errorMessages = true;
        // regular expression 
        document.getElementById("usernameErr").innerHTML = "*Entered name is too short";
    } else if (!/^[a-zA-Z]+$/.test(user.trim())) {
        errorMessages = true;
        document.getElementById("usernameErr").innerHTML = "*Only characters are allowed in the username";
    } else {
        document.getElementById("usernameErr").innerHTML = "";
    }

    if (pass === "") {
        errorMessages = true;
        document.getElementById("passwordErr").innerHTML = "*Please fill the password";
    } else if (pass.length < 8 || pass.length > 12) {
        errorMessages = true;
        document.getElementById("passwordErr").innerHTML = "*Password length must be between 8 and 12";
    }
    // regular expresssion
    // else if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(pass)) {
    //     errorMessages = true;
    //     document.getElementById("passwordErr").innerHTML = "*Only characters are allowed in the password";

    // }

    else {
        document.getElementById("passwordErr").innerHTML = "";
    }

    if (conpass === "") {
        errorMessages = true;
        document.getElementById("conpassErr").innerHTML = "*Please fill the confirm password";
    } else if (conpass.length < 8 || conpass.length > 12) {
        errorMessages = true;
        document.getElementById("conpassErr").innerHTML = "*Confirm Password length must be between 8 to 12";
    } else if (pass !== conpass) {
        errorMessages = true;
        document.getElementById("conpassErr").innerHTML = "*Passwords do not match";
    } else {
        document.getElementById("conpassErr").innerHTML = "";
    }

    if (mobile === "") {
        errorMessages = true;
        document.getElementById("mobileErr").innerHTML = "*Please fill in the Mobile Number";
    } else if (mobile.length !== 10) {
        errorMessages = true;
        document.getElementById("mobileErr").innerHTML = "*Mobile Number should be 10 digits";
    }
    //  else {
    //     document.getElementById("mobileErr").innerHTML = "";
    // }
    else if (usedMobilNumber.includes(mobile)) {
        errorMessages = true;
        document.getElementById("mobileErr").innerHTML = "*This mobile is already in use";
    } else {
        document.getElementById("mobileErr").innerHTML = "";
        usedMobilNumber.push(mobile);
        // usedMobilNumber.pop(mobile);


    }

    if (email === "") {
        errorMessages = true;
        document.getElementById("emailErr").innerHTML = "*Please fill the email";
    } else if (!/^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
        errorMessages = true;
        document.getElementById("emailErr").innerHTML = "*Only valid email addresses allowed";

        // } else {
        //     document.getElementById("emailErr").innerHTML = "";
        // }
    } else if (usedEmails.includes(email)) {
        errorMessages = true;
        document.getElementById("emailErr").innerHTML = "*This email is already in use";
    } else {
        document.getElementById("emailErr").innerHTML = "";
        usedEmails.push(email);


    }

    if (dob === "") {
        errorMessages = true;
        document.getElementById("ageErr").innerHTML = "*Please select Date of Birth";
    } else {
        document.getElementById("ageErr").innerHTML = "";
    }

    if (course === "") {
        errorMessages = true;
        document.getElementById("courseErr").innerHTML = "*Please select Course";
    } else {
        document.getElementById("courseErr").innerHTML = "";
    }

    if (datemax === "") {
        errorMessages = true;
        document.getElementById("courseErr").innerHTML = "*Please correct course date";
    } else {
        document.getElementById("courseErr").innerHTML = "";
    }


    if (datemin === "") {
        errorMessages = true;
        document.getElementById("dateErrr").innerHTML = "*Please correct course date";
    } else {
        document.getElementById("dateErrr").innerHTML = "";
    }

    // if (datemax !== "" && datemin !== "" && datemax < datemin) {
    //     errorMessages = true;
    //     document.getElementById("dateErrr").innerHTML = "*End date must be greater than start date";
    // }

    if (errorMessages) {
        return false;
    }



    // already exist




    // new code 
    //         if (errorMessages.length > 0) {
    //     for (let i = 0; i < errorMessages.length; i++) {
    //         errorMessageContainer.innerHTML += "<p>" + errorMessages[i] + "</p>";
    //     }
    //     return false; // Prevent form submission
    // }

    // table create 

    let tableBody = document.getElementById("tableBody");
    let row = tableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    let cell9 = row.insertCell(8);
    let cell10 = row.insertCell(9);
    let cell11 = row.insertCell(10);
    let cell12 = row.insertCell(11);
    let cell13 = row.insertCell(11);

    //    delete all row
    // let cell13 = row.insertCell(12);




    cell1.innerHTML = `<input type="checkbox" class="userChecked">`
    cell2.innerHTML = user;
    cell3.innerHTML = pass;
    cell4.innerHTML = conpass;
    cell5.innerHTML = dob;
    cell6.innerHTML = age;
    cell7.innerHTML = mobile;
    cell8.innerHTML = email;
    cell9.innerHTML = course;
    cell10.innerHTML = datemax;
    cell11.innerHTML = datemin;
    cell12.innerHTML = `<button type="button" class="deleteUser" onclick="deleteRow(this)">Delete</button>`
    cell13.innerHTML = `<button type="button" class="editUser" onclick="">Edit</button>`


    // all row delete

    let userChecked = document.querySelectorAll(".userChecked");
    let selectAll = document.querySelector("#selectAll");
    let deleteAllRows = document.querySelector("#deleteAllRows");

    userChecked.forEach((ele) => {
        console.log(ele);
        selectAll.addEventListener("click", function (event) {
            if (selectAll.checked) {
                if (!ele.checked) {
                    ele.checked = true;
                }


            }
            if (!selectAll.checked) {
                if (ele.checked) {
                    ele.checked = false;
                }
            }
        });

        // deleteAllRows.addEventListener("click", function(ev) {
        //     console.log(ev)
        //     if(ele.checked) {
        //         let delAll = ele.parentElement.parentElement;
        //         delAll.remove();
        //     }
        // })

        deleteAllRows.addEventListener("click", function (ev) {
            userChecked.forEach((ele) => {
                if (ele.checked) {
                    let delRow = ele.parentElement.parentElement;
                    let emailToDelete = delRow.cells[7].innerText;
                    let mobileToDelete = delRow.cells[6].innerText;

                    // Remove the email and mobile from the arrays
                    let emailIndex = usedEmails.indexOf(emailToDelete);
                    if (emailIndex !== -1) {
                        usedEmails.splice(emailIndex, 1);
                    }

                    let mobileIndex = usedMobilNumber.indexOf(mobileToDelete);
                    if (mobileIndex !== -1) {
                        usedMobilNumber.splice(mobileIndex, 1);
                    }

                    delRow.remove();
                }
            });
        });
    });
    return true;
}


function deleteRow(r) {

    let confirmed = confirm("delete this row");

    if (confirmed) {

        let i = r.parentNode.parentNode.rowIndex;
        let emailToDelete = document.getElementById("totalSubmitForm").rows[i].cells[7].innerText;
        let mobileToDelete = document.getElementById("totalSubmitForm").rows[i].cells[6].innerText;

        // Remove the email and mobile from the arrays
        let emailIndex = usedEmails.indexOf(emailToDelete);
        if (emailIndex !== -1) {
            usedEmails.splice(emailIndex, 1);
        }

        let mobileIndex = usedMobilNumber.indexOf(mobileToDelete);
        if (mobileIndex !== -1) {
            usedMobilNumber.splice(mobileIndex, 1);
        }

        document.getElementById("totalSubmitForm").deleteRow(i);
    }

}

// Calculate age

function calculateAgeFromDOB(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function calculateAge() {
    let dob = document.getElementById("dob").value;
    let age = calculateAgeFromDOB(dob);

    document.getElementById("ageErr").innerHTML = "Age: " + age;
}



// Edit the data 
// ...

function editRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    let row = document.getElementById("totalSubmitForm").rows[i];

    // Populate form fields with row data
    document.getElementById("user").value = row.cells[1].innerText;
    document.getElementById("pass").value = row.cells[2].innerText;
    document.getElementById("conpass").value = row.cells[3].innerText;
    document.getElementById("dob").value = row.cells[4].innerText;
    document.getElementById("mobile").value = row.cells[6].innerText;
    document.getElementById("email").value = row.cells[7].innerText;
    document.getElementById("course").value = row.cells[8].innerText;
    document.getElementById("datemax").value = row.cells[9].innerText;
    document.getElementById("datemin").value = row.cells[10].innerText;

    // Remove the email and mobile from the arrays
    let emailToDelete = row.cells[7].innerText;
    let mobileToDelete = row.cells[6].innerText;
    let emailIndex = usedEmails.indexOf(emailToDelete);
    if (emailIndex !== -1) {
        usedEmails.splice(emailIndex, 1);
    }
    let mobileIndex = usedMobilNumber.indexOf(mobileToDelete);
    if (mobileIndex !== -1) {
        usedMobilNumber.splice(mobileIndex, 1);
    }

    // Remove the row from the table
    document.getElementById("totalSubmitForm").deleteRow(i);
}

// Add an event listener for the "Edit" button in each row
document.addEventListener("DOMContentLoaded", function () {
    let editButtons = document.querySelectorAll(".editUser");
    editButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            editRow(this);
        });
    });
});



// Function to open the modal
// function openModal() {
//     let modal = document.getElementById("myModal");
//     modal.style.display = "block";
// }
let modal = document.getElementById("myModal");

// Function to close the modal
function closeModal() {

    modal.style.display = "none";
}

// modal button
document.getElementById("registerBtn").onclick = function () {
    openModal();
};
// 
// Add an event listener for the "Edit" button in each row
document.addEventListener("DOMContentLoaded", function () {
    let editButtons = document.querySelectorAll(".editUser");
    editButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            editRow(this);
        });
    });
});

// new code
function openModal() {
    // Reset form fields when opening the modal
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("conpass").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("datemax").value = "";
    document.getElementById("datemin").value = "";

    modal.style.display = "block";
}


function submitFormInModal() {
    // Call the existing validation function
    let isFormValid = validation();

    // If the form is valid, close the modal
    if (isFormValid) {
        closeModal();
    }
}


// new code 
document.getElementById("registerBtn").onclick = function () {
    openModal();
};
function submitForm() {

    console.log("Used Emails:", usedEmails);
    console.log("Used Mobile Numbers:", usedMobilNumber);

    // Call the existing validation function
    let isFormValid = validation();

    // If the form is valid, proceed to check for duplicate email and mobile
    if (isFormValid) {
        let table = document.getElementById("totalSubmitForm");
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;

        // Check for duplicate email
        // Check for duplicate email
        // let isDuplicateEmail = usedEmails.includes(email) || Array.from(table.rows).some(row => row.cells[7].innerText === email);
        // if (isDuplicateEmail) {
        //     document.getElementById("emailErr").innerHTML = "*This email is already registered";
        //     return false;
        // }

        // // Check for duplicate mobile number
        // let isDuplicateMobile = usedMobilNumber.includes(mobile) || Array.from(table.rows).some(row => row.cells[6].innerText === mobile);
        // if (isDuplicateMobile) {
        //     document.getElementById("mobileErr").innerHTML = "*This mobile number is already registered";
        //     return false;
        // }

        // Update the arrays
        usedEmails.push(email);
        usedMobilNumber.push(mobile);

        // Clear the error messages
        document.getElementById("emailErr").innerHTML = "";
        document.getElementById("mobileErr").innerHTML = "";

 
        // Add the data to the table
        let tableBody = document.getElementById("tableBody");
        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let conpass = document.getElementById("conpass").value;
        let dob = document.getElementById("dob").value;
        let course = document.getElementById("course").value;
        let datemax = document.getElementById("datemax").value;
        let datemin = document.getElementById("datemin").value;

        let age = calculateAgeFromDOB(dob);

        let row = tableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);
        let cell10 = row.insertCell(9);
        let cell11 = row.insertCell(10);
        let cell12 = row.insertCell(11);
        let cell13 = row.insertCell(12);

        cell1.innerHTML = `<input type="checkbox" class="userChecked">`
        cell2.innerHTML = user;
        cell3.innerHTML = pass;
        cell4.innerHTML = conpass;
        cell5.innerHTML = dob;
        cell6.innerHTML = age;
        cell7.innerHTML = mobile;
        cell8.innerHTML = email;
        cell9.innerHTML = course;
        cell10.innerHTML = datemax;
        cell11.innerHTML = datemin;
        cell12.innerHTML = `<button type="button" class="deleteUser" onclick="deleteRow(this)">Delete</button>`
        cell13.innerHTML = `<button type="button" class="editUser" onclick="editRow(this)">Edit</button>`

        // Clear form fields after submission
        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("conpass").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("course").value = "";
        document.getElementById("datemax").value = "";
        document.getElementById("datemin").value = "";
        // Clear the email and mobile error messages
        document.getElementById("emailErr").innerHTML = "";
        document.getElementById("mobileErr").innerHTML = "";

        // If you want to close the modal after submission, uncomment the line below
        closeModal();

        return false;
    }

    return true;



    
}
// 
let filterUser = document.getElementById("filterUser");
let filterPass = document.getElementById("filterPass");
let filterConfirm = document.getElementById("filterConfirm");
let filterDate = document.getElementById("filterDate");
let filterTel = document.getElementById("filterTel");
let filterAge = document.getElementById("filterAge");
let filterEmail = document.getElementById("filterEmail");
let filterCourse = document.getElementById("filtercourse");
let filterStarting = document.getElementById("filterStarting");
let filterComplete = document.getElementById("filterComplete");

// Add input event listeners for each filter input
filterUser.addEventListener("input", filterTable);
filterPass.addEventListener("input", filterTable);
filterConfirm.addEventListener("input", filterTable);
filterDate.addEventListener("input", filterTable);
filterTel.addEventListener("input", filterTable);
filterAge.addEventListener("input", filterTable);
filterEmail.addEventListener("input", filterTable);
filterCourse.addEventListener("input", filterTable);
filterStarting.addEventListener("input", filterTable);
filterComplete.addEventListener("input", filterTable);

// Function to filter the table based on user input
function filterTable() {
    let filterUserValue = filterUser.value.toLowerCase();
    let filterPassValue = filterPass.value.toLowerCase();
    let filterConfirmValue = filterConfirm.value.toLowerCase();
    let filterDateValue = filterDate.value.toLowerCase();
    let filterTelValue = filterTel.value.toLowerCase();
    let filterAgeValue = filterAge.value.toLowerCase();
    let filterEmailValue = filterEmail.value.toLowerCase();
    let filterCourseValue = filterCourse.value.toLowerCase();
    let filterStartingValue = filterStarting.value.toLowerCase();
    let filterCompleteValue = filterComplete.value.toLowerCase();

    let tableBody = document.getElementById("tableBody");
    let rows = tableBody.getElementsByTagName("tr");

    // Loop through all table rows and show/hide based on the filter inputs
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let shouldShowRow = true; // Assume the row should be shown

        // Check if any cell contains the corresponding filter value
        if (!cells[1].innerText.toLowerCase().includes(filterUserValue) ||
            !cells[2].innerText.toLowerCase().includes(filterPassValue) ||
            !cells[3].innerText.toLowerCase().includes(filterConfirmValue) ||
            !cells[4].innerText.toLowerCase().includes(filterDateValue) ||
            !cells[5].innerText.toLowerCase().includes(filterTelValue) ||
            !cells[6].innerText.toLowerCase().includes(filterAgeValue) ||
            !cells[7].innerText.toLowerCase().includes(filterEmailValue) ||
            !cells[8].innerText.toLowerCase().includes(filterCourseValue) ||
            !cells[9].innerText.toLowerCase().includes(filterStartingValue) ||
            !cells[10].innerText.toLowerCase().includes(filterCompleteValue)
        ) {
            shouldShowRow = false;
        }

        // Show/hide the row based on the filter result
        rows[i].style.display = shouldShowRow ? "" : "none";
    }
}

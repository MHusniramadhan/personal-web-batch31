function showData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;
  
//   console.log(name)
//   console.log(email)
//   console.log(phone)
//   console.log(subject)
//   console.log(massage)

// dom
document.getElementById("input-name").value = ""

// validasi
if (name == ""){
    alert('name input field must be not empety');
}
if (email == ""){
    alert('email input field must be not empety');
}
if (phone == ""){
    alert('noPhone input field must be not empety');
}
if (subject == ""){
    alert('subject input field must be not empety');
}
if (message == ""){
    alert('message input field must be not empety');
}

// dom create element

let emailReceiver = 'husniramadhan97@gmail.com';

let a = document.createElement('a');
a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name},${subject},${message},
                   this is my phone number ${phone}`;

 a.click();

// object
let dataObject ={
    dataName : name,
    email,
    phone,
    subject,
    message
};

// console.table(dataObject)
console.log(dataObject);

}

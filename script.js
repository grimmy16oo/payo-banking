document.getElementById("loginButton").addEventListener('click',function (e){
    e.preventDefault();
    
    const phoneNumber = '01745827489';
    const pinNumber = 1234;

    const phoneNumberValue = document.getElementById("number").value;
    const pinNumberValue = parseInt(document.getElementById("pin").value);

    if(phoneNumberValue === phoneNumber && pinNumberValue === pinNumber)
    {
        window.location.href = "./home.html";
    }
    else
    {
        alert("Invalid credentials");
    }

})
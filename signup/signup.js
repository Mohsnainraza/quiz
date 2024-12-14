
function signup() {
    let data = localStorage.getItem("user")
    let user = data ? JSON.parse(data) : []

    let signupdata = {
        username :document.getElementById("username").value,
        email :document.getElementById("email").value,
        password :document.getElementById("password").value,
    }
    let empty = signupdata.username=== "" || signupdata.email=== "" || signupdata.password=== ""
    
    let UserExists = user.some(user => user.email === signupdata.email && user.username === signupdata.username);
    
    if (empty) {
       alert("All fields are requried")
    return
    }

    if(UserExists){
        alert("This user is already exists")
        
    }
    else {

        alert("You have successfully signed up! You can now log in.");
        user.push(signupdata);
        localStorage.setItem("user",JSON.stringify(user));
        window.location.href = "login/index.html";
    }
    
}
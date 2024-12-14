    function login() {
        
        let logindata = {
            
            username :document.getElementById('username').value,
            password :document.getElementById('password').value,
            errorMessage :document.getElementById('error-message'),
        }
        
        let users = JSON.parse(localStorage.getItem('user')) || [];
        
        const user = users.find(u => u.username === logindata.username && u.password === logindata.password);
        
        if (user) {
        localStorage.setItem('currentuser', JSON.stringify(user));
       
        window.location.href = "../home-page/index.html"; 
    } else {
        logindata.errorMessage.textContent = "Invalid username or password!";
    }
};

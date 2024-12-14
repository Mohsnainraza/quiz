let carddata = [
    {
    quiz:"html",
    img: "html.png",
    page: "html/html.html",
    },

    {
    quiz1:"CSS",
    img1: "css.png",
    page1:"css/css.html",
    },

    {
    quiz2:"JS Quiz",
    img2: "js.png",
    page2:"js/js.html" 
    },

    ]
    
    function card(carddata) {
    let div = document.getElementById("container");
    let div1 = document.getElementById("container1");
    let div2 = document.getElementById("container2");
    

    let data = document. createElement("div");
    data. classList.add("cards");

    let img = document.createElement("img")
    data.appendChild(img);
    div.appendChild(data);

    let data2 = document.createElement("div");
    data2. classList.add("cards");

    let img1 = document.createElement("img")
    data2.appendChild(img1);
    div1.appendChild(data2);

    let data3 = document. createElement("div");
    data3. classList. add("cards");

    let img2 = document.createElement("img")
    data3.appendChild(img2);
    div2.appendChild(data3);

   
    for ( i = 0; i < carddata.length; i++) {
        let data1 = carddata[i];

        if (data1.img) {
            
        img.src = data1.img
        img.alt = data1.quiz

        }
        
        if (data1.img1) {
            
        img1.src = data1.img1
        img1.alt = data1.quiz1

        }


        img2.src = data1.img2
        img2.alt = data1.quiz2


    if (data1.page) {
            
        
    img.addEventListener('click', function() {
    window.location.href = data1.page

    })
   }

    if (data1.page1) {
        
    img1.addEventListener('click', function() {
    window.location.href = data1.page1
    
    })
    }

    img2.addEventListener('click', function() {
        window.location.href = data1.page2
        
    })
    
 }
}
function logout(){
const currentuser = JSON.parse(localStorage.getItem('currentuser'));
// if (currentuser) {
//     document.getElementById('user-welcome').textContent = `Hello, ${currentuser.username}!`;
// } 

document.getElementById('btn').addEventListener('click', function() {
    localStorage.removeItem('currentuser'); 
    window.location.href = '../login/index.html'; 

});
}
logout()

card(carddata)
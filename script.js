

//signup

let signedUpUsers = [];
// console.log(localStorage.getItem("signedupusers"))
if(localStorage.getItem("signedupusers") != null){
    signedUpUsers = JSON.parse(localStorage.getItem("signedupusers")); 
}else{
    signedUpUsers = [];
}

const signupUser = () =>{
     

       
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let password = document.getElementById("user_password").value;
    let number = document.getElementById("user_number").value;
    let nameele = document.getElementById("user_name");
    let emailele = document.getElementById("user_email");
    let passwordele = document.getElementById("user_password");
    let numberele = document.getElementById("user_number");


    if (name == "") {
        window.alert("Please enter your name.");
        nameele.focus();
        return false;
    }
  
    if (email == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        emailele.focus();
        return false;
    }
  
    if (number == "") {
        window.alert(
          "Please enter your telephone number.");
        numberele.focus();
        return false;
    }
  

    if(password == "") {
        window.alert("Please enter your password");
        passwordele.focus();
        return false;
    }




    if(name && email && password && number){
        let signup_data = {
            "name":name,
            "email":email,
            "phonenumber":number,
            "password":password
        }
    
        signedUpUsers.push(signup_data);
        console.log(signup_data);
        
        
    
        if(typeof window !== "undefined"){
            
    
           
            
            localStorage.setItem("signedupusers",JSON.stringify(signedUpUsers))
            alert("successfully signedup!")
            
        }

    }else{
        alert("enter all fields!");
    }
    


}
const getUsers = () =>{
    console.log(JSON.parse(localStorage. getItem("signedupusers")))
}

//login

let LoggedInUser = [];

if(localStorage.getItem("loggedinUser")){
    LoggedInUser = JSON.parse(localStorage. getItem("loggedinUser"));
}else{
    LoggedInUser = [];
}

const signinUser = () =>{
    let name = document.getElementById("user_name").value;
    let password = document.getElementById("user_password").value;
    if(name && password){
        let login_data = {
            "name":name,
            "password":password
        }
        console.log(login_data);
        let arr = JSON.parse(localStorage. getItem("signedupusers"));
        arr.forEach(user => {
            if(user.name === name && user.password === password){
    
                if(typeof window !== "undefined"){
            
    
           
            
                    localStorage.setItem("loggedinUser",JSON.stringify(user))
                    alert("welcome",user.name)
                    
                }
            }
        });
    }else{
        alert("enter all fields!");
    }
   
    
}

const isLoggedIn = () =>{
    if(localStorage.getItem("loggedinUser")){
        console.log(JSON.parse(localStorage. getItem("loggedinUser")));
        return true
    }else{
        console.log("not logged in!");
        return false
    }
}




const signout = () =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("loggedinUser");
        alert("success!");
    }
}


const initiatePayment = () =>{
    let card_number = document.getElementById("card_number").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let cvv = document.getElementById("cvv").value;
    if(card_number.length != 16 ){
        alert("enter a valid card number!");
    }
    if(cvv.length != 3){
        alert("enter a valid cvv!");
    }
    if(year < 2021){
        alert("card expired!");
    }
    

    if(card_number && month && cvv && year){
        alert("payment is successfull!");
    }else{
        alert("enter all fields!");
    }
    



}







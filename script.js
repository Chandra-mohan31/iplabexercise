

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
    }
}








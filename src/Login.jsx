
import accounts from './assets/jsonData/accounts.json';
import googleicon from "./assets/icons/google.png";

function Login(){

    function closeLogin(){
        document.getElementById("loginCard").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("loginContainer").style.display = "none";
        document.body.style.overflow = "auto";
    }

    function setAccount(){
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        accounts.push({email,username,password,dob});
        console.log(accounts);
        document.getElementById("AccName").textContent = "Hi! " + username + " 😄";
    }

    return(
        <>
            <div id="loginContainer">
                <button id="closebtn" onClick={closeLogin}> X </button>
                <div id="loginCard">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username"></input>
                    <input type="password"  placeholder="Password"></input>
                    <p id="p1">Forgot Password?</p>
                    <button id="loginbtn" onClick={closeLogin}>Login</button>
                    <p id="p2">------------ Or Login with ------------</p>
                    <img src={googleicon}></img>
                    <a onClick={() => {
                        document.getElementById("loginCard").style.display = "none";
                        document.getElementById("register").style.display = "flex";
                    }}
                    id="p3">First Time? Click here to Register</a>
                </div>
                <div id="register">
                    <h1>Register</h1>
                    <input id="email" type="mail" placeholder="Email"></input>
                    <input id="username" type="text" placeholder="Username"></input>
                    <input id="password" type="password"  placeholder="Password"></input>
                    <input id="dob" type="text" placeholder="Date of Birth e.g. 01/01/2000"></input>
                    <button id="registerbtn" onClick={()=>{
                        setAccount();
                        closeLogin()}}
                        >Create Account</button>
                    <p id="p2">------------ Or Register with ------------</p>
                    <img src={googleicon}></img>
                </div>
            </div>
        </>
    );

}

export default Login
const axios = require('axios').default

const signUpScreen = document.querySelectorAll('.form-control');
const signupScreenArr = Array.from(signUpScreen);

async function loginRequest (email, password) {
    const config = {
        method : 'post',
        url : 'http://127.0.0.1:9999/api/auth/login',
        data: {
            "user": {
                "email": email,
                "password": password
            }
          }
    }
    let res = await axios(config);
    console.log(res);
}

async function signInRequest (username, email, password) {
    const config = {
        method : 'post',
        url : 'http://127.0.0.1:9999/api/auth/signup',
        data: {
            "user": {
                "userName": username,
                "email": email,
                "password": password
            }
          }
    }
    let res = await axios(config);
    console.log(res);
}

const signUpVariables = {
    username : signupScreenArr[0],
    email : signupScreenArr[1],
    password : signupScreenArr[2],
    repassword : signupScreenArr[3]

}

const signInVariables = {
    email : signupScreenArr[4],
    password : signupScreenArr[5],
}

export {signInVariables, signUpScreen, signupScreenArr, signUpVariables, loginRequest, signInRequest}

export class new_User {
    constructor (username, email, password, repassword){
        this.username = username;
        this.email = email;
        this.password = password;
        this.repassword = repassword;
    }
    
    summarize() {
        console.log(`Username = ${this.username}
        Email = ${this.email}
        Password = ${this.password}
        Repassword = ${this.repassword}`)
    }    
}

export class registered_User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    summarize() {
        console.log(`Email = ${this.email}
        Password = ${this.password}`)
    }
}

 

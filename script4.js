class User {
    #password;

    setPassword(newPassword) {
        this.#password = newPassword;
    }

    checkPasswor(password) {
        if(this.#password === password){
            alert("Password is correct");
        } else {
            alert("Password is incorrect");
        }
    }
}

const user = new User();

let newPassword = prompt("Enter new password");
user.setPassword(newPassword);

let myPassword = prompt("Enter your password");
user.checkPasswor(myPassword);

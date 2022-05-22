import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function HandleRegister(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Register Success!");
        })
        .catch((error) => {
          alert("Registration failed! " + error);
        });
    } else {
      alert("Please enter full information!");
    }
}
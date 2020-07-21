import firebase from 'firebase';

function CreateUser(email, password){
    const emailInput = email.value;
    const passwordInput = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }   )
    };

export { CreateUser };
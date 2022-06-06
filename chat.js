// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB5dh7RabMzQni2hkaitvp5hO4HV-YYSME",
    authDomain: "let-schat-284b4.firebaseapp.com",
    databaseURL: "https://let-schat-284b4-default-rtdb.firebaseio.com",
    projectId: "let-schat-284b4",
    storageBucket: "let-schat-284b4.appspot.com",
    messagingSenderId: "519669827121",
    appId: "1:519669827121:web:de20d93e1f99b2c464b710"
  };
  
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);


   window.location = "chat_room.html";
}




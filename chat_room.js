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
user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome "+user_name
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
         console.log("Room Nme - " + Room_names);
         row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "chat_page.html"
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
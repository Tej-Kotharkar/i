const firebaseConfig = {
  apiKey: "AIzaSyBzvjwl3NSS9w97mv6uOVgb7V53JJRy6bU",
authDomain: "kwitter-84555.firebaseapp.com",
databaseURL: "https://kwitter-84555-default-rtdb.firebaseio.com",
projectId: "kwitter-84555",
storageBucket: "kwitter-84555.appspot.com",
messagingSenderId: "999312111987",
appId: "1:999312111987:web:38ca947e13bb6428d0ed06"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
      });
  });
}

getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
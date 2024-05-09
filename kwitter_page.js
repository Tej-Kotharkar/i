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
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

      function send(){
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }

   

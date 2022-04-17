// Initialize Firebase
import  { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js"
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAE5uPu1tHE0VMHgct8oDCBDp7iXw5S6LI",
  authDomain: "qcm1-d91e2.firebaseapp.com",
  databaseURL: "https://qcm1-d91e2-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "qcm1-d91e2",
  storageBucket: "qcm1-d91e2.appspot.com",
  messagingSenderId: "117561243213",
  appId: "1:117561243213:web:99dc9c3a2e1ebef8074e04",
  measurementId: "G-9Q079N05RZ"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  

  // Reference messages collection
 //var messagesRef = firebase.database().ref('messages');
 //const ref = collection(db,'Message');
  

  // Listen for form submit
 // document.getElementById('contactForm').addEventListener('submit', submitForm);
  

  // Submit form

  document.getElementById("Hesham").onclick = function(){
    var name = document.getElementById('name');
    var company = document.getElementById('company');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');
    try {
      const docRef =  addDoc(collection(db, "Message"), {
       name: name,
       company: company,
       email: email,
       phone: phone,
       message: message
      });
    alert("Submit!!!")
      } catch (e) {
      console.error("Error adding document: ", e);
      };
 
  }
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    
  

    
               
            
          

    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }
  
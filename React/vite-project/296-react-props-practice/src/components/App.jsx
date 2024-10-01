import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card  name="Raju"
       img="https://media.istockphoto.com/id/1476170958/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=is&k=20&c=Aoohe9JFwoNK3B1Sykw_GvuJdviHKXAkaeDj3fvuLRM="
       no="+91-9738778838"
       email="raju@gmail.com"
      />
      <Card  name="Ramu"
       img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
       no="+91-63876878289"
       email="ramu@gmail.com"
      />
      <Card  name="Virat"
       img="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       no="+91-82987827878"
       email="virat@gmail.com"
      />
      <Card  name="Rohit"
       img="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       no="+91-787927726628"
       email="rohit@gmail.com"
      />
    </div>
  );
}

export default App;

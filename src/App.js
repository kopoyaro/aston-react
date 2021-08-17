import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList.component";
import UserUpdate from "./components/UserUpdate/UserUpdate.component";

export default function App() {
  const [nom, setNom] = useState("toto");
  const [prenom, setPrenom] = useState("tata");
  const [age, setAge] = useState(20);

  // useEffect(() => {
  //   setAge(age);
  // }, [age]);

  // useEffect(() => {
  //   setPrenom(prenom);
  // }, [prenom]);

  // useEffect(() => {
  //   setNom(nom);
  // }, [nom]);

  return (
    <div className="App">
      <UserList nom={nom} prenom={prenom} age={age} />
      <div style={{ left: "10px", position: "relative", textAlign: "end" }}>
        <UserUpdate title="nom" field={nom} changeUser={setNom}></UserUpdate>
        <UserUpdate
          title="prenom"
          field={prenom}
          changeUser={setPrenom}
        ></UserUpdate>
        <UserUpdate title="age" field={age} changeUser={setAge}></UserUpdate>
      </div>
    </div>
  );
}

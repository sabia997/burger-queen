import React from "react";
import firebaseConfig from "../../firebase";

const Waitress = () => {
  return (
    <>
      <h1>Waitress</h1>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Waitress;
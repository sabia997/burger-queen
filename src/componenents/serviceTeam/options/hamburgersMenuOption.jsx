import React, { useState } from 'react';
import firebaseConfig from "../../../firebase";

const SimpleHamburger = () => {
const [isnotChecked, isChecked] = useState(false)
const db = firebaseConfig.firestore();

const seletion = () => {
    if (isnotChecked === false) {
        isChecked(true)
        alert('Hamburguer Simples')
        db.collection("Pedido Lanche").doc("mesa 1").set({
            Lanche: "Hamburguer Simples",
            preço: "10"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    } else {
        isChecked(false)
        alert('desselecionou')
    }
}   
     return(
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                    <input type="checkbox" onClick ={seletion}  name="simpleHamburger" value="10"/>
                    <label for="simpleHamburger">Hamburguer Simples - R$10 </label>
                </div>
            </div>
        </React.Fragment>     
    );
};

const DobleHamburger = () => {
    const [isnotChecked, isChecked] = useState(false)
    const db = firebaseConfig.firestore();
    const seletionDuble = () => {
    if (isnotChecked === false) {
        isChecked(true)
        alert('Hamburguer Duplo')
        db.collection("Pedido Lanche").add({
            Lanche: "Hamburguer DUplo",
            preço: "15"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    } else {
        isChecked(false)
        alert('desselecionou')
    }
    }
return(
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" onClick ={seletionDuble} name="dobleHamburger" value="15"/>
                <label for="dobleHamburger">Hamburguer Duplo - R$15</label>
            </div>
        </div>
    </React.Fragment>
);
}


const VeganChicken = () => {
    const [isnotChecked, isChecked] = useState(false)
    const db = firebaseConfig.firestore();

    const seletionAdd = () => {
    if (isnotChecked === false) {
        isChecked(true)
        alert('Hamburguer Duplo')
        db.collection("Pedido Lanche").doc(
            "mesa 1"
            )
        .update({
            Lanche: "Hamburguer Simples",
            preço: "10",
            adicional: '"frango" vegano'
          }).then(function() {
            console.log("Frank food updated");
          });
    } else {
        isChecked(false)
        alert('desselecionou')
     db.collection("Pedido Lanche").doc(
        "mesa 1"
        )
    .update({
        Lanche: "Hamburguer Simples",
        preço: "10",
        adicional: ''
      }).then(function() {
        console.log("Frank food updated 2");
      });
    }
}
    
    return(
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox"  onClick ={seletionAdd} name="veganChicken"value="0"/>
                <label for="veganChicken">Vegan Chicken</label>
            </div>
        </div>
    </React.Fragment>         
);
}
const VeganCow = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="veganCow" value="0"/>
                <label for="veganCow">Vegan Cow</label>
            </div>
        </div>
    </React.Fragment>         
);

const VeganCheff = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="veganCheff" value="0"/>
                <label for="veganCheff">Vegan Cheff</label>
            </div>
        </div>
    </React.Fragment>         
);

const Cheese = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="cheese" value="1"/>
                <label for="cheese">Fatia Adicional de queijo - R$1</label>
            </div>
        </div>
    </React.Fragment>         
);

const Egg = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="egg" value="1"/>
                <label for="egg">Adicional Ovo vegan do cheef R$1</label>
            </div>
        </div>
    </React.Fragment>         
);


export {SimpleHamburger, DobleHamburger, VeganChicken, VeganCow, VeganCheff, Cheese, Egg}
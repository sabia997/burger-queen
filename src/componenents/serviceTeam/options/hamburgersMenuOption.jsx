import React, { useState } from 'react';
import firebaseConfig from "../../../firebase";
const db = firebaseConfig.firestore();

const SimpleHamburger = () => {
const [isnotChecked, isChecked] = useState(false)

const seletion = () => {
    if (!isnotChecked) {
        isChecked(true)
        db.collection("Pedido Lanche").doc("mesa 1").update({Lanche: "Hamburguer Simples", preço: "10"})
        .then(function(docRef) {console.log('deu certo');})
        .catch(function(error) {console.error("Error adding document: ", error);});
    } else {
        isChecked(false)
        db.collection("Pedido Lanche").doc("mesa 1").update({ Lanche: "", preço: "" })
        .then(function(docRef) {console.log("Document written with ID: ", docRef.id);})
        .catch(function(error) { console.error("Error adding document: ", error);});
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

    const seletionDuble = () => {
    if (!isnotChecked) {
        isChecked(true)
        db.collection("Pedido Lanche").doc("mesa 1").update({Lanche: "Hamburguer DUplo", preço: "15" })
        .then(function(docRef) { console.log("Document written with ID: ", docRef.id);})
        .catch(function(error) {console.error("Error adding document: ", error);});
    } else {
        isChecked(false)
        db.collection("Pedido Lanche").doc("mesa 1").update({Lanche: "", preço: "" })
        .then(function(docRef) {console.log("Document written with ID: ", docRef.id);})
        .catch(function(error) { console.error("Error adding document: ", error);});
    }
}
return(
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" onChange ={seletionDuble} name="dobleHamburger" value="15"/>
                <label for="dobleHamburger">Hamburguer Duplo - R$15</label>
            </div>
        </div>
    </React.Fragment>
);
}


const VeganChicken = () => {
    const [isnotChecked, isChecked] = useState(false)

    const seletionChicken = () => {
    if (!isnotChecked) {
        isChecked(true)
        db.collection("Pedido Lanche").doc("mesa 1").update({veganChicken: 'Vegan Chicken'})
        .then(function() {console.log('updated');})
        .catch(function(error) {console.error("Error adding document: ", error)})
    } else {
        isChecked(false)
        db.collection("Pedido Lanche").doc("mesa 1").update({veganChicken: ''})
        .then(function() {console.log("Frank food updated 2");})
        .catch(function(error) {console.error("Error adding document: ", error);
    });
    }
}
    
    return(
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <br/>
                <div> Escolha um (1) tipo de  Hamburguer </div>
                <input type="checkbox"  onChange ={seletionChicken} name="veganChicken"value="0"/>
                <label for="veganChicken">Vegan Chicken</label>
            </div>
        </div>
    </React.Fragment>         
);
}
const VeganCow = () => {
    const [isnotChecked, isChecked] = useState(false)

    const seletionCow = () => {
    if (!isnotChecked) {
        isChecked(true)
        db.collection("Pedido Lanche").doc("mesa 1").update({ VeganCow: 'Vegan Cow' })
        .then(function() {console.log('updated');});
    } else {
        isChecked(false)
        db.collection("Pedido Lanche").doc("mesa 1").update({VeganCow: ''})
       .then(function() {console.log("updated");});
    }
}
    return(
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                <form>
                    <input type="checkbox" onChange ={seletionCow} name="veganCow" value="TESTE"/>
                    <label for="veganCow">Vegan Cow</label>
                    </form>
                </div>
            </div>
        </React.Fragment>         
    );
}

const VeganCheff = () => {
    const [isnotChecked, isChecked] = useState(false)

    const seletionCheff = () => {
        if (!isnotChecked) {
            isChecked(true)
            db.collection("Pedido Lanche").doc("mesa 1").update({veganCheff: 'Vegan Cheff'})
            .then(function() {console.log('updated');})
            .catch(function(error) {console.error("Error adding document: ", error)})
        } else {
            isChecked(false)
            db.collection("Pedido Lanche").doc("mesa 1").update({veganCheff: ''})
            .then(function() {console.log("");})
            .catch(function(error) {console.error("Error adding document: ", error);});
        } 
    }
    return (
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                    <input type="checkbox" onChange = {seletionCheff} name="veganCheff" value="0"/>
                    <label for="veganCheff">Vegan Cheff</label>
                </div>
            </div>
        </React.Fragment>         
);
}

const Cheese = () => {
    const [isnotChecked, isChecked] = useState(false)

    const seletionAddCheese = () => {
        if (!isnotChecked) {
            isChecked(true)
            db.collection("Pedido Lanche").doc("mesa 1").update({addCheese: 'Adicional: Vagan Cheese'})
            .then(function() {console.log('updated');})
            .catch(function(error) {console.error("Error adding document: ", error)})
        } else {
            isChecked(false)
            db.collection("Pedido Lanche").doc("mesa 1").update({addCheese: ''})
            .then(function() {console.log("");})
            .catch(function(error) {console.error("Error adding document: ", error);});
        }
    }
    return(
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <br/>
                <div> Escolha os adicionais </div>
                <input type="checkbox" onChange = {seletionAddCheese} name="cheese" value="1"/>
                <label for="cheese">Fatia Adicional de queijo - R$1</label>
            </div>
        </div>
    </React.Fragment>         
);
}

const Egg = () => {
    const [isnotChecked, isChecked] = useState(false)

    const seletionAddEgg = () => {
        if (!isnotChecked) {
            isChecked(true)
            db.collection("Pedido Lanche").doc("mesa 1").update({addEgg: 'Adicional: Vagan Egg'})
            .then(function() {console.log('updated');})
            .catch(function(error) {console.error("Error adding document: ", error)})
        } else {
            isChecked(false)
            db.collection("Pedido Lanche").doc("mesa 1").update({addEgg: ''})
            .then(function() {console.log("");})
            .catch(function(error) {console.error("Error adding document: ", error);});
        }
    }
    return(
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" onChange= {seletionAddEgg} name="egg" value="1"/>
                <label for="egg">Adicional Ovo vegan do cheef R$1</label>
            </div>
        </div>
    </React.Fragment>         
    );
}

export {SimpleHamburger, DobleHamburger, VeganChicken, VeganCow, VeganCheff, Cheese, Egg}
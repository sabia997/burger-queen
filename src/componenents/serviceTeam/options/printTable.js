import  React, {useState} from 'react';
import firebaseConfig from "../../../firebase";
// import selectTable from './SelectTable'

const TableSelected = () => {
    
    const [mesaPedido, setMesaPedido] = useState('Aguardando pedido');
   

    const db = firebaseConfig.firestore();
    db.collection("Pedido Lanche").doc('mesa 1').get().then(function(doc) {
       if (doc.exists) {
          // console.log("Document data:", doc.data());  
        setMesaPedido(doc.data())       
       } else {
           console.log("No such document!");
       }
   }).catch(function(error) {
       console.log("Error getting document:", error);
       
   });        
   return (
    <React.Fragment>
       <div></div>
       <div>{mesaPedido.Lanche}</div>
       <div>{mesaPedido.veganChicken}</div>
       <div>{mesaPedido.VeganCow}</div>
       <div>{mesaPedido.veganCheff}</div>
       <div>{mesaPedido.addCheese}</div>
       <div>{mesaPedido.addEgg}</div> 

    </React.Fragment>)
}
export default TableSelected;
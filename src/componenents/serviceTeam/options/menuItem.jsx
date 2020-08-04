import React, {useCallback, useContext} from 'react';


const MenuItem = (doc, order, setOrder) => {
    const AddItem = useCallback(
        async event => {
            const eventId = event.target.id;
            setOrder(order.push({item: eventId}));
            console.log(order.order);
        },[order,setOrder])
    
        const RemoveItem = (props) => (
        null
        )
        
return (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input id={doc.doc.id} className="menu-checkbox" onClick = {AddItem} type="button" name="menuOptionAdd" value="+" />
                <label className="menu-label" htmlFor="menuOptionAdd">{doc.doc.data.name}</label>
                <input className="menu-checkbox" onClick = {RemoveItem} type="button" name="menuOptionSubtract" value="-" />
            </div>
        </div>
    </React.Fragment> )
}
        
export default MenuItem;
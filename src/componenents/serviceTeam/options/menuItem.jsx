import React from 'react';

const MenuItem = (doc) => {
return (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input id={doc.doc.id} className="menu-checkbox" type="button" name="menuOptionAdd" value="+" />
                <label className="menu-label" htmlFor="menuOptionAdd">{doc.doc.data.name}</label>
                <input className="menu-checkbox" type="button" name="menuOptionSubtract" value="-" />
            </div>
        </div>
    </React.Fragment> )
}
        
export default MenuItem;
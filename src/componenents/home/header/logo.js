import  React from 'react';

export default class Logo extends React.Component {
    
    render(){
        return(
            <div className="logo">
                <img src = {require("./logo.svg")} alt="budda with green hair eating a hamburger "/>
                <img src = {require("./title.svg")} alt="title with black font color"/>
            </div>
        );
    }
}

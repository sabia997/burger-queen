import  React from 'react';

const Logo = () => (
    <div className="logo">
        <img className="buda-logo" src = {require("./logo.svg")} alt="budda with green hair eating a hamburger "/>
        <img className="name-logo" src = {require("./title.svg")} alt="title with black font color"/>
    </div>
);

export default Logo;

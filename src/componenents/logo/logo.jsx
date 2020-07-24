import  React from 'react';

const Logo = () => (
    <div className="logo">
        <img src = {require("./logo.svg")} alt="budda with green hair eating a hamburger "/>
        <img src = {require("./title.svg")} alt="title with black font color"/>
    </div>
);

export default Logo;

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import img from '../../images/about.png'

const NotFound = () => {
    return (
        <div className="notFound m-5 p-3">
        <img src={img} alt="" /> <br />
        <Link to="/home"><button className="btn btn-dark m-2">Back to Home</button></Link>
    </div>
    );
};

export default NotFound;
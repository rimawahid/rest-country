import React from 'react';
import './Country.css';
import {useHistory} from 'react-router'
const Country = (props) => {
    const{name,flag,capital} = props.country;
    const history = useHistory();
    const showDetails = name => {
        const url = `name/${name}`;
        history.push(url);
    }
    
    
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h2>Name:{name}</h2>
            <h3>Capital:{capital}</h3>
            <button onClick={()=> showDetails(name)} >Country Details</button>
        </div>
    );
};

export default Country;
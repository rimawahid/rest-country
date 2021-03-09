import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router';
import './CountryDetails.css'
const CountryDetail = () => {
    const {name} = useParams();
    const[country,setCountry] = useState([]);
    const{flag,nativeName,capital,population,area,region,languages,currencies} = country
    useEffect(() => {
        const url=`https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))

    },[])
    console.log(country)
    
    return (
        <div className="details">
             <img src={flag} alt=""/>
            <h1>Name:{name} </h1>
            <h2>Native Name:{nativeName}</h2>
            <p>Capital:{capital}</p>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Region:{region}</p>
            <p>Language:{languages && languages[0].name}</p>
            <p>Currency:{currencies && currencies[0].name}</p>
        </div>
    );
};

export default CountryDetail;
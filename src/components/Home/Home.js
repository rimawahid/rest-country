import React,{useState,useEffect} from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const[countries,setCountries] = useState([]);
    useEffect(() => {
        const url=`https://restcountries.eu/rest/v2/all
        `
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className="text-center" >
            <h1>Welcome to Ultra Nations!</h1>
            <h2>Number of countries:{countries.length}</h2>
            <div className="home">
            {
                countries.map(country =><Country country={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Home;
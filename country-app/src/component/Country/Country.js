import React, { useState,useEffect } from "react";
import axios from 'axios'



function Country() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, [countries]);
  return (
    <div className="container">
      <div >
        {countries.map((eleman) => {
          return (
              <div  key={eleman.name} >
                <img  src={eleman.flag} style={{width:'18rem'}} />
                <div>
                  <p>{eleman.name}</p>
                  <p className="mb-2 text-muted">
                    {eleman.capital}
                  </p>
                  <h4>{eleman.languages[0].name}</h4>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Country;

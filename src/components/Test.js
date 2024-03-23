import React, { useEffect, useState } from "react";

const Test = () => {
  const [list, setList] = useState(2);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');


useEffect(()=>{
    const countryData = async()=>{
        try {
            const response = await fetch("https://freetestapi.com/api/v1/countries")
            const data =  await response.json();
            console.log(data)
            setCountries(data)
        } catch (error) {
            console.log(error);
        }
    }
    countryData();
},[])


  function renderList() {
    let Arr = [];
    for (let index = 0; index < list; index++) {
      Arr.push(
        <li key={index}>
          <input type="text" />{" "}
        </li>
      );
    }
    return Arr;
  }

  const addMore = () => {
    setList(list + 1);
  };

  return (
    <div>
      <ol>{renderList()}</ol>
      <p>{selectedCountry}</p>
      <select name="countries" value={selectedCountry} onChange={(e)=>setSelectedCountry(e.target.value)}>
        <option value={''}>Select a country</option>
        {
        countries.map((country,index) =>{
            return (<option key={country+index} value={country.name}>{country.name}</option>)
        })
        }
      </select>
      <button onClick={addMore}>+ Add more</button>
    </div>
  );
};

export default Test;

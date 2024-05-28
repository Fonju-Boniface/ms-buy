import React, { useState, useEffect } from "react";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    };
    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filtered);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const getCountryCode = (countryCode) => {
    const country = countries.find((c) => c.cca2 === countryCode);
    return country?.callingCodes?.[0] ? `+${country.callingCodes[0]}` : '';
  };

  return (
    <div>
      <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={handleSearch} />
      </div>
      <div>
        <label htmlFor="phone-number">Phone Number:</label>
        <div>
          <span>{getCountryCode(filteredCountries[0]?.cca2)}</span>
          <input
            id="phone-number"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor="country-dropdown">Select a country:</label>
        <select id="country-dropdown">
          <option value="">Select a country</option>
          {filteredCountries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
            <img
              className="country-flag"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
            {country.name.common} (+{getCountryCode(country.cca2)})
          </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryDropdown;

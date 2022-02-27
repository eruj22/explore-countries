import React from "react";
import styled from "styled-components";

import SingleCountry from "./SingleCountry";

function DisplayCountries({ countries }) {
  return (
    <div className="container">
      <Wrapper>
        {countries.map((country) => {
          return <SingleCountry key={country.alpha3Code} country={country} />;
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 4rem;
  padding-bottom: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 3rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 300px;
    justify-content: center;
  }
`;

export default DisplayCountries;

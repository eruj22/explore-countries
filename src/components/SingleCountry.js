import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import image from "../assets/error-image.jpg";

function SingleCountry({ country }) {
  const { name, flag, population, region, capital } = country;

  return (
    <Article>
      <Link to={`country/${name}`}>
        <CountryImage
          src={flag ? flag : image}
          className="card__image"
          alt={`the flag of ${name}`}
        />
        <Info>
          <h3 className="card__title">{name}</h3>
          <p>
            <BoldText>Population: </BoldText>
            {population ? population.toLocaleString() : "/"}
          </p>
          <p>
            <BoldText>Region: </BoldText>
            {region ? region : "/"}
          </p>
          <p>
            <BoldText>Capital: </BoldText>
            {capital ? capital : "/"}
          </p>
        </Info>
      </Link>
    </Article>
  );
}

const Article = styled.article`
  cursor: pointer;
  min-height: 300px;
  border-radius: 0.3rem;
  padding-bottom: 2rem;
  box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.017),
    0.7px 0.7px 5.3px rgba(0, 0, 0, 0.022),
    1.4px 1.4px 10.1px rgba(0, 0, 0, 0.027),
    2.6px 2.6px 17.9px rgba(0, 0, 0, 0.032),
    5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042), 14px 14px 77px rgba(0, 0, 0, 0.07);
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const CountryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;

const Info = styled.div`
  padding: 0 1.5rem;
`;

export default SingleCountry;

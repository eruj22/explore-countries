import React from "react"
import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineCaretDown } from "react-icons/ai"

function FilterCountries({
  setSearchQuery,
  searchQuery,
  filterCountries,
  setFilterCountries,
  theme,
}) {
  return (
    <div className="container">
      <Wrapper>
        <div className="search">
          <AiOutlineSearch className="search__icon" />
          <input
            type="search"
            placeholder="Search for countries..."
            className="search__input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter">
          <AiOutlineCaretDown className="filter__icon" />
          <select
            id="filterCountries"
            className="filter__select"
            value={filterCountries}
            onChange={(e) => setFilterCountries(e.target.value)}
          >
            <option value="select" hidden>
              Filter by Region
            </option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search {
    position: relative;

    &__input {
      background: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      padding: 1rem 1rem 1rem 3rem;
      border-radius: 0.2rem;
      border: none;
      width: 30vw;
      min-width: 300px;
      box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.017),
        0.7px 0.7px 5.3px rgba(0, 0, 0, 0.022),
        1.4px 1.4px 10.1px rgba(0, 0, 0, 0.027),
        2.6px 2.6px 17.9px rgba(0, 0, 0, 0.032),
        5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042),
        14px 14px 77px rgba(0, 0, 0, 0.07);
    }

    &__icon {
      position: absolute;
      font-size: 16px;
      top: 15px;
      left: 15px;
    }
  }

  .filter {
    position: relative;

    &__select {
      /* height: 47px; */
      background: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      border-radius: 0.2rem;
      padding: 1rem 2rem 1rem 1rem;
      box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.017),
        0.7px 0.7px 5.3px rgba(0, 0, 0, 0.022),
        1.4px 1.4px 10.1px rgba(0, 0, 0, 0.027),
        2.6px 2.6px 17.9px rgba(0, 0, 0, 0.032),
        5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042),
        14px 14px 77px rgba(0, 0, 0, 0.07);

      /* custom select */
      appearance: none;
      cursor: pointer;
      background: ${({ theme }) => theme.elements};
      border: none;
    }

    &__icon {
      position: absolute;
      right: 0.9rem;
      top: 1rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .filter {
      margin-top: 1rem;
    }
  }
`

export default FilterCountries

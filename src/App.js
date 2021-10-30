import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./utils/themes"
import Loader from "./components/Loader"
import useFetch from "./hooks/useFetch"
import { GlobalStyles } from "./utils/global"
import Header from "./components/Header"
import { useDarkMode } from "./hooks/useDarkMode"
import FilterCountries from "./components/FilterCountries"
import DisplayCountries from "./components/DisplayCountries"

function App() {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  const url = "https://restcountries.com/v2/all"
  const { data, isLoading } = useFetch(url)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCountries, setFilterCountries] = useState("")
  let filter = {
    searchQuery,
    setSearchQuery,
    filterCountries,
    setFilterCountries,
  }

  const searchCountries = () => {
    let search = data
    if (filterCountries !== "") {
      if (filterCountries === "All") {
        search = data
      } else {
        search = data.filter((country) => {
          const { region } = country
          return region === filterCountries
        })
      }
    }
    if (searchQuery !== "") {
      search = data.filter((country) => {
        const { name } = country
        return name.toLowerCase().includes(searchQuery.toLowerCase())
      })
    }
    return search
  }
  const countries = searchCountries()

  if (isLoading) {
    return <Loader />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <FilterCountries {...filter} />
        <DisplayCountries countries={countries} />
      </>
    </ThemeProvider>
  )
}

export default App

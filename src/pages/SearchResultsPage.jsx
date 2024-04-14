import React, { useEffect } from "react";
import SearchResultCard from "../components/SearchResultCard";
import fetchRecipes from "../components/fetchRecipes";
import { TextField, Typography } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import queryForTitle from "../components/queryForTitle";

const SearchResultsPage = () => {
    const [query, setQuery] = useState("")
    const [displayQuery, setDisplayQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const [queriedRecipes, setQueriedRecipes] = useState([])

    useEffect(() => {
        const allRecipes = fetchRecipes()
        setRecipes(allRecipes)
        setQueriedRecipes(allRecipes)
    },[])

    const onSearch = () => {
        setDisplayQuery(query)
        const result = queryForTitle(query, recipes)
        setQueriedRecipes(result)
    }
    
    return (
    <div className="flex flex-col items-center mt-10 w-screen">
        <div className="flex flex-col justify-center items-center">
            <TextField onKeyDown={(e) => {
                if(e.key == "Enter")
                    onSearch()
            }} onChange={(e) => setQuery(e.target.value)} InputProps={{endAdornment:<FaMagnifyingGlass className="cursor-pointer" onClick={onSearch} size={"2.25vh"}/>, sx:{borderRadius:20, width:"25vw"}}}/>
            {displayQuery ? <Typography>Showing Result for: {displayQuery}</Typography> : <></>}
        </div>
        <div className="grid grid-cols-2 gap-x-36 gap-y-24 mt-10">
            {queriedRecipes.map((recipe, index) => <div key={index}><SearchResultCard title={recipe.title} image={"public/Iced White Mocha.jpg"} rating="5.0" /></div>)}
        </div>
    </div>
    )
}

export default SearchResultsPage;
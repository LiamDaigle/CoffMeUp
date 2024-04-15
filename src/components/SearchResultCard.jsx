import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import fetchRecipes from "./fetchRecipes";

const SearchResultCard = ({title, image, rating}) => {

    const onClick = () => {
        const recipes = fetchRecipes()
        const recipe = recipes.filter((recipe) => recipe.title === title)
        
        localStorage.setItem("selectedRecipe", JSON.stringify(recipe))
    }
    return(
        <Card className="w-96">
            <CardMedia className="h-32" image={image}/>
            <CardContent className="flex flex-row justify-between bg-coffee-dark">
                <Link onClick={onClick} to="/">
                    <Typography className="hover:underline cursor-pointer text-white">{title}</Typography>
                </Link>
                <div className="flex flex-row">
                    <h2 className="mr-2">{rating}</h2>
                    <CiStar size={25}></CiStar>
                </div>
            </CardContent>
        </Card>
    )
}

export default SearchResultCard;
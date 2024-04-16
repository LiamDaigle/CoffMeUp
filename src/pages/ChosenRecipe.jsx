import React, { useState, useEffect } from "react";
import fetchSelectedRecipe from "../components/fetchSelectedRecipe";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RecipeCard from "../components/RecipeCard";


const ChosenRecipe = () => {
    const [recipe, setRecipe] = useState({}); // Initialize with an empty object

    useEffect(() => {
        const recipeData = fetchSelectedRecipe();
        if (recipeData.length > 0) {
            setRecipe(recipeData[0]);
        } else {
            setRecipe({});
        }
    }, []);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-10 w-full px-[2vw] py-[4vw] pb-[10vh] bg-coffee-lightgreen min-h-screen">
            <Link to="/recipes" className="flex items-center text-coffee-dark hover:text-coffee-green">
                <FaArrowLeft size={20} className="inline mr-2"/>
                <Typography variant="h6">Back to Recipes</Typography>
            </Link>
            <div className="mt-10 px-[5vw] bg-coffee-cream">
                <RecipeCard 
                    title={recipe.title} 
                    description={recipe.description} 
                    ingredients={recipe.ingredients} 
                    steps={recipe.steps} 
                    rating={recipe.rating}
                    image={"/Iced White Mocha.jpg"}
                />
            </div>
        </div>
    );
};

export default ChosenRecipe;

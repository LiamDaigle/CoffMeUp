import React, { useState, useEffect } from "react";
import fetchSelectedRecipe from "../components/fetchSelectedRecipe";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RecipeCard from "../components/RecipeCard";
import fetchUsers from "../components/fetchUsers";
import updateRecipe from "../components/updateRecipe";
import updateSelectedRecipe from "../components/updateSelectedRecipe";
import updateCurrentProfile from "../components/updateCurrentProfile";

const ChosenRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const [tried, setTried] = useState(false);

    useEffect(() => {
        async function loadRecipe() {
            const recipeData = await fetchSelectedRecipe();
            if (recipeData && recipeData.length > 0) {
                setRecipe(recipeData[0]);
            }
        }
        loadRecipe();
    }, []);

    useEffect(() => {
        async function checkIfTried() {
            const currentUser = await fetchUsers();
            if (currentUser && currentUser.length > 0 && currentUser[0].tried) {
                const triedRecipes = currentUser[0].tried;
                const tried = triedRecipes.some(r => r.title === recipe.title);
                setTried(tried);
                if (tried) {
                    // Assuming deep clone or a way to avoid direct mutation
                    const updatedRecipe = { ...recipe, tried: true };
                    updateRecipe(recipe.title, updatedRecipe);
                    updateCurrentProfile(currentUser[0].firstName, updatedRecipe);
                    updateSelectedRecipe(updatedRecipe);
                }
            }
        }
        if (recipe) {
            checkIfTried();
        }
    }, [recipe]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-10 w-full px-[2vw] py-[4vw] bg-coffee-lightgreen min-h-screen">
            <Link to="/recipes" className="flex items-center text-coffee-dark hover:text-coffee-green">
                <FaArrowLeft size={20} className="inline mr-2"/>
                <Typography variant="h6">Back to Recipes</Typography>
            </Link>
            <div className="mt-10 bg-coffee-cream">
                <RecipeCard 
                    title={recipe.title} 
                    description={recipe.description} 
                    ingredients={recipe.ingredients} 
                    steps={recipe.steps} 
                    rating={recipe.rating}
                    image={"/Iced White Mocha.jpg"}
                    tried={tried}
                />
            </div>
        </div>
    );
};

export default ChosenRecipe;
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
    const [recipe, setRecipe] = useState({}); // Initialize with an empty object
    const [tried, setTried] = useState(false);

    useEffect(() => {
        const recipeData = fetchSelectedRecipe();
        if (recipeData.length > 0) {
            setRecipe(recipeData[0]);
        } else {
            setRecipe({});
        }
    }, []);

    useEffect(() => {
        async function checkIfTried() {
          const currentUser = await fetchUsers();
          const triedRecipes = currentUser[0].tried;
    
          const tried = triedRecipes.some(recipe => recipe.title === recipeTitle);
          setTried(tried);
          // if it is,  
          if(tried) {
            // set tried to true,  
            recipe.tried = true;

            // and add recipe in recipes collection in localstorage
            updateRecipe(recipe.title, recipe)

            // and add Recipe to tried of profiles collection in localstorage
            updateCurrentProfile(currentUser.firstName, recipe) 

            // and change tried to true in selectedRecipe collection in localstorage
            updateSelectedRecipe(recipe);
          }          
        }

        checkIfTried();
      }, [recipeTitle]);


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

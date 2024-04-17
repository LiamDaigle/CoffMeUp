import { TextField, Typography } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import React from "react";
import { useState } from "react";
import constructRecipe from "../components/constructRecipe";
import addRecipe from "../components/addRecipe";
import { useNavigate } from "react-router-dom";

const UploadRecipe = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [currentIngredient, setCurrentIngredient] = useState("")
    const [steps, setSteps] = useState([])
    const [currentStep, setCurrentStep] = useState("")
    const navigate = useNavigate()

    const onClickIngredient = () => {

        const oldIngredients = ingredients;
        oldIngredients.push(currentIngredient)
        setIngredients(oldIngredients)
        setCurrentIngredient("")
    }

    const onClickSteps = () => {
        const oldSteps = steps;
        oldSteps.push(currentStep)
        setSteps(oldSteps)
        setCurrentStep("")
    }

    const onSubmit = () => {
        const newRecipe = constructRecipe(title, description, ingredients, steps, "5.0", false)
        addRecipe(newRecipe)
        navigate("/recipes")
    }

    return <div className="flex flex-col items-center justify-center mt-14 h-3/4">
        <div className="flex flex-col items-center justify-center">
            <Typography>Recipe Title</Typography>
            <TextField onChange={(e) => setTitle(e.target.value)} sx={{borderRadius:20, width:"25vw"}} placeholder="Recipe title" />
        </div>
        <div className="flex flex-col items-center justify-center">
            <Typography>Description</Typography>
            <Textarea onChange={(e) => setDescription(e.target.value)} minRows={4} sx={{width:"25vw"}}/>
        </div>
        <div className="flex flex-row justify-between space-x-64">
            <div>
                <Typography>Ingredients</Typography>
                <div className="flex flex-row mb-2">
                    <TextField onChange={(e) => setCurrentIngredient(e.target.value)}/>
                    <div className="flex justify-center items-center text-black bg-coffee-medium px-4 py-2 rounded-lg hover:bg-coffee-dark hover:text-white cursor-pointer" onClick={onClickIngredient}>
                        <Typography sx={{fontSize:"1.25rem", lineHeight:"1.75rem"}}>+</Typography>
                    </div>
                </div>
                <div className="bg-white px-4 py-2 rounded">
                    {ingredients.length > 0 ? ingredients.map((ingredient) => <Typography key={ingredient}>{ingredient}</Typography>) : <Typography>No Ingredients Listed</Typography>}
                </div>
            </div>
            <div>
                <Typography>Steps</Typography>
                <div className="flex flex-row mb-2">
                    <TextField onChange={(e) => setCurrentStep(e.target.value)}/>
                    <div className="flex justify-center items-center text-black bg-coffee-medium px-4 py-2 rounded-lg hover:bg-coffee-dark hover:text-white cursor-pointer" onClick={onClickSteps}>
                        <Typography sx={{fontSize:"1.25rem", lineHeight:"1.75rem"}}>+</Typography>
                    </div>
                </div>
                <div className="bg-white px-4 py-2 rounded">
                    {steps.length > 0 ? steps.map((step) => <Typography key={step}>{step}</Typography>) : <Typography>No Steps Listed</Typography>}
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center text-black bg-coffee-medium px-4 py-2 rounded-lg hover:bg-coffee-dark hover:text-white cursor-pointer" onClick={onSubmit}>
            <Typography>Submit</Typography>
        </div>
    </div>
}

export default UploadRecipe;
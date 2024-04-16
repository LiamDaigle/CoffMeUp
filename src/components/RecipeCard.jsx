import React from 'react';
import { CiStar } from 'react-icons/ci';

const RecipeCard = ({ 
    title, 
    description, 
    ingredients = [],
    steps = [],
    rating,
    image 
}) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;

    return (
        <div className="flex flex-row">
            <img src={image} alt={title} className="w-1/2 h-auto rounded-lg"/>
            <div className="flex flex-col w-1/2 p-5">
                <h1 className="text-4xl text-coffee-dark satisfy-regular">{title}</h1>
                <div className="flex">
                    {[...Array(filledStars)].map((_, i) => (
                        <CiStar key={i} color="brown" />
                    ))}
                    {[...Array(emptyStars)].map((_, i) => (
                        <CiStar key={i} color="lightbrown" />
                    ))}
                </div>
                <p>Prep Time: 1 min | Completion Time: 2 min | Serving Size: 2 cups</p>
                <h2 className="text-2xl text-coffee-dark satisfy-regular">Description</h2>
                <p className="text-coffee-dark sedan-regular">{description}</p>
                <div className="flex">
                    <div className="w-1/2">
                        <h2 className="text-2xl text-coffee-dark satisfy-regular">Ingredients</h2>
                        <ul className="list-disc text-coffee-dark sedan-regular">
                            {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl text-coffee-dark satisfy-regular">Steps</h2>
                        <ol className="list-decimal text-coffee-dark sedan-regular">
                            {steps.map((step, index) => <li key={index}>{step}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
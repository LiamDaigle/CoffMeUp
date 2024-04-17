import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const RecipeCard = ({
    title,
    description,
    ingredients = [],
    steps = [],
    rating,
    image,
    tried = false
}) => {
    const [isTried, setIsTried] = useState(tried);
    const numericRating = parseFloat(rating) || 0;
    const filledStars = Math.floor(numericRating);
    const emptyStars = 5 - filledStars;

    const toggleTried = () => setIsTried(!isTried);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-start">
                <div className="flex-none w-1/3">
                    <img src={image} alt={title} className="w-full h-auto rounded-lg"/>
                </div>
                <div className="flex-grow p-5 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start">
                            <h1 className="text-4xl text-coffee-dark satisfy-regular">{title}</h1>
                            <div className="text-right text-lg text-coffee-dark">
                                <span className="font-bold">Prep Time:</span> 1 min |
                                <span className="font-bold">  Completion Time:</span> 2 min |
                                <span className="font-bold">  Serving Size:</span> 2 cups
                            </div>
                        </div>
                        <div className="flex text-coffee-dark my-2">
                            {[...Array(filledStars)].map((_, i) => (
                                <FaStar key={i} size={30} />
                            ))}
                            {[...Array(emptyStars)].map((_, i) => (
                                <FaRegStar key={i} size={30} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <button 
                            onClick={toggleTried} 
                            className={`self-end mt-2 ${isTried ? 'bg-coffee-brown' : 'bg-coffee-light'} text-coffee-dark py-1 px-4 rounded`}
                        >
                            {isTried ? 'Tried' : 'Mark as Tried'}
                        </button>
                        <h2 className="text-2xl text-coffee-dark satisfy-regular mt-4">Description</h2>
                        <p className="text-coffee-dark sedan-regular">{description}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 p-5">
                    <h2 className="text-2xl text-coffee-dark satisfy-regular">Ingredients</h2>
                    <ul className="list-disc text-coffee-dark sedan-regular px-[1vw]">
                        {ingredients.map((ingredient, index) => (
                            <li 
                                key={index} 
                                style={{ backgroundColor: index % 2 ? '#f5f5dc' : '#fff8dc' }}
                            >
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/2 p-5">
                    <h2 className="text-2xl text-coffee-dark satisfy-regular">Steps</h2>
                    <ol className="list-decimal text-coffee-dark sedan-regular px-[1vw]">
                        {steps.map((step, index) => (
                            <li 
                                key={index} 
                                style={{ backgroundColor: index % 2 ? '#f5f5dc' : '#fff8dc' }}
                            >
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
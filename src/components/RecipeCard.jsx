import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // FontAwesome icons

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
    const halfStars = (Math.round(numericRating) > filledStars) ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStars;

    const toggleTried = () => setIsTried(!isTried);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row md:items-start">
                <div className="flex-none w-1/3">
                    <img src={image} alt={title} className="w-full h-auto rounded-lg"/>
                </div>
                <div className="flex-grow p-5">
                    <div className="mb-4">
                        <h1 className="text-4xl text-coffee-dark satisfy-regular">{title}</h1>
                        <div className="flex text-dark"> {/* text-dark is for filled stars color */}
                            {[...Array(filledStars)].map((_, i) => (
                                <FaStar key={i} size={30} />
                            ))}
                            {[...Array(halfStars)].map((_, i) => (
                                <FaStar key={i} size={30} />
                            ))}
                            {[...Array(emptyStars)].map((_, i) => (
                                <FaRegStar key={i} size={30} />
                            ))}
                        </div>
                        <div className="text-sm mt-2 text-coffee-dark">
                            <span>Prep Time: 1 min</span> |  
                            <span>Completion Time: 2 min</span> |  
                            <span>Serving Size: 2 cups</span>
                        </div>
                        <button 
                            onClick={toggleTried} 
                            className={`mt-2 ${isTried ? 'bg-coffee-brown' : 'bg-coffee-light'} text-coffe-dark py-1 px-4 rounded`}
                        >
                            {isTried ? 'Tried' : 'Mark as Tried'}
                        </button>
                    </div>
                    <h2 className="text-2xl text-coffee-dark satisfy-regular">Description</h2>
                    <p className="text-coffee-dark sedan-regular">{description}</p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 p-5">
                    <h2 className="text-2xl text-coffee-dark satisfy-regular">Ingredients</h2>
                    <ul className="list-disc text-coffee-dark sedan-regular px-[2vw]">
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
                    <ol className="list-decimal text-coffee-dark sedan-regular px-[2vw]">
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
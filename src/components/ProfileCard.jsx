import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { MdFavorite, MdHistory } from "react-icons/md";

const ProfileCard = ({ fName, lName, favorites, tried, image }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const recipesToShow = selectedTab === 0 ? favorites : tried;

  return (
    <div className="w-full bg-coffee-cream rounded-lg">
      <div className="flex items-center p-4 py-[2vw] bg-coffee-cream">
        <Avatar src={image} alt={`${fName} ${lName}`} className="border-4 border-coffee-medium rounded-full" sx={{ width: 180, height: 180 }} />
        <h5 className="text-3xl px-[2vw] text-coffee-dark satisfy-regular">{fName} {lName}</h5>
      </div>

      {/* Tabs */}
      <div className="flex">
        <button
          className={`flex-1 flex flex-col items-center py-2 outline-none border-none focus:ring-0 ${
            selectedTab === 0
              ? 'text-coffee-green bg-coffee-cream border-b-4px border-coffee-green'
              : 'text-coffee-dark bg-coffee-cream hover:bg-coffee-light'
          }`}
          onClick={() => setSelectedTab(0)}
        >
          <MdFavorite className="text-2xl" />
          <span className="sedan-regular">Favorite Recipes</span>
        </button>
        <button
          className={`flex-1 flex flex-col items-center py-2 outline-none border-none focus:ring-0 ${
            selectedTab === 1
              ? 'text-coffee-green bg-coffee-cream border-b-4px border-coffee-green'
              : 'text-coffee-dark bg-coffee-cream hover:bg-coffee-light'
          }`}
          onClick={() => setSelectedTab(1)}
        >
          <MdHistory className="text-2xl" />
          <span className="sedan-regular">Tried Recipes</span>
        </button>
      </div>

      {/* List of Recipes */}
      <ul className="w-full py-5">
        {recipesToShow.map((recipe, index) => (
          <li key={index} className="border-t border-coffee-medium p-2 flex items-center">
            <img src="/Iced White Mocha.jpg" alt={recipe.title} className="w-14 h-14 rounded-full" />
            <span className="text-coffee-dark ml-4 sedan-regular">{recipe.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
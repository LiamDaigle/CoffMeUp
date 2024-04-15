import React, { useState } from "react";
import { Avatar } from "@mui/material";

const ProfileCard = ({ fName, lName, favorites, tried, image }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const recipesToShow = selectedTab === 0 ? favorites : tried;

  return (
    <div className="w-full bg-coffee-cream rounded-lg shadow-lg font-sedan">
      <div className="flex items-center p-4 bg-coffee-cream">
        <Avatar src={image} alt={`${fName} ${lName}`} className="border-4 border-coffee-medium rounded-full" sx={{ width: 90, height: 90 }} />
        <h5 className="ml-4 font-semibold text-lg text-coffee-medium font-satisfy">{fName} {lName}</h5>
      </div>

      {/* Tabs */}
      <div className="border-b border-coffee-medium">
        <div className="flex justify-center">
          <button className={`px-4 py-2 ${selectedTab === 0 ? 'text-coffee-dark bg-coffee-light' : 'text-coffee-medium bg-coffee-cream'}`} onClick={() => setSelectedTab(0)}>Favorite Recipes</button>
          <button className={`px-4 py-2 ${selectedTab === 1 ? 'text-coffee-dark bg-coffee-light' : 'text-coffee-medium bg-coffee-cream'}`} onClick={() => setSelectedTab(1)}>Tried Recipes</button>
        </div>
      </div>

      {/* List of Recipes */}
      <ul className="w-full">
        {recipesToShow.map((recipe, index) => (
          <li key={index} className="border-b border-coffee-medium p-2 flex items-center">
            <img src="/Iced White Mocha.jpg" alt={recipe.title} className="w-14 h-14 rounded-full" />
            <span className="text-coffee-dark ml-4">{recipe.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
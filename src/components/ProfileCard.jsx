import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Avatar, Tab, Tabs, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const ProfileCard = ({ fName, lName, favorites, tried, image }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const recipesToShow = selectedTab === 0 ? favorites : tried;

  return (
    <Card raised className="w-full max-w-lg bg-coffee-dark">
      <CardContent className="p-0">
      <Box className="p-4 text-center bg-coffee-dark">
          <Avatar src={image} alt={`${fName} ${lName}`} className="mx-auto border-4 border-[#A79277]" sx={{ width: 90, height: 90 }} />
          <Typography variant="h5" className="mt-2 font-semibold text-[#A79277]">{fName} {lName}</Typography>
        </Box>

        {/* Tabs */}
        <Box className="border-b border-[#D1BB9E]">
            <Tabs value={selectedTab} onChange={handleChange} centered className="text-[#A79277]">
                <Tab label="Favorite Recipes" className="hover:bg-[#EAD8C0] focus:bg-[#EAD8C0]" />
                <Tab label="Tried Recipes" className="hover:bg-[#EAD8C0] focus:bg-[#EAD8C0]" />
            </Tabs>
        </Box>

        {/* List of Recipes */}
        <List sx={{ width: '100%', backgroundColor: '#FFF2E1' }}>
          {recipesToShow.map((recipe, index) => (
            <ListItem key={index} className="border-b border-[#D1BB9E]">
              <ListItemAvatar>
                <CardMedia
                  component="img"
                  sx={{ width: 56, height: 56, borderRadius: '50%' }} // Assuming square images for recipes
                  image="/Iced White Mocha.jpg" // Static image path for demonstration
                  alt={recipe.title}
                />
              </ListItemAvatar>
              <ListItemText primary={recipe.title} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

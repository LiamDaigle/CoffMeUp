import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Avatar, Tab, Tabs, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const ProfileCard = ({ fName, lName, favorites, tried, image }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const recipesToShow = selectedTab === 0 ? favorites : tried;

  return (
    <Card raised className="w-full bg-coffee-dark rounded-lg">
        <CardContent className="p-0">
        <Box className="flex items-center p-4 bg-coffee-dark">
            <Avatar src={image} alt={`${fName} ${lName}`} className="border-4 border-coffee-medium rounded-full" sx={{ width: 90, height: 90 }} />
            <Typography variant="h5" className="ml-4 font-semibold text-coffee-medium">{fName} {lName}</Typography>
        </Box>

        {/* Tabs */}
        <Box className="border-b border-coffee-medium">
            <Tabs value={selectedTab} onChange={handleChange} centered className="text-coffee-medium">
            <Tab label="Favorite Recipes" className="hover:bg-coffee-light focus:bg-coffee-light" />
            <Tab label="Tried Recipes" className="hover:bg-coffee-light focus:bg-coffee-light" />
            </Tabs>
        </Box>

        {/* List of Recipes */}
        <List sx={{ width: '100%', backgroundColor: 'coffee-cream' }}>
            {recipesToShow.map((recipe, index) => (
            <ListItem key={index} className="border-b border-coffee-medium">
                <ListItemAvatar>
                <CardMedia
                    component="img"
                    sx={{ width: 56, height: 56, borderRadius: '50%' }} // Assuming square images for recipes
                    image="/Iced White Mocha.jpg" // Static image path for demonstration
                    alt={recipe.title}
                />
                </ListItemAvatar>
                <ListItemText primary={recipe.title} className="text-coffee-dark"/>
            </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
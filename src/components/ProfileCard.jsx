import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Avatar,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProfileCard = ({ fName, lName, favorites, tried, image }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const recipesToShow = selectedTab === 0 ? favorites : tried;

  return (
    <Card raised className="w-full max-w-lg bg-amber-50">
      <CardContent className="p-0">
      <Box className="p-4 text-center">
          <Avatar src={image} alt={`${fName} ${lName}`} className="mx-auto" sx={{ width: 90, height: 90 }} />
          <Typography variant="h5" className="mt-2">{fName} {lName}</Typography>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab label="Favorite Recipes" />
            <Tab label="Tried Recipes" />
          </Tabs>
        </Box>

        {/* List of Recipes */}
        <List sx={{ width: '100%' }}>
          {recipesToShow.map((recipe, index) => (
            <ListItem key={index}>
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

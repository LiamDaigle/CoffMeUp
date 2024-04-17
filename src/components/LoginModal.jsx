import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import constructProfile from '../components/constructProfile';
import addProfile from '../components/addProfile';
import addRecipe from '../components/addRecipe';
import constructRecipe from '../components/constructRecipe';

const LoginModal = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const loadData = () => {
        if(!firstName || !lastName){
            setErrorMessage("Please fill in all fields")
            return;
        }
        setErrorMessage("")
        localStorage.clear()
        
        addProfile(constructProfile(firstName, lastName, [], []))
        addRecipe(constructRecipe("Coffee", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["potatoe", "matata", "matatoe"], ["jump off the roof", "Die"], "5.0", false))
        addRecipe(constructRecipe("Iced Coffee", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["tnt", "cyanide", "covidVaccine"], ["do the chacha", "cook it up", "love yourself"], "4.7", false))
        addRecipe(constructRecipe("Mocha", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["matata", "matatoe"], ["jump off the roof", "have 3 kids"], "4.2", true))

        props.setter(false)
    }

    return <Dialog className="flex flex-col justify-center items-center" open={props.open} onClose={(event, reason) => {
        if(reason && reason === "backdropClick")
            return;
    }}>
        <DialogTitle >Login</DialogTitle>
        <DialogContent className="flex flex-col w-96 justify-between">
            <div className="flex flex-col justify-center items-center">
                <TextField onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" />
                <br></br>
                <TextField onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" />
                <br></br>
            </div>
            <Button onClick={loadData}>Login</Button>
            <Typography>{errorMessage}</Typography>
        </DialogContent>
    </Dialog>
}

export default LoginModal;
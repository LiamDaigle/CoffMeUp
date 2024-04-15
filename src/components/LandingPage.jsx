import React from "react";
import coffeeImage from '../assets/landingCoffee.png';
import 'boxicons'

const LandingPage = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById("posts");
        nextSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="h-[95vh] overflow-y-scroll w-screen bg-coffee-light text-coffee-cream pt-[15vh]">
            <div className="flex flex-col sm:flex-row gap-4 ">
                <div className="relative left-[10vw] text-[#86755f]">
                    <h1 className="text-7xl">CoffMeUp</h1>
                    <p className="text-5xl ml-[10vw]">Unleash your inner Barista!</p>
                    <p className="mt-[15vh] mr-[15vw]">Welcome to CoffMeUp, the ultimate coffee aficionado`s companion! Dive into a world where every sip tells a story. Discover unique coffee recipes from around the globe, rate your favorites, and share your thoughts with a community of coffee lovers just like you. Whether you`re a seasoned barista or a coffee novice, CoffMeUp is your passport to a world of flavor. Join us, and let`s brew something special together!</p>
                </div>

                <div className="w-full relative">
                    <div className="w-full h-full bg-[#A79277] rounded-full blur-[150px] z-0 absolute"></div>
                    <img src={coffeeImage} alt="Coffee" className="w-full z-30 sm:w-auto relative" />
                </div>
            </div>
            <div className="w-full flex justify-center mt-[15vh]">
                <div className="hover:cursor-pointer" onClick={scrollToNextSection}>
                    <box-icon name='chevron-down' size="lg" color="#A79277" className="cursor-pointer"></box-icon>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

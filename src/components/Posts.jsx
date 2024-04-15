import React from "react";
import Post from "./Post";

let posts = [
    {
        user: {
            name: 'Not Lyam Daigle',
            picture: 'src/assets/user.png'
        },
        timeSincePosting: '23 mins ago',
        photo: 'src/assets/post1.jpg',
        likes: 123,
        description: "I love sharing coffee with good company! It is a great way to start the day and to catch up with people you love! ",
        comments: [
            {
                user: {
                    name: 'Commenter Name 1',
                    picture: 'src/assets/user.png'
                },
                text: 'This is a comment. That comments a lot of stuff about great coffees'
            },
            // More comments...
        ]
    },
    {
        user: {
            name: 'Dylan Bagel',
            picture: 'src/assets/user.png'
        },
        timeSincePosting: '6 hours ago',
        photo: 'src/assets/post2.jpg',
        likes: 13,
        description: "I love coffee!",
        comments: [
            {
                user: {
                    name: 'Commenter Name 2',
                    picture: 'src/assets/user.png'
                },
                text: 'This is a comment.'
            },
            {
                user: {
                    name: 'Commenter Name 2',
                    picture: 'src/assets/user.png'
                },
                text: 'This is a comment.'
            },
            {
                user: {
                    name: 'Commenter Name 2',
                    picture: 'src/assets/user.png'
                },
                text: 'This is a comment.'
            },
            {
                user: {
                    name: 'Commenter Name 2',
                    picture: 'src/assets/user.png'
                },
                text: 'This is a comment.'
            },
            // More comments...
        ]
    },

]

const Posts = () => {
    return (
        <div className="h-screen w-screen flex justify-center bg-coffee-dark overflow-y-scroll text-coffee-cream pt-[10vh]">
            <div className="">
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Posts;

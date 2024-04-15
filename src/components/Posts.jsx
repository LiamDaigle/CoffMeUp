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
        comments: [
            {
                user: {
                    name: 'Commenter Name 1',
                    picture: 'url-to-commenter-picture-1'
                },
                text: 'This is a comment.'
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
        comments: [
            {
                user: {
                    name: 'Commenter Name 2',
                    picture: 'url-to-commenter-picture-2'
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

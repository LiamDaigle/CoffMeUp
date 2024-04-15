import React, { useState } from "react";

const Post = ({ post }) => {
    const { user, timeSincePosting, photo, likes, comments, description } = post;
    const [commentOpen, setCommentOpen] = useState(false)
    return (
        <div className="pb-12 grid post ">
            <div className="flex post-top items-center justify-between bg-coffee-light p-2 rounded-t-lg">
                <div className="flex items-center">
                    <img src={user.picture} alt={user.name} className="w-[69px] mr-2" />
                    <div className="text-xl text-black">{user.name}</div>
                </div>
                <div className="text-black">{timeSincePosting}</div>
            </div>

            <div className="relative post-bot ">
                <img src={photo} className="w-[45vw] rounded-bl-lg shadow-lg" alt="Post" />
                <div className="absolute bottom-0 left-0 p-2 text-md lg:text-xl bg-black w-full bg-opacity-[5%] shadow-lg flex">
                    <p className="mr-2 min-w-8">💖 {likes}</p>
                    <p className="ml-auto">{description}</p>
                </div>
                <div className="absolute bottom-[45%] right-0 cursor-pointer" onClick={() => setCommentOpen(!commentOpen)}>
                    <box-icon name={commentOpen ? 'chevron-left' : 'chevron-right'} size="lg" color="white"></box-icon>
                </div>
            </div>

            <div className={`${commentOpen ? '' : 'invisible'} post-comments border-coffee-medium h-full overflow-y-auto rounded-r-lg bg-coffee-light`}>
                {comments.map((comment, index) => (
                    <div key={index} className="p-2  text-black">
                        <div className="flex items-center">

                            <img src={comment.user.picture} className="w-[45px] mr-2" alt={comment.user.name} />
                            <div>{comment.user.name}</div>
                        </div>
                        <div className="pt-2 w-[15vw] text-justify">{comment.text}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Post;
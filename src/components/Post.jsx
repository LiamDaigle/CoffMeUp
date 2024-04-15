import React, { useState } from "react";

const Post = ({ post }) => {
    const { user, timeSincePosting, photo, likes, comments } = post;
    const [commentOpen, setCommentOpen] = useState(false)
    return (
        <div className="mb-12">
            <div className="flex items-center justify-between bg-coffee-light p-2 rounded-t-lg">
                <div className="flex items-center">
                    <img src={user.picture} alt={user.name} className="w-[69px] mr-2" />
                    <div className="text-xl text-black">{user.name}</div>
                </div>
                <div className="text-black">{timeSincePosting}</div>
            </div>
            <div className="flex">

                <div className="relative">
                    <img src={photo} className="w-[45vw]" alt="Post" />
                    <div className="absolute bottom-0 left-0 p-2">💖 {likes}</div>
                    <div className="absolute bottom-[45%] right-0 cursor-pointer" onClick={() => setCommentOpen(!commentOpen)}>
                        <box-icon name={commentOpen ? 'chevron-left' : 'chevron-right'} size="lg" color="white"></box-icon>
                    </div>
                </div>

                <div className="comments">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <img src={comment.user.picture} alt={comment.user.name} />
                            <div>{comment.user.name}</div>
                            <div>{comment.text}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Post;
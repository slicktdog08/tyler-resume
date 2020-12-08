import React from 'react';
import Feed from "react-instagram-authless-feed"


const Instagram = () => {
    return (
        <Feed userName="tyler_makes_websites" className="Feed" classNameLoading="Loading" limit="25"/>
    )
};

export default Instagram
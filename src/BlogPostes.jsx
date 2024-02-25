import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const BlogPostes = () => {

    const {id}=useParams()
    const loc =useLocation()
    return (
        <div>
          <h1> path id : {id}</h1>
          <h2>current Url ; {loc.pathname}</h2>
        </div>
    );
};

export default BlogPostes;
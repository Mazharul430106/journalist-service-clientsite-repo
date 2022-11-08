import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <h1>This is Blog Page</h1>
        </div>
    );
};

export default Blog;
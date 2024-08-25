import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsThunk } from '../features/Blog/blogThunk'; // Adjust path if necessary

const Project = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, error } = useSelector((state) => state.allBlog);

  useEffect(() => {
    dispatch(fetchBlogsThunk());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <img src={blog.image} alt={blog.title} />
        </div>
      ))}
    </div>
  );
};

export default Project;

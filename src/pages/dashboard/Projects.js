import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsThunk } from '../../features/Blog/blogThunk';
import { Link } from 'react-router-dom';
import Wrapper, {
  ImageCarousel,
  ArrowLeft,
  ArrowRight,
  CardContainer,
  Card,
  CardContent,
  CardImage,
} from '../../assets/wrappers/Project';
import Loading from '../../components/Loading';

function Projects() {
  const dispatch = useDispatch();
  const { blogs, isLoading, error } = useSelector((state) => state.allBlog);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [
    'https://res.cloudinary.com/debjnxbys/image/upload/v1724313325/greenrise/img1_zu2lqs.jpg',
    'https://res.cloudinary.com/debjnxbys/image/upload/v1724313325/greenrise/img2_dtadiq.jpg',
    'https://res.cloudinary.com/debjnxbys/image/upload/v1724313323/greenrise/img4_jsbdgk.jpg',
    'https://res.cloudinary.com/debjnxbys/image/upload/t_NTH/v1724315870/greenrise/IMG_3126_quiy7g.jpg',
    'https://res.cloudinary.com/debjnxbys/image/upload/c_crop,w_1218,h_685,ar_16:9/v1724315866/greenrise/6e24c834-5dc8-40fb-b885-6730ece33821_irmxsr.jpg',
  ];

  useEffect(() => {
    dispatch(fetchBlogsThunk());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log('blogs:', blogs);

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(blogs)) {
    console.error('blogs is not an array:', blogs);
    return <p>Error: Invalid blog data</p>;
  }

  return (
    <Wrapper className="page">
      <ImageCarousel>
        <ArrowLeft onClick={goToPreviousSlide}>❮</ArrowLeft>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        <ArrowRight onClick={goToNextSlide}>❯</ArrowRight>
      </ImageCarousel>

      <CardContainer>
        {blogs.map((blog, index) => {
          if (!blog) return null;
          return (
            <Card key={blog._id || blog.id || `blog-${index}`}>
              <Link to={`/blogs/${blog._id || blog.id}`}>
                <CardImage src={blog.image || 'placeholder-image-url.jpg'} alt={blog.title || 'Blog post'} />
                <CardContent>
                  <p className="card__title">{blog.title || 'Untitled'}</p>
                  <p className="card__description">
                    {typeof blog.description === 'string'
                      ? blog.description
                      : blog.description?.summary || 'No description available'}
                  </p>
                  <p className="card__read-more">Read More</p>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </CardContainer>
    </Wrapper>
  );
}

export default Projects;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBlogThunk } from '../../features/Blog/blogThunk';
import Wrapper, {
  Card,
  Header,
  Title,
  AuthorInfo,
  Image,
  Content,
  Section,
  SectionTitle,
  SectionSubHeading,
  SectionDescription,
  ReferenceLink
} from '../../assets/wrappers/SinglePost';

import Loading from '../../components/Loading';

function SinglePost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleBlog, isLoading, error } = useSelector((state) => state.allBlog);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlogThunk(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  if (!singleBlog || !singleBlog.blog) return <p>No blog found!</p>;

  const blog = singleBlog.blog;

  return (
    <Wrapper>
      <Card>
        <Header>
          <Title>{blog.title}</Title>
          <AuthorInfo>
            {blog.createdAt && `Published: ${new Date(blog.createdAt).toLocaleDateString()}`}
          </AuthorInfo>
        </Header>
        {blog.image && <Image src={blog.image} alt={blog.title} />}
        <Content>
          {Array.isArray(blog.sections) && blog.sections.map((section) => (
            <Section key={section._id}>
              {section.subTitle && <SectionTitle>{section.subTitle}</SectionTitle>}
              {section.subHeading && <SectionSubHeading>{section.subHeading}</SectionSubHeading>}
              {section.description && <SectionDescription>{section.description}</SectionDescription>}
            </Section>
          ))}
          {Array.isArray(blog.referance) && blog.referance.length > 0 && (
            <Section>
              <SectionTitle>References</SectionTitle>
              {blog.referance.map((reference) => (
                <ReferenceLink key={reference._id}>
                  {reference.title && <span>{reference.title} </span>}
                  <a href={reference.url} target="_blank" rel="noopener noreferrer">
                    {reference.url}
                  </a>
                  <br />
                </ReferenceLink>
              ))}
            </Section>
          )}
        </Content>
      </Card>
    </Wrapper>
  );
}

export default SinglePost;
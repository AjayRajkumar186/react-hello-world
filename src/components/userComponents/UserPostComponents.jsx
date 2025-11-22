import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCardComponents from './UserCardComponents'
import HeaderComponents from '../layouts/headerComponents/HeaderComponents';
import FooterComponents from '../layouts/footerComponents/FooterComponents';
import './UserComponents.css'

const UserPostComponents = () => {

  const [allPosts, setAllPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);


  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setAllPost(response.data)
      } catch (error) {
        console.log(error);

      }
    }
    fetchData()
    console.log("hello Ajay");

  }, [])


  const fetchPosts = async () => {

    if (allPosts.length === 0) {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setAllPosts(response.data)
    }
    setVisibleCount((prev) => prev + 1)
  }

  const clearePost = () => {
    setAllPosts([])
    setVisibleCount(0)
  }

  return (
    <div className='post-container'>
      <HeaderComponents />
      <div className='post-btn'>
        <button className='btn-post' onClick={fetchPosts}>Click Me</button>&nbsp;&nbsp;
        <button className='btn-post' onClick={clearePost}>Cleare</button>
      </div>


      <article>
        <div className='card-box'>
          {allPosts.slice(0, visibleCount).map((post) => (
            <div key={post.id}>
              <p>{post.id}. {post.title}</p>
            </div>

          ))}
        </div>
      </article>
      <hr />

      <article>
        <div className='card-box'>
          {allPost.slice(0, 10).map((post) => (
            <div key={post.id}>
              <p>{post.id}. {post.title}</p>
            </div>
          ))}
        </div>

      </article>


      {/* <UserCardComponents key={post.id} post={post}/> */}
      <FooterComponents />
    </div>
  );
};

export default UserPostComponents
import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/listEditor/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setPosts(data);
    };

    fetchData();
  }, [setPosts]);

  // ...rest of your code...

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ color: 'black', backgroundColor: 'white' }} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
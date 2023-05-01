import axios from 'axios';
import { useEffect, useState } from 'react';
import usePosts from './hooks/usePosts';




const PostList = () => {
  const [userId, setUserId] = useState<number>()
  const { data: posts, isLoading, error} = usePosts(userId)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUserId(Number(event.target.value))}
        value={userId}
        className="form-select mb-3">
        <option value="">Select user</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
    </select>
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
    </>
  );
};

export default PostList;

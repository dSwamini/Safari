import React, { useEffect, useState } from 'react';
//css
import PostCard from './PostCard'
import { useNavigate } from 'react-router-dom';

export default function AllPosts() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem("jwt");
    // if (!token) {
    //   navigate("./signin");
    // }

    
    // Fetching all posts
    fetch("http://localhost:5000/allposts", {
      
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer "+localStorage.getItem("jwt")
      },
    }).then(res => res.json)
      .then(result => setData(result))
      .catch(err => console.log(err))
    
    
  }, []);

  return(
    <div className="home">
      {/* {data.posts.map((posts) => {
        return (
          <h2>{posts.body}</h2>
        )
      })} */}
      {
        data ? 
          data.map(posts => {
            console.log(posts.body)
          }) :
          null
      }
    </div>
  );
}

// export class AllPosts extends PureComponent {
//   render() {
//     return (
//       <div>AllPosts</div>
//     )
//   }
// }

// export default AllPosts
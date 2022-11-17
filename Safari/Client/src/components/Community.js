import React from "react";
import {NavLink} from "react-router-dom";
import "./Community.css";
import { useEffect, useState } from "react";

//18:30
//bODY ==> cAPION

export default function Community() {
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {

    if (url) {
      fetch("http://localhost:5000/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          body,
          pic: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            window.alert("Add all fields");
          } else {
            window.alert("Posted Successfully");
        }})
        .catch(err => console.log(err))
    }

    
  }, [url])

  //post image to cloudinary
  const postDetails = () => {
    console.log(body, image);
    const data = new FormData();
    data.append("file", image)
    data.append("upload_preset", "community")
    data.append("cloud_name", "nsj")
    fetch("https://api.cloudinary.com/v1_1/nsj/image/upload",
      {
        method: "post",
        body: data
        
      }).then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err))
    }
    
    //Saving Post to MongoDB
    // fetch("http://localhost:5000/createPost", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer "+localStorage.getItem("jwt")
    //   },
    //   body: JSON.stringify({
    //     body,
    //     pic: url
    //   })
    // }).then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
    
  // }
  

  const loadfile = (event) => {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src) // free memory

    }
  }
  return (
    <div className="createPost">
      <div className="post-header">
        <h4 style={{ margin: "3px auto" }}>
          Create New Post
        </h4>
        <button id="post-btn" onClick={() => { postDetails() }}>Share</button>
        
      </div>
      <div className="main-div">
        <img id="output" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" />
        <input type="file" accept="image/*" onChange={(event) => {
          loadfile(event);
          setImage(event.target.files[0])
        }} />
      </div>

      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chris_Evans_-_Captain_America_2_press_conference_%28cropped%29.jpg/640px-Chris_Evans_-_Captain_America_2_press_conference_%28cropped%29.jpg"/>

          </div>
          <h5>Chris Evans</h5>
        </div>
        <textarea value={body} onChange={(e) => {
          setBody(e.target.value)
        }} type="text" placeholder="write a caption"></textarea>
      </div>

    </div>
  );
}
  
// const Community = () => {
//   const [body, setBody] = useState("")
//   const [image, setImage] = useState("")
//   const [url, setUrl] = useState("")

//   //post image to cloudinary
//   const postDetails = () => {
//     console.log(body, image);
//     const data = new FormData();
//     data.append("file", image)
//     data.append("upload_preset", "community")
//     data.append("cloud_name", "nsj")
//     fetch("https://api.cloudinary.com/v1_1/nsj/image/upload",
//       {
//         method: "post",
//         body: data
        
//       }).then(res => res.json())
//       .then(data => console.log(data))
//       .catch(err => console.log(err))
//   }
    
//     //Saving Post to MongoDB
//     fetch("http://localhost:5000/createPost", {
//       method: "post",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify({
//         body, 
//         pic:url
//       })
//     }).then(res => res.json())
//       .then(data => setUrl(data.url))
//     .catch(err=>console.log(err))
    
  
  

//   const loadfile = (event) => {
//     var output = document.getElementById('output');
//     output.src = URL.createObjectURL(event.target.files[0]);
//     output.onload = function () {
//       URL.revokeObjectURL(output.src) // free memory

//     }
//   }
//   return (

//     <div className="createPost">
//       <div className="post-header">
//         <h4 style={{margin: "3px auto"}}>
//           Create New Post
//         </h4>
//         <button id="post-btn" onClick={() => {postDetails()}}>Share</button>
        
//       </div>
//       <div className="main-div">
//         <img id ="output" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"/>
//         <input type="file" accept="image/*" onChange={(event) => {
//           loadfile(event);
//           setImage(event.target.files[0])
//         }} />
//       </div>

//       <div className="details">
//         <div className="card-header">
//           <div className="card-pic">
//             {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chris_Evans_-_Captain_America_2_press_conference_%28cropped%29.jpg/640px-Chris_Evans_-_Captain_America_2_press_conference_%28cropped%29.jpg"/> */}

//           </div>
//           <h5>Chris Evans</h5>
//         </div>
//         <textarea value={body} onChange={(e) => { 
//           setBody(e.target.value)
//         }} type="text" placeholder="write a caption"></textarea>
//       </div>

//     </div>
//   );
// }

// export default Community
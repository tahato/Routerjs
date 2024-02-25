import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./App.css";
import { Link } from "react-router-dom";


function App() {
  let postes =[
    {
      id:1,
     titre:"first poste",
     content:"this the first content hello",
        },
    {
      id:2,
     titre:"second poste",
     content:"this the second content hello",
        },
    {
      id:3,
     titre:"third poste",
     content:"this the third content hello",
        },
    {
      id:1,
     titre:"fourth poste",
     content:"this the fourth content hello",
        },

  ]
  
  return (
    <>
    <h1>Blog Postes</h1>
    <ul>
    {postes.map((post)=>(
<li>
  <Link to={`/Blog/${post.id}`}>{post.titre}</Link>
</li>
    ))}</ul>
    </>
  );
}

export default App;

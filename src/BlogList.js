import React from 'react';

export default function BlogList({bloglar,baslik,handleClick}) {
  

  return (
    <div className="blog-list">
      <h2 style={{color:'#F66B0E'}}>{baslik}</h2>
      {bloglar && bloglar.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.ad}</h2>
          <p>Yazının Yazarı: {blog.yazar}</p>
          <button className="delete-button" onClick={()=>handleClick(blog.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
}

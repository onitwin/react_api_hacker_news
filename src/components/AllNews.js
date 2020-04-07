import React ,{Component} from 'react'


const AllNews =(props)=>{
    const commentNodes = props.news.map(comment =>{
      return (
        <li author= {comment.by} key={comment.id}>{comment.title}</li>
      );
    });
    return (
      <div>
      {commentNodes}
      </div>
    );
}



export default AllNews;

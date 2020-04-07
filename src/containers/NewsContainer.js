import React, {Component} from 'react';
import AllNews from "../components/AllNews"

class NewsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      news:[],
      completeLinks:[],
      finalisedApi:[]

    }
    this.newsSplice=this.newsSplice.bind(this);
    this.finalApiInfo=this.finalApiInfo.bind(this);
  }

  componentDidMount(){
    const url="https://hacker-news.firebaseio.com/v0/topstories.json"


    fetch(url)
    .then(res=> res.json())
    .then(newsApi=>this.setState({news:newsApi}))
    .catch(err=>console.error)
  }

  newsSplice(){
    let filteredNews=this.state.news.splice(10,15)
    let options=filteredNews.map(article=>{
      this.state.completeLinks.push(`https://hacker-news.firebaseio.com/v0/item/${article}.json`)
      })
    }

  finalApiInfo(){
    for (let i=0;i<10;i++){
      fetch(this.state.completeLinks[i])
      .then(res=> res.json())
      .then(newFetch=>this.state.finalisedApi.push(newFetch))
      .catch(err=>console.error)

    }
  }



    render(){
      this.newsSplice()
      this.finalApiInfo()

      return(
        <div>
        <AllNews news={this.state.finalisedApi}/>
        </div>

      )
    }
  }


  export default NewsContainer;

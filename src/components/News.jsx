import { Component } from 'react'
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let data = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=f4bea4030d2e4ec6a7493e3475ca116b")
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

  }

  render() {
    let { pageTitle } = this.props
    return (
      <div className='mx-5 my-4'>
        <h1 className='text-3xl font-semibold text-center'>NewsWave - {pageTitle}</h1>
        <div className='flex flex-wrap justify-center space-x-2 my-2'>
          {this.state.articles.map(({ title, description, url, urlToImage }) => {
            return <NewsItem key={url}
              title={title}
              imgUrl={urlToImage ? urlToImage : "https://images.unsplash.com/photo-1614028480987-73081d86a38b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}
              description={description}
              newsUrl={url}
            />
          })}
        </div>
      </div>
    )
  }
}

// News.PropTypes = {pageTitle:String}
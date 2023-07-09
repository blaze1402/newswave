import { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

  static propTypes = { pageTitle: PropTypes.string.isRequired, pageSize: PropTypes.number.isRequired, country: PropTypes.string.isRequired, category: PropTypes.string.isRequired }

  static defaultProps = { pageTitle: "Top Headlines", pageSize: 8, country: "in", category: "general" }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews() {
    this.setState({ loading: true })
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4bea4030d2e4ec6a7493e3475ca116b&page=${this.state.page}&pageSize=${this.props.pageSize}`)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  async componentDidMount() {
    this.updateNews()
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }

  render() {
    return (
      <div className='bg-gray-300 px-5 py-4'>
        <h1 className='text-3xl font-semibold text-center'>NewsWave - {this.props.pageTitle}</h1>
        {this.state.loading && <Spinner />}
        <div className='flex flex-wrap justify-center space-x-2 my-2'>
          {!this.state.loading && this.state.articles.map(({ title, description, url, urlToImage, author, publishedAt, source }) => {
            return <NewsItem key={url}
              title={title}
              imgUrl={urlToImage ? urlToImage : "https://images.unsplash.com/photo-1614028480987-73081d86a38b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}
              description={description}
              newsUrl={url}
              author={author}
              date={publishedAt}
              source={source}
            />
          })}
        </div>
        <div className='flex justify-around'>
          <button disabled={this.state.page <= 1} type='button' onClick={this.handlePrevClick} className='disabled:bg-gray-500 bg-gray-900 py-2 px-4 rounded text-white hover:bg-gray-800'>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' onClick={this.handleNextClick} className='disabled:bg-gray-500 bg-gray-900 py-2 px-4 rounded text-white hover:bg-gray-800'>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
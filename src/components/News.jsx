import { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  static propTypes = { pageSize: PropTypes.number.isRequired, country: PropTypes.string.isRequired, category: PropTypes.string.isRequired }

  static defaultProps = { pageSize: 8, country: "in", category: "general" }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async updateNews() {
    this.setState({ loading: true })
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  async componentDidMount() {
    this.updateNews()
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    this.setState({ loading: true })
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
    let parsedData = await data.json()
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false })
  }

  render() {
    return (
      <div className='bg-gray-300 px-5 py-4'>
        <h1 className='text-3xl font-semibold text-center'>NewsWave - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>That&apos;s all the news we have right now.</b>
            </p>
          }>
          <div className='flex flex-wrap justify-center space-x-2 my-2'>
            {this.state.articles.map(({ title, description, url, urlToImage, author, publishedAt, source }) => {
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
        </InfiniteScroll>
      </div>
    )
  }
}
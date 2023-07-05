import { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {imgUrl, title, description} = this.props
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md w-64 my-2">
            <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    )
  }
}

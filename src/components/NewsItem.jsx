/* eslint-disable react/prop-types */
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {

    static proptypes = { imgUrl: PropTypes.string.isRequired, title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, newsUrl: PropTypes.string.isRequired }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-white rounded-lg overflow-hidden shadow-md w-64 my-2">
                <a href={this.props.newsUrl} target='_blank' rel='noreferrer'>
                    <img src={this.props.imgUrl} alt={this.props.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{this.props.title}</h3>
                        <p className="text-gray-700">{this.props.description}</p>
                    </div>
                </a>
            </div>
        )
    }
}


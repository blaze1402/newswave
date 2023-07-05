import { Component } from 'react'
import logo from '/logo.svg'

export class Navbar extends Component {
  render() {
    return (
      <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold flex">
        <img className='mx-2' src={logo} width="30px"/>
        NewsWave</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/categories" className="text-white hover:text-gray-300">Categories</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar
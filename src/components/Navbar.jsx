import { Component } from 'react'
import logo from '/logo.svg'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="bg-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <div className="text-white text-2xl font-bold flex">
              <img className='mx-2' src={logo} width="30px" />
              NewsWave</div>
          </Link>
          <ul className="flex">
            <li>
              <Link to="/" className="py-3 px-2 text-white hover:text-gray-300">Home</Link>
            </li>
            <li className="relative group">
              <Link className="py-3 px-2 text-white hover:text-gray-300">Categories</Link>
              <ul className="absolute hidden mt-2 w-48 bg-gray-800 text-white rounded-lg z-10 group-hover:block">
                <Link to="/business"><li className="py-2 px-4 hover:text-gray-300">Business</li></Link>
                <Link to="/entertainment"><li className="py-2 px-4 hover:text-gray-300">Entertainment</li></Link>
                <Link to="/health"><li className="py-2 px-4 hover:text-gray-300">Health</li></Link>
                <Link to="/science"><li className="py-2 px-4 hover:text-gray-300">Science</li></Link>
                <Link to="/sports"><li className="py-2 px-4 hover:text-gray-300">Sports</li></Link>
                <Link to="/technology"><li className="py-2 px-4 hover:text-gray-300">Technology</li></Link>
              </ul>
            </li>
            <li>
              <Link to="/about" className="py-3 px-2 text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="py-3 px-2 text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
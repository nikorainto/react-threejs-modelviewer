import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  return (
    <div id="home">
      <h1 style={{ margin: 10, color: '#eee' }}>Demos</h1>
      <ul>
        <li className="demo-item" onClick={() => history.push('/room')}>
          Room
        </li>
        <li className="demo-item" onClick={() => history.push('/helmet')}>
          Helmet (Takes long to load)
        </li>
        <li className="demo-item" onClick={() => history.push('/shoe')}>
          Shoe (Takes super long to load)
        </li>
      </ul>
    </div>
  )
}

export default Home

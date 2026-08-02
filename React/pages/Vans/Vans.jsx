import React from 'react'

const Vans = () => {
  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => console.log(data.vans))
  }, [])

  return (
    <div className="van-list-container">
      <div className="van-list">
        <div className="van-title">
          <img src={"https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"} alt="alt" />
          <div className="van-info">
            <a href="" className="van-title">Beach Bum</a>
          </div>
          <button className='van-type simple'>Simple</button>
        </div>
      </div>
    </div>
  )
}

export default Vans
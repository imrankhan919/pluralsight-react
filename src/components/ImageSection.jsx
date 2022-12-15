import React from 'react'
import Main from "../images/main.png"

function ImageSection() {
  return (
    <div className="image-section">
    <img src={Main} alt="" />
    <button className="try-btn">Try for Free</button>
  </div>
  )
}

export default ImageSection
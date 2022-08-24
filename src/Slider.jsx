import React from 'react'
import './slider.css'

function Slider() {
  return (
    <>
    <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        className="d-block w-100"
        src="https://img.freepik.com/free-vector/flat-tropical-leaves-background_23-2148953892.jpg?w=1060&t=st=1661082549~exp=1661083149~hmac=630f9aa35b6c1934cb5e0d67b1cfe5bb059c8eecdf77a64c832858aa09ea09bf"
        alt="First slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://img.freepik.com/free-psd/realistic-tropical-plants-floral-concept_24972-1951.jpg?w=1380&t=st=1661082513~exp=1661083113~hmac=01669f8073d101ab130a403c8dcfb4827c6cd5fe45ab8adc6dc912fbda49ad3e"
        alt="Second slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://img.freepik.com/free-vector/gradient-summer-background-videocalls_23-2148966480.jpg?w=1060&t=st=1661082531~exp=1661083131~hmac=d99a0d525643c9f7a0cc6414a39afe4d67132ce63e427d75a93d95ce2a5b352c"
        alt="Third slide"
      />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    
    </>
  )
}

export default Slider
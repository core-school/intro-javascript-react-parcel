import React from "react";

export const Hero = () => (
  <div style={{ border: "1px solid red" }}>
    <div
      id="carouselExampleIndicators"
      style={{ width: "100%", height: 200, overflow:"hidden"}}
      className="carousel slide"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner"  style={{userSelect:"none", pointerEvents:"none"}}>
        <div className="carousel-item active">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/1b/f4/64/09/aerial-view.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg"
            className="d-block w-100"
            alt="..."
           
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.caribbeannewsdigital.com/sites/default/files/2020-07/bahamas.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

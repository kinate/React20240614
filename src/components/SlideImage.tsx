function Images() {
  const images = [
    {
      id: "1",
      link: "https://www.stockvault.net/data/2016/03/03/185838/preview16.jpg",
    },
    {
      id: "2",
      link: "https://www.stockvault.net/data/2020/01/18/272604/preview16.jpg",
    },
    {
      id: "3",
      link: "https://www.stockvault.net/data/2020/01/25/272807/preview16.jpg",
    },
  ];

//   carousel-item active

  return images.map((image) => (
    <div className={image.id==='1'? 'carousel-item active': 'carousel-item'} key={image.id}>
      <img
        key={image.id}
        src={image.link}
        className="d-block w-100"
        alt="..."
        style={{height:'200px'}}
      />
    </div>
  ));
}

export default function SlideImage() {
  return (
    <>
      <div id="carouselExample" className="carousel slide" style={{paddingTop:'30px'}}>
        <div className="carousel-inner"><Images/></div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

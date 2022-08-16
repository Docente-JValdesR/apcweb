import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
export default function Carousel() {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade h-50" data-bs-ride="carousel">
    <div class="carousel-inner" >
      <div class="carousel-item active" >
        <img src={carousel1} class="d-block w-100" height={"600px"} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>

      </div>
      <div class="carousel-item">
        <img src={carousel2} class="d-block w-100" height={"600px"} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </div>
      <div class="carousel-item">
        <img src={carousel3} class="d-block w-100" height={"600px"} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>

      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

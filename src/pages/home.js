import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Noticias from "../components/Noticias";
import ContacForm from "../components/ContactForm";
export default function home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Carousel />
      <Noticias />
      <ContacForm />
    </div>
  );
}

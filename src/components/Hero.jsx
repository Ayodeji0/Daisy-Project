/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import hero1 from "../assets/perf1.jpg";
import hero2 from "../assets/perf2.jpg";
import hero3 from "../assets/perf3.jpg";
import hero4 from "../assets/perf4.jpg";

const carousalImage = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
            The way you smell is our business.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8">
            Indulge in our captivating collection of exquisite fragrances.
            Discover the allure of pure elegance and enchanting scents that
            embody opulence. Embrace radiance with our carefully curated
            perfumes...
          </p>
          <div className="mt-10 ">
            <Link to="products" className="btn btn-primary ">
              Our Products
            </Link>
          </div>
        </div>
        <div className="hidden lg:carousel carousel carousel-center h-[28rem] p-4 space-x-4 bg-neutral rounded-box">
          {carousalImage.map((image) => {
            return (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;

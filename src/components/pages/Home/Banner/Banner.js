import React from "react";
import { Carousel } from "react-bootstrap";
import carImg1 from "../../../../asset/Images/carouselImg/caroImg-1.jpg";
import carImg2 from "../../../../asset/Images/carouselImg/caroImg-2.jpg";
import carImg3 from "../../../../asset/Images/carouselImg/caroImg-3.jpg";
import "tw-elements";

const Banner = () => {
  return (
    <div className="">
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative component max-w-screen-lg"
        data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"></button>
        </div>

        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src={carImg1}
              class="block w-full h-[400px]"
              alt="Motorbike Smoke"
            />
            <div class="carousel-caption hidden md:block absolute text-center bg-gradient-to-b  from-[#E7E7E7] to-[#f3f3f3] rounded-md">
            <h5 class="text-3xl font-bold text-primary">Create your<span className="text-orange-500"> Perfect Smile</span></h5>
              
            </div>
          </div>

          <div class="carousel-item relative float-left w-full">
            <img
              src={carImg2}
              class="block w-full h-[400px]"
              alt="Mountaintop"
            />
            <div class="carousel-caption hidden md:block absolute text-center bg-gradient-to-b  from-[#ebe5dd] to-[#ebe2d5] rounded-md">
            <h5 class="text-3xl font-bold text-primary">I use<span className="text-orange-500"> best equipment</span>  in market</h5>
              
            </div>
          </div>

          <div class="carousel-item relative float-left w-full">
            <img
              src={carImg3}
              class="block w-full h-[400px]"
              alt="Woman Reading a Book"
            />
            <div class="carousel-caption hidden md:block absolute text-center bg-gradient-to-b  from-[#EAD4B2] to-[#cab088]  rounded-md">
              <h5 class="text-3xl font-bold text-primary">Only <span className="text-orange-500">Quality</span> Dental Care</h5>
              
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev">
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next">
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;

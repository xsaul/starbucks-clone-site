import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GiftCardsSlider({sectionName, cardImg1, cardImg2,cardImg3, cardImg4, cardImg5}) {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500
  };

  return (
    <section>
    <h1 className="font-bold text-xl tracking-wider ml-[3rem]">{sectionName}</h1>
        <Slider {...settings} className="mt-[2.2rem] pl-[2.8rem] pt-[3rem] gap-x-[0.5rem]">
          <div className="!w-[85%] h-[15rem] rounded-md">
            <img className="rounded-xl" src={cardImg1} alt="card-picture" />
          </div>
          <div className="!w-[85%] h-[10rem] rounded-md">
            <img className="rounded-xl" src={cardImg2} alt="card-picture" />
          </div>
          <div className="!w-[85%] h-[10rem] rounded-md">
            <img className="rounded-xl" src={cardImg3} alt="card-picture" />
          </div>
          <div className="!w-[85%] h-[10rem] rounded-md">
            <img className="rounded-xl" src={cardImg4} alt="card-picture" />
          </div>
          <div className="!w-[85%] h-[10rem] rounded-md">
            <img className="rounded-xl" src={cardImg5} alt="card-picture" />
          </div>
        </Slider>
        </section>
  )
}

export default GiftCardsSlider
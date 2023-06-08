import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tourmyindia.com/blog/wp-content/uploads/2020/11/Feature-City-Palace-Udaipur-Rajasthan.jpg"
          alt="Udaipur"
          style={{height:"450px", zIndex:"-1"}}
        />
        <Carousel.Caption>
          <h3 className='caption-head bg-#adb5bd text-light'>Udaipur, Rajasthan</h3>
          <p className='caption-para'>The city of Lakes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/498683275/photo/tea-time.jpg?s=612x612&w=0&k=20&c=M0bq4cgRMMbUuXeeQrlR9QOxx4UTP27o3-Cu6xhs6WI="
          alt="Darjeeling"
          style={{height:"450px"}}
        />

        <Carousel.Caption>
          <h3 className='caption-head'>Darjeeling, West Bengal</h3>
          <p className='caption-para'>Queen of the Himalayas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/01/95/88/12/360_F_195881213_oJTdvdKp1g5vzyt8XJ7o4GYKnAD8Q0o4.jpg"
          alt="Manali"
          style={{height:"450px"}}
        />

        <Carousel.Caption>
          <h3 className='caption-head'>Manali, Himachal Pradesh</h3>
          <p className='caption-para' style={{color:"lightblue"}}>
            The valley of the Gods
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
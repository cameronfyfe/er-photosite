import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GalleryView.css';
import { XButton } from '../../components';

const GalleryView = ({
  children,
  initialIndex,
  closeGallery,
  onLoad,
  onSlideChange,
}) => {

  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      onLoad();
    }, 100);
  });

  return (
    <React.Fragment>
      <Slider ref={sliderRef}
              dots={false}
              arrows={false}
              draggable={true}
              swipe={true}
              infinite={true}
              speed={750}
              variableWidth={true}
              centerMode={true}
              slidesToShow={1}
              slidesToScroll={1}
              initialSlide={initialIndex}
              beforeChange={onSlideChange}
      >
        {React.Children.toArray(children).map((c, i) => React.cloneElement(c, {
          ...c.props, onClick:() => sliderRef.current?.slickGoTo(i)
        }))}
      </Slider>
      <XButton className="gallery-x-btn" width={40} height={40} onClick={closeGallery} />
    </React.Fragment>
  );
}
  
export default GalleryView;
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GalleryItem, GalleryItemProps, GalleryItemSize } from './GalleryItem'
import { Flex, HStack, Box } from '@chakra-ui/layout'
import Image from 'next/image'
import { relative } from "path/posix";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slide-button"
      style={{ ...style, display: "block", right: "-50px" }}
      onClick={onClick}
    >
        <img
          src="/assets/gallery/arrow-right.svg"
          width={30}
          height={40}
          alt="arrow right"
        />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slide-button"
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    >
      <img
        src="/assets/gallery/arrow-left.svg"
        width={30}
        height={40}
        alt="arrow left"
      />
    </div>
  );
}

  export default function CustomArrows({items, settingsFrom, size = "sm", showTransparentPod = false, width, otherSlider, setSlider}) {
    const settings = {
      ...settingsFrom,
      arrows: true,
      autoplay: true,
      draggable: true,
      swipe: true,
    // speed: 500,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{width: width, position: "relative"}}>
        <Slider 
          {...settings}
          asNavFor={otherSlider}
          ref={slider => (setSlider(slider))}>
          {items.map((item) => (
            <GalleryItem key={item.image} size={size} {...item} />
          ))}
        </Slider>
        {showTransparentPod && (
        <Box
          position="absolute"
          left="50%"
          top="-42%"
          transform="translateX(-50%)"
          width={392}
          height={533}
        >
          <Image
            src="/assets/pods/transparent-pod.png"
            alt="transparent pod"
            width={392}
            height={533}
          />
        </Box>
      )}
      </div>
    );
  }

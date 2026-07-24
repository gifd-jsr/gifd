"use client";
import Masonry from "@/components/Masonry/page";
import { MasonryItems } from "@/types";
import React, { useState } from "react";

const Classes = () => {
  // const [items] = useState<MasonryItems[]>([
  //   { id: 1, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 2, img: "/images/student-2.jpg", url: "", height: 1000 },
  //   { id: 3, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 4, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 5, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 6, img: "/images/gallery-banner-2.png", url: "", height: 400 },
  //   { id: 7, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 8, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 9, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 10, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 11, img: "/images/student-2.jpg", url: "", height: 1000 },
  //   { id: 12, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
  //   { id: 13, img: "/images/student-1.jpg", url: "", height: 1000 },
  // ]);
  const [items] = useState<MasonryItems[]>([
    { id: 1, img: "/images/class/1.jpg", url: "", height: 600 },
    { id: 2, img: "/images/class/3.jpg", url: "", height: 1000 },
    { id: 3, img: "/images/class/7.jpg", url: "", height: 600 },
    { id: 4, img: "/images/class/8.jpg", url: "", height: 600 },
    {
      id: 5,
      img: "/images/class/9.jpeg",
      url: "",
      height: 300,
    },
    {
      id: 6,
      img: "/images/class/10.jpeg",
      url: "",
      height: 1000,
    },
    {
      id: 7,
      img: "/images/class/11.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 8,
      img: "/images/class/12.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 9,
      img: "/images/class/13.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 10,
      img: "/images/class/14.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 11,
      img: "/images/class/16.jpeg",
      url: "",
      height: 1000,
    },
    {
      id: 12,
      img: "/images/class/17.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 13,
      img: "/images/class/18.jpeg",
      url: "",
      height: 1000,
    },
    {
      id: 14,
      img: "/images/class/19.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 15,
      img: "/images/class/20.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 16,
      img: "/images/class/21.jpeg",
      url: "",
      height: 400,
    },
    {
      id: 17,
      img: "/images/class/22.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 18,
      img: "/images/class/23.jpeg",
      url: "",
      height: 600,
    },
    {
      id: 19,
      img: "/images/class/24.jpeg",
      url: "",
      height: 600,
    },
  ]);
  return (
    <div className="">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default Classes;

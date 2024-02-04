import React from "react";
import { Card } from "flowbite-react";

export default function CardProductDetail({ image, title, deescription }) {
  return (
    <>
      <Card
        className='max-w-sm'
        imgAlt='Meaningful alt text for an image that is not purely decorative'
        imgSrc={image ? image : "/src/assets/Iwatch.jpg"}>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title ? title : "Unknow"}
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          {deescription ? deescription : "Unknow"}
        </p>
      </Card>
    </>
  );
}

/*
 * Image Carousel
 * It is the image carousel component for the landing page.
 * It uses framer-motion for the animation.
 * The images are stored in AWS S3. The image name should be in the format of
 * 1.jpg, 2.jpg, etc.
 * The maxNum is the number of images in the carousel, and if it is 5, then
 * it will look for 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg
 *
 *
 * When a user drag the image, the movement will stop now.
 * The movement still needs improvement. It should start moving from the very first image.
 */
"use client";

import { motion, useAnimation } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const baseUrl = 'https://mannasunevents-images.s3.us-west-2.amazonaws.com/landing-page-carousel-images';

const ImageCarousel = ({ maxNumImages }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const boxRef = useRef(null);
  const imageRef = useRef(null);
  const imageList = Array.from(
    { length: maxNumImages }, (_, i) => `${baseUrl}/${i + 1}.jpg`
  )

  useEffect(() => {
    if (currentSlide < maxNumImages) {
      controls.start({
        x: -1 * currentSlide * imageRef.current.offsetWidth,
        transition: { duration: 0.8 }
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (hasInteracted) {
        // If the user has ever interacted, do nothing
        return;
      }
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + 1;
        if (nextSlide >= maxNumImages - boxRef.current.offsetWidth / imageRef.current.offsetWidth - 4) {
          return 0;
        }
        return nextSlide;
      });
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(timer);
  }, [hasInteracted]);

  return (
    <div
      ref={boxRef}
      className='flex w-full justify-center px-10 my-10 overflow-x-hidden'
    >
      <motion.div
        className='flex justify-center'
        drag='x'
        animate={controls}
        dragConstraints={boxRef}
        whileTap={{ cursor: 'grabbing' }}
        onDragStart={() => setHasInteracted(true)}
      >
        {imageList.map(src => (
          <div
            key={src}
            className="aspect-[5/7] xl:w-144 lg:w-96 w-64 relative"
            ref={imageRef}
          >
            <Image
              src={src}
              alt={src}
              fill
              className='px-5 object-cover'
              onDragStart={e => e.preventDefault()}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;

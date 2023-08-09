import ImageCarousel from "@/components/ImageCarousel"

const carouselBaseUrl = 'https://mannasunevents-images.s3.us-west-2.amazonaws.com/press-carousel-images';

const Press = () => {
  return (
    <ImageCarousel maxNumImages={11} baseUrl={carouselBaseUrl} />
  );
}

export default Press;

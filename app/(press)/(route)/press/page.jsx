import ImageCarousel from "@/components/ImageCarousel"

const carouselBaseUrl = 'https://d2goq47gtd0y9z.cloudfront.net/press-carousel-images';

const Press = () => {
  return (
    <ImageCarousel maxNumImages={11} baseUrl={carouselBaseUrl} />
  );
}

export default Press;

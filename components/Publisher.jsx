import Image from "next/image";
import Link from "next/link";

const publishers = [
  {
    "logo": "/publisher/style_me1.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/style_me2.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/style_me3.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/style_me4.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/style_me5.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/style_me6.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/style_me7.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/style_me8.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/magnoliarouge.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/weddingchicks.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/ruffledblog1.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/ruffledblog2.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/ruffledblog3.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/marthastewart.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/theknot.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/weddingsparrow1.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/weddingsparrow2.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/shishang.png",
    "article": "",
  },
  {
    "logo": "/publisher/greylikesweddings1.jpg",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/greylikesweddings2.jpg",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/100layercake.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/caratsandcake1.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/caratsandcake2.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/junebugweddings.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
  {
    "logo": "/publisher/theeverylastdetail.png",
    "article": "https://www.publisher/100layercake.com/2016/08/18/feminine-vintage-pantone-inspired-wedding-at-the-carondelet-house-in-los-angeles/",
  },
];

const Publisher = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-5 gap-10 place-content-center">
        {publishers.map((publisher, index) => (
          <Link href={publisher.article} key={index}>
            <div className="relative flex items-center justify-center h-16 w-16 md:h-24 md:w-24 rounded-md overflow-hidden cursor-pointer">
              <Image
                src={publisher.logo}
                alt={publisher.logo}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Publisher;

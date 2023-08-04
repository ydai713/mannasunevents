import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { palashRegular, nunitoSansSemiBold } from "@/lib/fonts"

const About = () => {
  return (
    <div>
      {/* desktop */}
      <div className="hidden lg:flex justify-center space-x-3 my-10 mx-16">
        <div className="w-1/2 2xl:w-2/5">
          <AspectRatio ratio={3 / 4}>
            <Image
              src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/about/1.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="Manna Sun"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
        </div>


        <div className="w-1/2 2xl:w-2/5 overflow-auto bg-[#f1f6f6] ">
          <AspectRatio
            ratio={3 / 4}
            className="flex flex-col items-center"
          >
            <div>
              <Image
                src="/assets/rosemary_leaf.png"
                width={80}
                height={80}
                className="object-cover m-10"
                alt="Manna Sun"
              />
            </div>

            <div className={cn("tracking-6 text-sm", palashRegular.className)}>
              MEET MANNA SUN
            </div>
            <h2 className={cn("tracking-5 text-center text-xs p-2 2xl:pt-16", nunitoSansSemiBold.className)}>
              GET TO KNOW THE LADY BEHIND THE SCENES
            </h2>
            <p className={cn("text-xs xl:text-sm leading-4 xl:leading-5 tracking-2 font-light text-center mx-8 my-6")}>
              Manna is living with her husband Yang, their son Samuel, their twin daughters
              Mia & Mila, and their lovely Golden Retriever Coco in both of San Francisco and
              Los Angeles. As a lover of reading, painting, and traveling, she is also the
              founder, chief planner and lead designer for all of the weddings and events
              produced by Manna Sun Events Group. With a master’s degree in Communications and
              a background in event management for large scale events, Manna has planned and
              designed more than 400 weddings, events and editorials in her past ten years in
              the industry. You can find her beautiful works in San Francisco, Los Angeles,
              Santa Catalina Island, Seattle, New York City, Boston, Rhode Island, Chicago,
              Philadelphia, Columbus, Austin, Hawaii Islands, Vancouver, Toronto, Paris and
              etc. Many of her works have been featured on various wedding magazines and
              blogs, and she was also an invited guest of China Global Television Network
              (CGTN). She believes her attention to details, her focus on intimate client
              experience, her skills, creativity and personality are the keys to her success.
            </p>
          </AspectRatio>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-col items-center mx-auto">

        <AspectRatio
          ratio={4 / 3}
          className="flex flex-col items-center"
        >
          <div>
            <Image
              src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/about/1.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="Manna Sun"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </AspectRatio>

        <div className="flex flex-col items-center justify-center bg-[#f1f6f6] w-5/6 h-96 mb-1 text-center">

          <h1 className={cn("tracking-6 text-sm md:text-base pb-10", palashRegular.className)}>
            MEET <br /> MANNA SUN
          </h1>
          <h2 className={cn("tracking-6 text-sm md:text-base pb-10", palashRegular.className)}>
            GET TO KNOW THE LADY BEHIND THE SCENES
          </h2>
          <div className="text-sm font-light mx-8">
            <p>
              Manna is living with her husband Yang, their son Samuel, their twin daughters
              Mia & Mila, and their lovely Golden Retriever Coco in both of San Francisco and
              Los Angeles. As a lover of reading, painting, and traveling, she is also the
              founder, chief planner and lead designer for all of the weddings and events
              produced by Manna Sun Events Group. With a master’s degree in Communications and
              a background in event management for large scale events, Manna has planned and
              designed more than 400 weddings, events and editorials in her past ten years in
              the industry. You can find her beautiful works in San Francisco, Los Angeles,
              Santa Catalina Island, Seattle, New York City, Boston, Rhode Island, Chicago,
              Philadelphia, Columbus, Austin, Hawaii Islands, Vancouver, Toronto, Paris and
              etc. Many of her works have been featured on various wedding magazines and
              blogs, and she was also an invited guest of China Global Television Network
              (CGTN). She believes her attention to details, her focus on intimate client
              experience, her skills, creativity and personality are the keys to her success.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;

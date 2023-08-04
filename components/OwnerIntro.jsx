import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { palashRegular } from "@/lib/fonts"

const OwnerIntro = () => {
  return (
    <div>
      {/* desktop */}
      <div className="hidden lg:flex justify-center mx-auto">
        <div className="bg-[#f1f6f6] mx-2 lg:mx-3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 text-center xl:tracking-4 relative">
          <div className={cn("tracking-6 text-sm md:text-base lg:p-8 xl:text-xl xl:pt-20", palashRegular.className)}>
            MEET <br /> MANNA SUN
          </div>
          <div className="text-sm font-light mx-8 my-6 xl:text-lg">
            <p>
              Manna is living with her husband Yang, their son Samuel, their twin daughters
              Mia & Mila, and their lovely Golden Retriever Coco in both of San Francisco and
              Los Angeles. As a lover of reading, painting, and traveling, she is also the
              founder, chief planner and lead designer for all of the weddings and events
              produced by Manna Sun Events Group.
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-sky-500 lg:p-24"
          >
            Read More
          </Link>
        </div>
        <div className="aspect-[3/4] mx-2 lg:mx-3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 relative">
          <Image
            src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/owner-intro/1.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Manna Sun"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="aspect-[3/4] mx-2 lg:mx-3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 relative">
          <Image
            src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/owner-intro/2.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Manna Sun"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-col items-center mx-auto">
        <div className="flex flex-col items-center justify-center bg-[#f1f6f6] w-5/6 h-96 mb-1 text-center">
          <div className={cn("tracking-6 text-sm md:text-base pb-10", palashRegular.className)}>
            MEET <br /> MANNA SUN
          </div>
          <div className="text-sm font-light mx-8">
            <p>
              Manna is living with her husband Yang, their son Samuel, their twin daughters
              Mia & Mila, and their lovely Golden Retriever Coco in both of San Francisco and
              Los Angeles. As a lover of reading, painting, and traveling, she is also the
              founder, chief planner and lead designer for all of the weddings and events
              produced by Manna Sun Events Group.
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-sky-500 py-8"
          >
            Read More
          </Link>

        </div>
        <div className="aspect-[3/4] w-5/6 md:w-1/2 my-1 relative">
          <Image
            src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/owner-intro/1.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Manna Sun"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="aspect-[3/4] w-5/6 md:w-1/2 my-1 relative">
          <Image
            src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/owner-intro/2.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Manna Sun"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}

export default OwnerIntro;

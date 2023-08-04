import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { nunitoSansLight, palashRegular } from "@/lib/fonts"

const GalleryIntro = () => {
  return (
    <div>
      {/* desktop */}
      <div className="hidden lg:flex justify-center mx-auto">

        <div className="aspect-[5/3] mx-2 lg:mx-3 w-1/3 relative">
          <Image
            src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/gallery-intro/1.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Manna Sun"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col bg-[#f1f6f6] aspect-[5/3] mx-2 w-1/3 text-center xl:tracking-4 relative">
          <h1 className={cn("tracking-6 text-sm md:text-base py-10", palashRegular.className)}>
            BROWSE OUR GALLERY
          </h1>
          <Link href="/weddings" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            WEDDINGS
          </Link>
          <Link href="/events" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            EVENTS
          </Link>
          <Link href="/videos" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            VIDEOS
          </Link>
          <Link href="/editorals" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            EDITORIALS
          </Link>
        </div>

      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-col items-center mx-auto">
        <div className="aspect-[5/3] w-5/6 md:w-1/2 my-1 relative mb-10">
          <Image
            src="https://mannasunevents-images.s3.us-west-2.amazonaws.com/gallery-intro/1.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Manna Sun"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col items-center justify-start bg-[#f1f6f6] w-5/6 h-96 mb-1 text-center">
          <h1 className={cn("tracking-6 text-sm md:text-base py-10", palashRegular.className)}>
            BROWSE OUR GALLERY
          </h1>
          <Link href="/weddings" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            WEDDINGS
          </Link>
          <Link href="/events" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            EVENTS
          </Link>
          <Link href="/videos" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            VIDEOS
          </Link>
          <Link href="/editorals" className={cn("tracking-4 py-5 text-md", nunitoSansLight.className)}>
            EDITORIALS
          </Link>
        </div>

      </div>
    </div>
  );
}

export default GalleryIntro;

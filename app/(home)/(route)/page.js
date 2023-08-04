import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import MainNav from "@/components/MainNav"
import ImageCarousel from "@/components/ImageCarousel"
import OwnerIntro from "@/components/OwnerIntro"
import Category from "@/components/Category"
import LineBreak from "@/components/ui/linebreak"
import GalleryIntro from "@/components/GalleryIntro"
import Publisher from "@/components/Publisher"

import {isabelThinItalic, palashRegular, nunitoSansLight} from "@/lib/fonts"

const Home = () => {
  return (
    <div>
      <MainNav />
      <ImageCarousel maxNumImages={10} />
      <Category />
      <LineBreak src="/rosemary_leaf.png" />
      <OwnerIntro />
      <div className="h-px my-20 bg-gray-200 dark:bg-gray-700"></div>
      <GalleryIntro />

      <div className="flex justify-center my-16">
        <Button
          variant="ghost"
          size="lg"
          className={cn("bg-[#f1f6f6]", isabelThinItalic.className)}
        >
          <Link
            href="/press"
            className="text-lg font-medium transition-colors hover:text-sky-500"
          >
            OUR ONLINE BUZZ
          </Link>
        </Button>
      </div>

      <Publisher />

      <div className="flex justify-center my-16">
        <h1 className={cn("text-lg tracking-4", palashRegular.className)}>
          WE CAN&#39;T WAIT TO MEET YOU!
        </h1>
      </div>

      <div className="flex justify-center mt-16">
        <Button
          variant="ghost"
          size="lg"
          className={cn("bg-[#f1f6f6]", nunitoSansLight.className)}
        >
          <Link
            href="/contact"
            className="text-md font-medium transition-colors hover:text-sky-500"
          >
            BOOK A SESSION
          </Link>
        </Button>
      </div>

      <LineBreak src="/rosemary_leaf_2.png" />


    </div>
  );
}

export default Home;

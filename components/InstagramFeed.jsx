import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import fetchInstagram from "@/lib/instagram_feed"
import { isabelThinItalic, palashRegular } from "@/lib/fonts"

const InstagramFeed = async () => {
  const feeds = await fetchInstagram()
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center mb-10 space-y-2">
          <h1 className={cn("text-lg tracking-4", palashRegular.className)}>
            FOLLOW ALONG
          </h1>
          <Link
            href="https://www.instagram.com/mannasunevents/press"
            className={cn("text-lg font-medium transition-colors hover:text-sky-500 tracking-3", isabelThinItalic.className)}
          >
            @mannasunevents
          </Link>
        </div>
      </div>


      {/* Desktop */}
      <div className="hidden md:flex justify-between mx-10 lg:mx-3 gap-2 relative">
        {
          feeds.map((feed) => (
            <div className="aspect-[1/1] w-1/6 relative" key={feed.id} >
              <Link
                href="https://www.instagram.com/mannasunevents/"
              >
                <Image
                  src={feed.media_url}
                  alt="Instagram Feed"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
          ))
        }
      </div>

      {/* Mobile */}
      <div
        className="md:hidden grid grid-cols-2 mx-10 gap-1 relative"
      >
        {
          feeds.map((feed) => (
            <div className="aspect-[1/1] flex items-center justify-center relative" key={feed.id} >
              <Image
                src={feed.media_url}
                alt="Instagram Feed"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))
        }
      </div>



    </div>
  );
}

export default InstagramFeed;

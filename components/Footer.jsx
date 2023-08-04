import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaVimeo,

} from "react-icons/fa";

import { nunitoSansSemiBold } from "@/lib/fonts"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="my-20">
      {/* desktop */}
      <div className="hidden w-full md:flex justify-between items-center text-center">
        <div className="w-1/3">
          <p className={cn("text-xs xl:text-sm text-center tracking-4", nunitoSansSemiBold.className)}>
            Copyright © 2012-{year} Manna Sun Events, Inc.
          </p>
        </div>

        <div className="w-1/3">
          <p className={cn("text-xs xl:text-sm text-center tracking-4", nunitoSansSemiBold.className)}>
            Based in San Francisco, Los Angeles and Hawaii
          </p>
        </div>

        <div className="w-1/3">
          <div className="flex gap-5 justify-center">
            <Link
              href="https://www.facebook.com/mannasunevents"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="https://www.pinterest.com/mannasunevents"
            >
              <FaPinterest size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/mannasunevents"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://vimeo.com/mannasunevents"
            >
              <FaVimeo size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden flex flex-col items-center space-y-3">
        <p className={cn("text-xs tracking-4", nunitoSansSemiBold.className)}>
          Copyright © 2012-{year} Manna Sun Events, Inc.
        </p>
        <p className={cn("text-xs tracking-4", nunitoSansSemiBold.className)}>
          Based in San Francisco, Los Angeles and Hawaii
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            href="https://www.facebook.com/mannasunevents"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.pinterest.com/mannasunevents"
          >
            <FaPinterest />
          </Link>
          <Link
            href="https://www.instagram.com/mannasunevents"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://vimeo.com/mannasunevents"
          >
            <FaVimeo />
          </Link>
        </div>

      </div>
    </div >

  );
}

export default Footer;

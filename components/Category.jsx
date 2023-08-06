import Link from "next/link"
import { cn } from "@/lib/utils"
import { nunitoSansSemiBold, palashRegular } from "@/lib/fonts"

const items = [
  {
    label: "SERVICES",
    href: "/service",
    "description": "JUST FOR YOU",
  },
  {
    label: "APPROACH",
    href: "/approach",
    "description": "WE WANT TO MEET YOU",
  },
  {
    label: "TESTIMONIALS",
    href: "/testimonial",
    description: "STARTING BY YOUR SIDE",
  },
]

const Category = () => {
  return (
    <div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between pt-20 px-5 2xl:px-64 xl:px-28 lg:px-20" >
        {
          items.map((item, index) => (
            <div className="px-15 w-1/4" key={index} >
              <div className="flex flex-col justify-between items-center">
                <Link
                  href={item.href}
                  className={cn("text-base tracking-6 py-2", palashRegular.className)}
                >
                  {item.label}
                </Link>
                <h2 className={cn("text-xs tracking-6 py-2", nunitoSansSemiBold.className)}>
                  {item.description}
                </h2>
              </div>
            </div>
          ))
        }
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col" >
        {
          items.map((item, index) => (
            <div
              className="flex flex-col justify-between items-center pt-10"
              key={index}
            >
              <Link
                href={item.href}
                className={cn("text-base tracking-6 py-1", palashRegular.className)}
              >
                {item.label}
              </Link>
              <h2 className={cn("text-xs tracking-6 py-1", nunitoSansSemiBold.className)}>
                {item.description}
              </h2>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default Category;

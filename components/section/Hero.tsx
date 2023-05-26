import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 text-2xl [&:not(:first-child)]:mt-6">
        Anyone can beat you but no one can beat your outfit as long as you wear
        Dine outfits.
      </p>

      <Button className="m-5">
        <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
      </Button>
    </div>
  );
};

export default Hero;

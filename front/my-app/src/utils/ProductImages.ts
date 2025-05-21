import { Product } from "@/interfaces/Product";

const ProductImages = [
  {
    name: "iPhone 11",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg",
  },
  {
    name: "MacBook Air",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-5577502_7cf42778-404f-43b1-81e9-1f2ae4c27514.jpg?v=1723751812",
  },
  {
    name: "iPad Pro",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-13190861.jpg?v=1723748744",
  },
  {
    name: "Apple Watch Series 6",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-14867112.jpg?v=1726874121&width=1680",
  },
  {
    name: "AirPods Pro",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-14912674.jpg?v=1726874188",
  },
  {
    name: "HomePod mini",
    image:
      "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod__cnpc7icpf1aq_large.png",
  },
];

export const changeImage = (products: Product[]) => {
  products.map((product) => {
    const foundItem = ProductImages.find(
      (element) => element.name === product.name
    );
    if (foundItem && foundItem.image) {
      product.image = foundItem.image;
    }
  });
};

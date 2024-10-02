import ContactUsIcon from "@/components/icons/contact-us";
import ProductsIcon from "@/components/icons/products-icon";
import ReviewIcon from "@/components/icons/review-icon";

export const MENU_ITEMS_HEADER = [
  {
    key: "prodcuts",
    icon: <ProductsIcon />,
    label: "Products",
    link: "/prodcuts",
  },

  { key: "reviews", icon: <ReviewIcon />, label: "Reviews", link: "/reviews" },

  {
    key: "contact us",
    icon: <ContactUsIcon />,
    label: "Contact Us",
    link: "/contact-us",
  },
];

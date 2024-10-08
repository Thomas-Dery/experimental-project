import Image from "next/image";

export const ProductImage = ({ image = "" }) => {
  return <Image width={100} height={100} src={image} alt="Image" />;
};

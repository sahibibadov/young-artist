import { Button } from "@/components/ui/button";
import { Product } from "@/type";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCart } from "@/store/cart.store";
import FavoriteIcon from "../FavoriteIcon";
const ProductDetail = ({ href, id, imageAlt, imageSrc, name, price }: Product) => {
  const { add } = useCart();
  return (
    <Card key={id} className="overflow-hidden group hover:scale-105 transition-all">
      {/* image */}
      <CardHeader className=" w-full overflow-hidden ">
        <img
          alt={imageAlt}
          src={imageSrc}
          loading="lazy"
          className="h-full aspect-square w-full object-cover rounded-md object-center "
        />
      </CardHeader>
      {/* card content */}
      <CardContent className="mt-1 space-y-1 ">
        <Link to={`/product/${id}`}>
          <h3 className=" text-muted-foreground hover:underline hover:underline-offset-2">
            {name}
          </h3>
        </Link>

        <p className="text-lg font-medium text-accent-foreground">${price}</p>
        <Button
          variant="outline"
          onClick={() => add({ id, price, href, imageAlt, imageSrc, name })}
        >
          <Link to={href}>Add to cart</Link>
        </Button>
        <FavoriteIcon
          product={{ href, id, imageAlt, imageSrc, name, price }}
          className="absolute top-3 right-4"
        />
      </CardContent>
    </Card>
  );
};
export default ProductDetail;

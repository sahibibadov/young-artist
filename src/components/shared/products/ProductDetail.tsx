import { Button } from "@/components/ui/button";
import { Product } from "@/type";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const ProductDetail = ({ href, id, imageAlt, imageSrc, name, price }: Product) => {
  return (
    <Card key={id} className="overflow-hidden group hover:scale-105 transition-all">
      {/* image */}
      <CardHeader className=" w-full overflow-hidden ">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full aspect-square w-full object-cover rounded-md object-center "
        />
      </CardHeader>
      {/* card content */}
      <CardContent className="mt-1 space-y-1 ">
        <h3 className=" text-muted-foreground">{name}</h3>
        <p className="text-lg font-medium text-accent-foreground">${price}</p>
        <Button variant="outline">
          <Link to={href}>Add to cart</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductDetail;

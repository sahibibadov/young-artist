import { useCart } from "@/store/cart.store";
import { Product } from "@/type";
import { Trash2 } from "lucide-react";

const CartSheetProduct = ({ product }: { product: Product }) => {
  const remove = useCart((state) => state.remove);
  return (
    <figure key={product.id} className="relative flex gap-2 justify-between items-center w-full">
      <div className="flex gap-2">
        {/* image */}
        <div className="w-20 aspect-square rounded-md overflow-hidden shrink-0">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="object-cover object-center"
          />
        </div>
        {/* title */}
        <div>
          <h3 className="line-clamp-1">dwdwdwwdwddwdw dwdwdwd wd dwdw dwdw{product.name}</h3>
          <strong>${product.price}</strong>
        </div>
      </div>

      <Trash2
        size={20}
        className="text-destructive shrink-0  cursor-pointer"
        onClick={() => remove(product.id)}
        data-cursor
      />
    </figure>
  );
};
export default CartSheetProduct;

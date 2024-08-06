import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/store/cart.store";
import { Product } from "@/type";

import { ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";
import BlurFade from "./BLurFade";
const CartSheet = () => {
  const cart = useCart((state) => state.cart);
  const remove = useCart((state) => state.remove);
  const cartCount = cart.length;
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="relative">
        <ShoppingCart />
        <span className="absolute -top-1 -right-3   rounded-full h-4 px-1 text-sm flex items-center justify-center">
          {cartCount}
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        {cart.length > 0 ? (
          <div className="flex flex-col gap-2 mt-4">
            {cart.map((item: Product, i) => (
              <BlurFade key={item.id} delay={0.25 + i * 0.05} inView>
                <figure key={item.id} className="border p-2 flex items-center rounded-md ">
                  <h3>{item.name}</h3>
                  <strong>${item.price}</strong>

                  <Trash2
                    size={20}
                    className="text-destructive ml-auto cursor-pointer"
                    onClick={() => remove(item.id)}
                  />
                </figure>
              </BlurFade>
            ))}
          </div>
        ) : (
          <h3 className="text-2xl font-bold">The basket is empty</h3>
        )}
      </SheetContent>
    </Sheet>
  );
};
export default CartSheet;

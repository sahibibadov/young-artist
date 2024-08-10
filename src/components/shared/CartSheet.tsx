import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/store/cart.store";
import { Product } from "@/type";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import AnimatedReveal from "@/components/shared/AnimationComponent";
import CartSheetProduct from "./CartSheetProduct";

const CartSheet = () => {
  const { cart, totalPrice } = useCart();
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
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Sebet</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          <div className="mt-4 divide-y flex flex-col pb-20">
            {cart.map((item: Product, i) => (
              <AnimatedReveal
                layout
                key={item.id}
                delay={0.25 + i * 0.05}
                blur="6px"
                className="py-3"
              >
                <CartSheetProduct product={item} />
              </AnimatedReveal>
            ))}
          </div>
        ) : (
          <h3 className="text-2xl font-bold">The basket is empty</h3>
        )}
        <div className="fixed right-0 h-24  bottom-0   w-3/4 sm:max-w-sm  bg-background border-t flex flex-col gap-1 px-6 py-2">
          <h3 className="text-xl font-bold">Toplam deyer: ${totalPrice}</h3>
          <span className=" text-muted-foreground">doplam say: {cart.length}</span>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default CartSheet;

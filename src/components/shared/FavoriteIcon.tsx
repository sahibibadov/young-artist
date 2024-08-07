import { useFavoriteStore } from "@/store/favorite.store";
import { Heart } from "lucide-react";
import { Product } from "@/type";
import { cn } from "@/lib/utils";

interface FavoriteIconProps {
  product?: Product;
  className?: string;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ product, className }) => {
  const { favorites, add, remove } = useFavoriteStore();
  const isFavorite = product ? favorites.some((item) => item.id === product.id) : false;

  const handleClick = () => {
    if (product) {
      if (isFavorite) {
        remove(product.id);
      } else {
        add(product);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "rounded-full border p-1.5 flex items-center justify-center cursor-pointer",
        className
      )}
    >
      {isFavorite ? (
        <Heart className="fill-black stroke-black size-6" />
      ) : (
        <Heart className=" size-6 stroke-black" />
      )}
    </div>
  );
};

export default FavoriteIcon;

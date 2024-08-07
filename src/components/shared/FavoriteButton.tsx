import { useFavoriteStore } from "@/store/favorite.store";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FavoriteButton = () => {
  const { favorites } = useFavoriteStore();
  const favoriteCount = favorites.length;
  return (
    <Link to="/favorite" className="relative">
      <Heart />
      <span className="absolute -top-1 -right-3   rounded-full h-4 px-1 text-sm flex items-center justify-center">
        {favoriteCount}
      </span>
    </Link>
  );
};
export default FavoriteButton;

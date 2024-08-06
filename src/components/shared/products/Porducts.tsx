import { products } from "@/lib/constants";
import ProductDetail from "./ProductDetail";

import "./products.scss";
import FilterSelect from "../FilterSelect";

const Porducts = () => {
  return (
    <>
      {/* filter */}
      <div className="filter-box flex items-center justify-between  p-2  mb-5 mt-5">
        <h4>Mövcüd elanlar ({products.length})</h4>
        <FilterSelect />
      </div>
      {/* products */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductDetail key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
export default Porducts;

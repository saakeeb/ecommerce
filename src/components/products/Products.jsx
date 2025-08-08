import { useFetchProducts } from "../../hooks/useFetchProducts";
import Loading from "../common/Loading";
import ShowProducts from "./ShowProducts";

const Products = () => {
  const { loading } = useFetchProducts();
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading type="grid" count={6} /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;

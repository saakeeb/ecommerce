import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const filterButton = [
    {
        label: "All",
        value: "all"
    },
    {
        label: "Men's Clothing",
        value: "men's clothing" 
    },
    {
        label: "Women's Clothing",
        value: "women's clothing"   
    },
    {
        label: "Jewelery",
        value: "jewelery"   
    },
    {
        label: "Electronics",
        value: "electronics"   
    }
]

export default function ShowProducts() {
 const { filter, filterProduct } = useFetchProducts();
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  return (
      <>
          <div className="buttons text-center py-5">
              {
                filterButton.map((item, index) => (
                    <button key={index}
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => filterProduct(item.value)}
                    >
                        { item.label }
                    </button>
                ))
              }
        </div>

        {filter.map((product) => {
            const isOutOfStock = product.rating?.count === 0;

            return (
                <div
                id={product.id}
                key={product.id}
                    className="col-md-3 col-sm-6 col-12 mb-4 d-flex overflow-hidden"
                    style={{ width: "260px" }}
                >
                
                    <div
                    className="card h-100 shadow-sm border-0"
                    style={{ transition: "transform 0.2s ease-in-out" }}
                    >
                    <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none text-dark overflow-hidden"
                        style={{ cursor: "pointer" }}
                    >
                        <div
                            className="overflow-hidden text-center"
                                style={{ height: "250px" }}
                        >
                            <img
                            src={product.image}
                            alt={product.title}
                            className="p-3"
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                                transition: "transform 0.3s ease",
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            />
                        </div>
                    </Link>
                    <div className="card-body d-flex flex-column">
                        <h6
                        className="fw-semibold mb-2"
                        style={{
                            minHeight: "3rem",
                            transition: "color 0.2s ease",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#febd69")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                        >
                        {product.title}
                        </h6>

                        {/* Ratings */}
                        <div className="mb-2 text-warning small">
                        {"★".repeat(Math.round(product.rating?.rate || 0))}
                        {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
                        <span className="text-muted ms-1">
                            ({product.rating?.count || 0})
                        </span>
                        </div>

                        {/* Price */}
                        <h5 className="fw-bold mb-3">${product.price}</h5>

                        {/* Variant Dropdown (example placeholder) */}
                        <select className="form-select form-select-sm mb-3">
                        <option>Variant Option</option>
                        <option>Variant 1</option>
                        <option>Variant 2</option>
                        </select>

                        {/* Delivery Info */}
                        <small className="text-muted mb-2">
                        Delivery <strong>Wed, Aug 20</strong>
                        </small>

                        {isOutOfStock ? (
                            <button className="btn btn-secondary w-100" disabled>
                            Out of Stock
                            </button>
                        ) : (
                            <button
                            className="btn btn-dark w-100"
                            onClick={() => addProduct(product)}
                            >
                            Add to Cart
                            </button>
                        )}
                    </div>
                    </div>
                
                </div>
            );
        })}

      </>
    );
}

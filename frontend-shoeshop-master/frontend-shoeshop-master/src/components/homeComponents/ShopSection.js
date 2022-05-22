import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../LoadingError/Loading";
import Rating from "./Rating";
import Pagination from "./pagination";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import { useSelector } from "react-redux"; // lấy dữ liệu từ kho chung

const ShopSection = () => {
  // const [products, setProducts] = useState([]);

  const productList = useSelector((state) => state.productList); // Lấy product List từ kho

  const { loading, error, products } = productList;
  console.log(products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      listProduct()
    )
    // const fetchproducts = async () => {
    //   const { data } = await axios.get(`/api/products`)
    //   setProducts(data);
    // };
    // fetchproducts();
  }, [dispatch])
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {
                  loading ? (<Loading/>) : error ? (<p>Error : {error}</p>)
                    :
                    (
                      <>
                        {products.map((product) => (
                          <div
                            className="shop col-lg-4 col-md-6 col-sm-6"
                            key={product._id}
                          >
                            <div className="border-product">
                              <Link to={`/products/${product._id}`}>
                                <div className="shopBack">
                                  <img src={product.image} alt={product.name} />
                                </div>
                              </Link>

                              <div className="shoptext">
                                <p>
                                  <Link to={`/products/${product._id}`}>
                                    {product.name}
                                  </Link>
                                </p>

                                <Rating
                                  value={product.rating}
                                  text={`${product.numReviews} reviews`}
                                />
                                <h3>${product.price}</h3>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )
                }
                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;

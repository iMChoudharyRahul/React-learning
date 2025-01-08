import React, { useEffect, useState } from "react";
import "./ProductStyle.css";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [pageData, setPageData] = useState(1);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const productData = await response.json();
    if (productData && productData.products) {
      setProduct(productData.products);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const pageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= product.length / 10 &&
      selectedPage !== pageData
    ) {
      setPageData(selectedPage);
    }
  };

  return (
    <>
      {product.length > 0 && (
        <div className="products">
          {product.slice(pageData * 6 - 6, pageData * 6).map((item) => {
            return (
              <span className="product__single" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <span className="product__title">{item.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {product.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => pageHandler(pageData - 1)}
            className={pageData > 1 ? "" : "disable__page"}
          >
            ◀
          </span>
          {[...Array(product.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={pageData === i + 1 ? "selected__page" : ""}
                onClick={() => pageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => pageHandler(pageData + 1)}
            className={pageData < product.length / 10 ? "" : "disable__page"}
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
};

export default ProductPage;

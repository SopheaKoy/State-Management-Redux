import React, { useEffect, useState } from "react";

import CardProductDetail from "../../components/common/card/CardProductDetail";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    }
  }, []);

  return (
    <>
      {product && (
        <CardProductDetail
          title={product.title}
          deescription={product.description}
          image={product.images[0]}
        />
      )}
    </>
  );
}

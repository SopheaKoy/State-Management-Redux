import React, { useEffect, useState } from "react";
import CardComponent from "../../components/common/card/CardComponent";
import CardPlaceHolder from "../../components/common/card/CardPlaceHolder";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/features/product/ProductSlice";

export default function Product() {
  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);

  // this code using dispatch product to store
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const navigate = useNavigate();

  // const [productList, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // if fetch successfully
  //       setProduct(data.products);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }, []);

  const handleClickCard = (product) => {
    navigate("/detail", { state: product });
  };

  return (
    <>
      <div className='flex flex-wrap justify-evenly gap-4 pt-4'>
        {status == "loading" &&
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <CardPlaceHolder key={index} />
          ))}
        {status == "successed" && products.length > 0 ? (
          products.map((item, index) => (
            <CardComponent
              onClickComponent={() => {
                handleClickCard(item);
              }}
              key={index}
              id={item.id}
              title={item.title}
              image={item.images[0]}
              price={item.price}
              rating={item.rating}
              description={item.description}
            />
          ))
        ) : (
          <div>Not Found...!</div>
        )}
        {/* Case fetch product error */}
        {status == "failed" && (
          <div className='text-center text-red-700 text-4xl'>
            Failed to fetch data from api...!
          </div>
        )}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import CardComponent from "../../components/common/card/CardComponent";
import CardPlaceHolder from "../../components/common/card/CardPlaceHolder";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [productList, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // if fetch successfully
        setProduct(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleClickCard = (product) => {
    navigate("/detail", { state: product });
  };

  return (
    <>
      <div className='flex flex-wrap justify-evenly gap-4 pt-4'>
        {loading &&
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <CardPlaceHolder key={index} />
          ))}
        {!loading &&
          productList.map((item, index) => (
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
          ))}
      </div>
    </>
  );
}

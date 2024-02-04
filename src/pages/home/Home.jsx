import { key } from "localforage";
import React, { useEffect, useState } from "react";
import CardComponent from "../../components/common/card/CardComponent";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState(false);
  const [error, setError] = useState({
    name: "",
    message: "",
  });
  const [productList, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (password.length < 8 && password.length > 0) {
      setError({
        name: "password",
        message: "Password must be at least 6 charater!",
      });
    } else {
      setError({
        name: "",
        message: "",
      });
    }

    console.log("use Effect is running.");
  }, [name, password]);

  // handle name
  const handleName = (e) => {
    setName(e.target.value);
  };

  // handle password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <CardComponent />
      <div>
        <h1 className='text-center text-4xl font-semibold text-blue-700'>
          List Product
        </h1>
        <h1 className='p-5 text-center text-4xl font-semibold text-red-600'>
          {name}
        </h1>
        <form action=''>
          <label htmlFor='name'>Name : </label>
          <input type='text' name='name' id='name' onChange={handleName} />

          <label htmlFor='password'>Password : </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={handlePasswordChange}
          />
          <div>
            {error.name === "password" && error.message ? (
              <p className='text-red-600'>{error.message}</p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
      <div className='pt-9'>
        <h1 className='text-center text-4xl text-emerald-500'>
          List of Porudct fetch form API
        </h1>
        <div>
          {productList.map((product, index) => {
            return (
              <div key={index}>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <img
                  src={product.images[0]}
                  alt=''
                  className='h-56 w-56 rounded-lg object-cover'
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

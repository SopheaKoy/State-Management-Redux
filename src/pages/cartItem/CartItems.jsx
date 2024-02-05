import React from "react";
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeAll,
} from "../../redux/features/cart/cartSlice";

export default function CartItems() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  // using function to handle increaseQty
  const handleIncreaseQty = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQty = (item) => {
    console.log(item);
    dispatch(decreaseQuantity(item));
  };
  const handleRemoveAll = (item) => {
    dispatch(removeAll(item));
  };

  return (
    <Card className='max-w-sm mx-auto mt-10'>
      <div className='mb-4 flex items-center justify-between'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
          Latest Customers
        </h5>
        <span
          onClick={() => {
            handleRemoveAll();
          }}
          className='text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer'>
          Remove All
        </span>
      </div>
      <div className='flow-root'>
        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          {items &&
            items.map((item, index) => (
              <li className='py-3 sm:py-4' key={index}>
                <div className='flex items-center space-x-4'>
                  <div className='shrink-0'>
                    <img
                      alt='Neil image'
                      src={item?.image}
                      className='rounded-full h-10 w-10'
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                      {item?.title}
                    </p>
                  </div>
                  <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                    ${item && item?.price}
                  </div>
                  <div>
                    <span
                      className='mx-1 text-2xl bg-red-600 text-white rounded-full px-1 cursor-pointer'
                      onClick={() => {
                        handleDecreaseQty(item);
                      }}>
                      -
                    </span>
                    <span className='text-2xl  text-blue-700 rounded-full px-1'>
                      {item?.quantity}
                    </span>
                    <span
                      className='mx-1 text-2xl bg-red-600 text-white rounded-full px-1 cursor-pointer'
                      onClick={() => {
                        handleIncreaseQty(item);
                      }}>
                      +
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Card>
  );
}

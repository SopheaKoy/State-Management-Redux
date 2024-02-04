import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../common/icons/Icons";
import { useSelector } from "react-redux";

export default function NavbarComponent() {
  const [navbarList, setNavBarList] = useState([
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "Product",
      url: "/product",
      active: false,
    },
    {
      title: "Service",
      url: "/service",
      active: false,
    },
    {
      title: "About",
      url: "/about",
      active: false,
    },
  ]);

  // if ypu want to call state in store usign useSector
  const items = useSelector((state) => state.cart.total);
  const state = useSelector((state) => state.cart.item);

  console.log(items);

  const handleClick = (item) => {
    //
    setNavBarList((preValues) => {
      return preValues.map((values) => {
        if (values.title === item.title) {
          return {
            ...values,
            active: true,
          };
        } else {
          return {
            ...values,
            active: false,
          };
        }
      });
    });
  };

  return (
    <Navbar fluid rounded className='bg-gradient-to-r from-indigo-500'>
      <Navbar.Brand href='https://flowbite-react.com'>
        <img
          src='/src/assets/react.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite React Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white'>
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navbarList.map((item, index) => {
          return (
            <Navbar.Link
              onClick={() => {
                handleClick(item);
              }}
              key={index}
              as={Link}
              to={item.url}
              active={item.active}>
              {item.title}
            </Navbar.Link>
          );
        })}
        <Navbar.Link as={Link} to={"/cart-items"}>
          <div className='relative'>
            <CartIcon className='h-5 w-5' />
            <span className='absolute -top-2 -right-2 bg-red-600 rounded-full text-white text-xs px-1'>
              {items}
            </span>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

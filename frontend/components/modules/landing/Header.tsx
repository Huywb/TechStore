import React from "react";
import Container from "../layout/Container";
import HeaderMenu from "./HeaderMenu";
import Search from "./Search";
import CartIcon from "./CartIcon";
import FavoriteIcon from "./FavoriteIcon";
import Login from "./Login";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="border-b-black/20 border">
      <Container className="flex justify-between items-center">

        {/*logo */}    
        <div className="flex gap-2 items-center justify-start md:gap-0">
            <MobileMenu/>
            <h1 className="text-xl font-bold hover:text-shop_light_green cursor-pointer text-shop_dark_green hoverEffect">TECHSTORE</h1>
        </div> 
      
        {/*header menu */}     
        <HeaderMenu></HeaderMenu>

        {/*header menu */}     
        <div className="w-auto flex justify-end items-center gap-5">
            <Search />
            <CartIcon />
            <FavoriteIcon />
            <Login />
        </div>
      </Container>
    </header>
  );
};

export default Header;

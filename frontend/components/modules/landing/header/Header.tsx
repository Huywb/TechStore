'use client'
import React from "react";
import Container from "../../layout/Container";
import HeaderMenu from "./HeaderMenu";
import Search from "./Search";
import CartIcon from "./CartIcon";
import FavoriteIcon from "./FavoriteIcon";
import Login from "./Login";
import MobileMenu from "../sidemenu/MobileMenu";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";

const Header = () => {

  const {user} = useUser()
  return (
    <header className="border-b-black/20 border sticky top-0 right-0 left-0 z-50 bg-white/70 backdrop-blur-md">
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
            <ClerkLoaded>
                <UserButton/>
            </ClerkLoaded>
            {
              !user && (<Login/>)
            }
        </div>
      </Container>
    </header>
  );
};

export default Header;

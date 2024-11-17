import React from 'react';
import logo from "../../img/logo.svg";
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href='/' className="logo">
          <Image src={logo} alt="V!U!E! Pizza logo" width="90" height="40" />
        </Link>
      </div>
      <div className="header__cart">
        <Link href="cart.html">0 ₽</Link>
      </div>
      <div className="header__user">
        <Link href="#" className="header__login"><span>Войти</span></Link>
      </div>
    </header>
  );
}

export default Header;
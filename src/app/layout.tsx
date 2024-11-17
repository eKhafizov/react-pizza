'use client'

import { Provider } from 'react-redux';
import "../app/global.scss";
import "../app/style.scss";
import Image from 'next/image';
import store from '@/store/store';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body >
          <header className="header">
            <div className="header__logo">
              <a href="index.html" className="logo">
                <Image src="img/logo.svg" alt="V!U!E! Pizza logo" width="90" height="40" />
              </a>
            </div>
            <div className="header__cart">
              <a href="cart.html">0 ₽</a>
            </div>
            <div className="header__user">
              <a href="#" className="header__login"><span>Войти</span></a>
            </div>
          </header>
          {children}
        </body>
      </html>
    </Provider>
  );
}

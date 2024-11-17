'use client'
import { Provider } from 'react-redux';
import "../app/style.scss";
import store from '@/store/store';
import Header from '@/components/header/header';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body >
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}

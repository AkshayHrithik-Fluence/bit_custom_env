import React from 'react';
import Header, { HeaderBrand, HeaderNavigation, HeaderUserProgfile, Routes } from './Header';
import { ThemeContextProvider } from '@my-scope/theme';

export const HeaderComposition = () => {
  const user = {
    name: 'John Doe',
    picture: 'https://via.placeholder.com/32',
  };

  const routes: Routes[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  return (
    <ThemeContextProvider>
    <Header brandName="My App" user={user} routes={routes}>
      <HeaderBrand>
        <div>Custom Brand</div>
      </HeaderBrand>
      <HeaderNavigation>
        <div>Custom Navigation</div>
      </HeaderNavigation>
      <HeaderUserProgfile>
        <div>Custom User Profile</div>
      </HeaderUserProgfile>
    </Header>
    </ThemeContextProvider>
  );
};
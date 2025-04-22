import React from 'react';
import type { LayoutProps } from '@/types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <h1>Для детей</h1>
      {children}
    </>
  );
}

export default Layout;
// app/productPages/electronics/layout.tsx
import React from 'react';
import type { LayoutProps } from '@/types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;

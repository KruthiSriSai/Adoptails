import React, { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ children, className = '', ...props }) => {
  return (
    <a
      className={`cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export { Link };
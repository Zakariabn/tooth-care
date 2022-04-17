import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved?.pathname, end: true });

  return (
    <div>
      <Link
        className={
          ` py-5 
          ${match 
            ? "md:border-b-4 text-shadeOfPrimary md: border-[#2EA6F7] rounded-sm" 
            : "text-primary"
          }`
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
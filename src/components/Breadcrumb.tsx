import React from 'react';
import '../styles/Website/breadcrumb.css'; 

interface BreadcrumbProps {
  items: { nhan: string; duongDan?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.duongDan ? (
              <a href={item.duongDan} className="breadcrumb-link">
                {item.nhan}
              </a>
            ) : (
              <span className="breadcrumb-label">{item.nhan}</span>
            )}
            {index < items.length - 1 && <span className="breadcrumb-separator">{'>'}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

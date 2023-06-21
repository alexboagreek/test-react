import React from 'react';
import './button.scss';

export const Button = ({btnName, btnClass, url}) => {
  const btnFullClass = `btn ${btnClass}`
  return (
    <div className={btnFullClass}>
      <a href={url} className="btn" target="_blank">
        {btnName}
      </a>
    </div>
  );
};
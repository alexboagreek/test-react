import React from 'react';
import './tab.scss'

export const Tab = (
  {
    selected,
    title,
    changeSelectTabCallback,
    id
  }
) => {
  const onClickTabHandler = (e: React.ChangeEvent<HTMLInputElement>) => changeSelectTabCallback(id, !selected)
  const fullTabClass = `tab ${selected ? "tab_selected" : ""}`

  return (
    <li
      className={fullTabClass}
      id={id}
      onClick={onClickTabHandler}
    >
      {title}
    </li>
  );
};
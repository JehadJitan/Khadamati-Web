import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

const SideBarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  height: 60px;
  list-style: none;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    background: #252831;
    border-right: 4px solid #d31818;
    cursor: pointer;
  }
`;

const SideBarLabel = styled.span`
  margin-right: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;

  &:hover {
    background: #252831;
    border-right: 4px solid #d31818;
    cursor: pointer;
  }
`;

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const SubMenu = ({ item, handleSideBarChange, sidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const elementRef = useRef(null);
  useOutsideAlerter(elementRef);

  return (
    <div>
      <SideBarLink
        to={item.path}
        onClick={
          (item.subNav && showSubnav) ||
          (item.title === "لائحة المستخدمين"
            ? () => handleSideBarChange(!sidebar)
            : null)
        }
      >
        <div>
          {/* null means if there is no extension then dont put arrow */}
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
        <div>
          <SideBarLabel>{item.title}</SideBarLabel>
          {item.icon}
        </div>
      </SideBarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              key={index}
              onClick={() => handleSideBarChange(!sidebar)}
            >
              <SideBarLabel>{item.title}</SideBarLabel>
              {item.icon}
            </DropdownLink>
          );
        })}
    </div>
  );
};
export default SubMenu;

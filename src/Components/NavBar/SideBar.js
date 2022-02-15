import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';
import mainLogo from './webLogo4.png'
import { useHistory } from "react-router-dom";
const Nav = styled.div`
position: fixed;
top: 0;
width: 100%;
background: #15171c;
height:60px;
display:flex;
justify-content:center;
align-items:center;
justify-content: space-between;
`;

const KhadamatiLogo = styled.span`
    margin-left:2rem;
    margin-top:6px;
`;

const NavIcon = styled(Link)`
    margin-right:2rem;
    font-size:1.5rem;
    height:80px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:white;
    margin-left:8rem;

`;

const SideBarNav = styled.nav`
    background: #15171c;
    width:250px;
    height:100vh;
    display:flex;
    justify-content:center;
    position:fixed;
    top:0;
    right:${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition:350ms;
    z-index:10;
    overflow-y: hidden;
    overflow-y:scroll;
`;

const SideBarWrap = styled.nav`
    width:100%;
`;

const KhadamtiTitle = styled.span`
    color:white;
    margin:auto;
    font-size: 2em;
    font-weight:bold;
    text-align: center;
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

const SideBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar);

    const history = useHistory();

    const routeChange = () => {
        let path = `/DB`;
        history.push(path);
    }
    // const [isOpen, setIsOpen] = useState(false);

    // const whatToDo = () => setIsOpen((isOpen) => !isOpen);

    // const boxRef = useRef(null);
    // const boxOutsideClick = OutsideClick(boxRef);

    // useEffect(() => {
    //     document.addEventListener("mousedown", () => {
    //         setIsOpen(false)
    //     })
    // })

    const elementRef = useRef(null);

    return <>
        <Nav>
            <KhadamatiLogo>
                <img src={mainLogo} alt="khadamatiLogo" width={150} onClick={routeChange} id='khadamatiIcon' />
            </KhadamatiLogo>
            <KhadamtiTitle className='title'>لوحة القيادة</KhadamtiTitle>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSideBar} />
            </NavIcon>
        </Nav>
        <SideBarNav sidebar={sidebar} showsVerticalScrollIndicator={false}
        >
            <SideBarWrap ref={elementRef}>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSideBar} />
                </NavIcon>
                {SideBarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                })}
            </SideBarWrap>
        </SideBarNav>
    </>;
};

export default SideBar;

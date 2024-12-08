import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 3px;
  width: 100%;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const NavItem = styled.a`
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.9); /* Базовый цвет текста */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: #1a202c; /* Цвет текста при наведении */
  }

  &.active {
    background-color: #ffffff;
    color: #1a202c; /* Цвет текста активного элемента */
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Nav>
        <NavItem href="#home">Главная</NavItem>
        <NavItem href="#projects">Проекты</NavItem>
        <NavItem href="#info">Инфо</NavItem>
        <NavItem href="#contacts" className="active">
          Контакты
        </NavItem>
      </Nav>
    </Section>
  );
};

export default Navbar;

import GarageIcon from "@mui/icons-material/Garage";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Container,
  Menu,
  MenuIcon,
  MenuItem,
  MenuTitle,
  MenuWrapper,
} from "./styles";

interface IMenuItemsProps {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const menuItems: IMenuItemsProps[] = [
  {
    title: "Carros",
    icon: <TimeToLeaveIcon />,
    path: "/",
  },
  {
    title: "Modelos",
    icon: <GarageIcon />,
    path: "/models",
  },
  {
    title: "Marcas",
    icon: <WorkspacesIcon />,
    path: "/brands",
  },
];

interface ISidebarContext {
  validateMenuActive: (path?: string) => void;
}

const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: any }> = ({ children }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const validateMenuActive = useCallback(() => {
    const findMenuIndex = menuItems.findIndex(
      (menuItem) => menuItem.path === pathname
    );
    setSelected(findMenuIndex);
  }, [pathname]);

  useEffect(() => {
    validateMenuActive();
  }, [validateMenuActive]);

  const handleOpenMenu = (index: number) => {
    setSelected(index === selected ? null : index);
    navigate(menuItems[index].path);
  };

  return (
    <SidebarContext.Provider value={{ validateMenuActive }}>
      <Container>
        <Menu>
          {menuItems.map((item, index) => (
            <MenuItem
              selected={selected === index}
              key={item.title}
              onClick={() => handleOpenMenu(index)}
            >
              <MenuWrapper>
                <MenuIcon style={{ fontSize: "10px" }}>{item.icon}</MenuIcon>
                <MenuTitle>{item.title}</MenuTitle>
              </MenuWrapper>
            </MenuItem>
          ))}
        </Menu>
      </Container>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): ISidebarContext => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error("useSidebar deve ser usado dentro de um SidebarProvider");
  }

  return context;
};

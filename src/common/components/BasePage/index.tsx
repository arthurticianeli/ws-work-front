import { FunctionComponent } from "react";
import Header from "../Header";
import { SidebarProvider } from "../Sidebar";
import { Body, Container } from "./styles";

const BasePage: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <Header />
      <Body>
        <SidebarProvider>{children}</SidebarProvider>
      </Body>
    </Container>
  );
};

export default BasePage;

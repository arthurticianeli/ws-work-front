import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Container, LogoContainer } from "./styles";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <Button
          transparent
          type="submit"
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          <img src="./assets/logos/ws_logo.svg" alt="" width={58} />
        </Button>
      </LogoContainer>
    </Container>
  );
};

export default Header;

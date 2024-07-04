import SnackBar from "../SnackBar";

interface Props {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const PageInfoAlerts = ({ errorMessage, setErrorMessage }: Props) => {
  return (
    <SnackBar
      open={!!errorMessage}
      setOpen={() => setErrorMessage("")}
      severity="error"
      message={errorMessage}
      horizontal="center"
      vertical="top"
    />
  );
};

export default PageInfoAlerts;

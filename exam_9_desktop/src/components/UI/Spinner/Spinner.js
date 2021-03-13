import { Backdrop, CircularProgress } from "@material-ui/core";
import "./Spinner.css";

const Spinner = ({ open }) => {
  return (
    <>
      <Backdrop open={open}>
        <CircularProgress color='primary' />
      </Backdrop>
    </>
  );
};

export default Spinner;

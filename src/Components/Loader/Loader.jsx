import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    // <Backdrop
    //   sx={{
    //     color: "#ddd",
    //     zIndex: (theme) => theme.zIndex.drawer + 1,
    //   }}
    //   open={open}
    // >
    <div className="loaderDiv w-full h-full flex items-center justify-center">

      <CircularProgress color="inherit" />
    </div>
    // </Backdrop>
  );
};

export default Loader;

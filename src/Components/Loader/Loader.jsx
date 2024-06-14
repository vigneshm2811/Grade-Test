import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="loaderDiv w-full h-full flex items-center justify-center">
      <Backdrop
        sx={{
          color: "#ddd",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loader;

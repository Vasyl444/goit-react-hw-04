import { RotatingLines } from "react-loader-spinner";
export default function Loader(isVisible) {
  return (
    <RotatingLines
      visible={isVisible.visible}
      height="50"
      width="50"
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

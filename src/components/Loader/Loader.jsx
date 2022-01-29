import { Audio } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderContainer>
      <Audio color="#00BFFF" height={80} width={80} />;
    </LoaderContainer>
  );
};

export default Loader;

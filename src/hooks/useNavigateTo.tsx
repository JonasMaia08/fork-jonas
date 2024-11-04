import { useNavigate } from "react-router-dom";

const useNavigateTo = () => {
  const adress = useNavigate();

  const navigate = (path:string): any => {
    adress(path);
  };

  return navigate;
};

export default useNavigateTo;


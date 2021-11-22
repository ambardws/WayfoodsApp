import { useNavigate, Outlet, useLocation, Link} from "react-router-dom";
import { useEffect, useState } from "react";

// create component here
const PrivateRoute = (props) => {
  // Declare Variable for check status
  const [login, setLogin] = useState(false);
  console.log(props)

  //Component Did Update
  useEffect(() => {
    setLogin(props)
  }, [login]);

  let Navigate = useNavigate();
  let location = useLocation();

  if (!login) {
    return <Link to="/" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateRoute;

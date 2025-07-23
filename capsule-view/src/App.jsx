import "./styles/App.css";
import react from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import MyRoutes from "./routes/routes";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <MyRoutes />
    </div>
  );
};

export default App;

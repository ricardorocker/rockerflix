import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RoutesApp />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;

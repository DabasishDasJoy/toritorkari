import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/publicRoutes/router";

function App() {
  return (
    <div className="font-rubik">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/publicRoutes/router";
function App() {
  // const [preLoading, setPreLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setPreLoading(false), 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="font-rubik max-w-screen-2xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

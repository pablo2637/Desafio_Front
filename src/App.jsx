import { useSelector } from "react-redux";
import { PublicRoutes } from "./Routers/";
import { NavBar } from "./Public/Components/NavBar";

function App() {

  const { user, status, errorMessage } = useSelector(state => state.user)

  return (

    <>

      <header>
        <NavBar/>
      </header>

      <main>

        <PublicRoutes />

      </main>

      <footer>

      </footer>

    </>

  );
};

export default App

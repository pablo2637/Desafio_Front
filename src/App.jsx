import { useSelector } from "react-redux";
import { PublicRoutes } from "./Routers/";
import { NavBar } from "./Public/Components/NavBar";
import { NavBarUser } from "./Private/Components/NavBarUser";

function App() {

  const { user, status, errorMessage } = useSelector(state => state.user)

  return (

    <>

      <header>
        <NavBarUser/>
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

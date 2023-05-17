import { useSelector } from "react-redux";
import { PublicRoutes } from "./Routers/";


function App() {

  const { user, status, errorMessage } = useSelector(state => state.user)

  return (

    <>

      <header>

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

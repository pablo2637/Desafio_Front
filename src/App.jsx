import { useSelector } from "react-redux";
import { AdminRouters, PlaceRouters, PrivateRouters, PublicRouters } from "./Routers/";
import { NavBar } from "./Public/Components/";
import { NavBarUser } from "./Private/Components/NavBarUser";
import { NavBarPlace } from "./Places/Components";
import { useState } from "react";

function App() {

  const { user, status, errorMessage, prevPoints } = useSelector(state => state.user);

  const [qr, setQr] = useState(false);

  return (

    <>

      <header>


        
        {
          (status === 'authenticated') ?

            (user.role == 'user') ?
              <NavBarUser qr={qr} setQr={setQr} user={user} prevPoints={prevPoints}/>

              :
              (user.role == 'place') ?
                <NavBarPlace />

                :
                <NavBarUser />

            :
            <NavBar />
            
        }


      </header>

      {/* className="bg-[#fafafa]" */}
      <main className="max-w-screen-sm mx-auto">
        {/* <p>user: {user?.role}</p>
        <p>status: {status}</p> */}
        {
          (status === 'authenticated') ?

            (user.role == 'user') ?
              <PrivateRouters />

              :
              (user.role == 'place') ?
                <PlaceRouters />

                :
                <AdminRouters />

            :
            <PublicRouters />
        }

      </main>

      <footer className="bg-[#fafafa]">

      </footer>

    </>

  );
};

export default App

import { useSelector } from "react-redux";
import { AdminRouters, PlaceRouters, PrivateRouters, PublicRouters } from "./Routers/";
import { NavBar } from "./Public/Components/";
import { NavBarUser } from "./Private/Components/NavBarUser";
import { NavBarPlace } from "./Places/Components";
import { useState } from "react";
import { NavBarAdmin } from "./Admin/Components/NavBarAdmin";

function App() {

  const { user, status, prevPoints } = useSelector(state => state.user);

  const [qr, setQr] = useState(false);

  return (

    <>

      <header>



        {
          (status === 'authenticated') ?

            (user.role == 'user') ?
              <NavBarUser qr={qr} setQr={setQr} user={user} prevPoints={prevPoints} />

              :
              (user.role == 'place') ?
                <NavBarPlace />

                :
                <NavBarAdmin />

            :
            <NavBar />

        }


      </header>

      <main className="max-w-screen-sm mx-auto">

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

import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/profile";

function App() {


  let { loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <Profile />
      <button onClick={() => loginWithRedirect()}>Login</button>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </>
  );
}

export default App;

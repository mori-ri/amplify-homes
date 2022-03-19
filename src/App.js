import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { CardBCollection, NavBar, MarketingFooter } from "./ui-components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      {/* <SideNavigation /> */}
      <CardBCollection />
      <CardBCollection />
      <MarketingFooter />
    </div>
  );
}

export default App;

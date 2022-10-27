import { useState } from "react";
import RoutePrivate from "./Private/RoutePrivate";
import RoutePublic from "./Public/RoutePublic";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? <RoutePublic /> : <RoutePrivate />}
    </div>
  );
};

export default App;

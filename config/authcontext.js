import { createContext } from "react";

const AuthContext = createContext({
  authenticated: false, // to check if authenticated or not
  user: {
    

  },
  setUser: () => { },
//   switchAccount: (acc) => { },
  logOut: () => { }, // logout the user from cognito
});

export default AuthContext
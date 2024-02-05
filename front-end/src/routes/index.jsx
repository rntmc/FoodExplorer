import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes(){
  const { user, signOut } = useAuth();

  useEffect(() => {
    api
      .get("/users/validated")
      .catch((error) => {
        if(error.response?.status === 401) {
          signOut();
        }
      })
  }, []);

  function AccessRoute() {
    switch(user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>;
      case USER_ROLE.USER:
        return <UserRoutes/>
        default: 
          return <UserRoutes/>
    }
  }

  return(
    <BrowserRouter>
      { user ? <AccessRoute/> : < AuthRoutes/>}
    </BrowserRouter>
  )
}
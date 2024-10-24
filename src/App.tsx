import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import { AppHeader } from "./components/AppHeader";
import { ProtectedRouteElement } from "./components/ProtectedRouteElement";
import { useAppData } from "./hooks/useAppData";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Ingredient } from "./pages/Ingredient";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";
import { SignIn } from "./pages/SignIn";

function App() {
  useAppData()

  return (
    <div className="container">
      <AppHeader />
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/profile" element={<ProtectedRouteElement element={<Profile />} />}/>
          <Route path="/ingredients">
            <Route path=":ingredientId" element={<Ingredient />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

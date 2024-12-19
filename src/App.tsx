import { Route, Routes, useLocation } from 'react-router-dom'

import { AppHeader } from './components/AppHeader'
import { FeedDetailsModal } from './components/FeedDetailsModal'
import { IngredientDetailsModal } from './components/IngredientDetailsModal'
import { ProtectedRouteElement } from './components/ProtectedRouteElement'
import { useAppData } from './hooks/useAppData'
import { Feed } from './pages/Feed'
import { FeedById } from './pages/FeedById'
import { ForgotPassword } from './pages/ForgotPassword'
import { Ingredient } from './pages/Ingredient'
import { Main } from './pages/Main'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'
import { ResetPassword } from './pages/ResetPassword'
import { SignIn } from './pages/SignIn'

function App() {
  useAppData()

  const location = useLocation()
  const background = location.state && location.state.background
  const backgroundFeed = location.state && location.state.backgroundFeed

  return (
    <div className="container">
      <AppHeader />
      <Routes location={background || backgroundFeed || location}>
        <Route path="/" element={<Main />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<Profile />} />}>
          <Route
            path="orders"
            element={<ProtectedRouteElement element={<Profile />} />}
          />
          <Route path="orders:ordersId" element={null} />
        </Route>
        <Route path="/ingredients">
          <Route path=":ingredientId" element={<Ingredient />} />
        </Route>
        <Route path="/feed">
          <Route path=":feedId" element={<FeedById />} />
        </Route>
      </Routes>
      <Routes>
        {background && (
          <Route
            path="/ingredients/:ingredientId"
            element={<IngredientDetailsModal />}
          />
        )}
        <Route path="*" element={null} />
      </Routes>
      <Routes>
        {backgroundFeed && (
          <Route path="/feed/:feedId" element={<FeedDetailsModal />} />
        )}
        <Route path="*" element={null} />
      </Routes>
    </div>
  )
}

export default App

import { Route, Routes as ReactRoutes } from "react-router-dom"
import Layout from "./components/layout"
import Alarm from "./pages/alarm"
import Audio from "./pages/audio"
import Article from "./pages/article"
import DetailArticle from "./pages/article/DetailArticle"
import Login from "./pages/auth/Login"
import PrivateRoute from "./components/layout/PrivateRoute"
import ChangePassword from "./pages/auth/ChangePassword"
import Profile from "./pages/profile"
import Setting from "./pages/setting"

function App() {
  return (
    <ReactRoutes>
      <Route exact path='*' element={<Login />} />
      <Route exact path='/' element={<Login />} />
      <Route exact path='/change-password' element={<ChangePassword />} />
      <Route element={<Layout />}>
        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/alarm' element={<Alarm />} />
          <Route exact path='/audio' element={<Audio />} />
          <Route exact path='/article' element={<Article />} />
          <Route exact path='/article/:title' element={<DetailArticle />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/setting' element={<Setting />} />
        </Route>
      </Route>
    </ReactRoutes>
  )
}

export default App

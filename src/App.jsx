import { Route, Routes } from "react-router-dom"
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
import { App as CapacitorApp } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';

function App() {
  CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  CapacitorApp.addListener('appStateChange', async ({ isActive }) => {
    console.log('App state changed. Is active?', isActive);
    if(isActive) {
      const permissions = await LocalNotifications.checkPermissions();
      if (permissions.display !== 'granted') {
        await LocalNotifications.requestPermissions();
      }
    }
  });

  const appStart = async function () {
    const permissions = await LocalNotifications.checkPermissions();
    if (permissions.display !== 'granted') {
      await LocalNotifications.requestPermissions();
    }

    const result = await LocalNotifications.listChannels();
    if (result.channels.find(ch => ch.id === 'alarm') === undefined) {
      await LocalNotifications.createChannel({
        id: 'alarm',
        name: 'Alarm',
        sound: 'alarm.wav',
        lightColor: '#f49c21',
        importance: 4,
        visibility: 1,
        vibration: true,
        lights: true
      });
    }
  }

  appStart();

  return (
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/change-password' element={<ChangePassword />} />
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route index element={<Alarm />} />
          <Route exact path='/audio' element={<Audio />} />
          <Route exact path='/article' element={<Article />} />
          <Route exact path='/article/:title' element={<DetailArticle />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/setting' element={<Setting />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

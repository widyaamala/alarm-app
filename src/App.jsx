import { Route, Routes as ReactRoutes } from "react-router-dom"
import Layout from "./components/layout"
import Alarm from "./pages/alarm"
import Audio from "./pages/audio"
import Article from "./pages/article"
import DetailArticle from "./pages/article/DetailArticle"

function App() {
  return (
    <ReactRoutes>
      <Route element={<Layout />}>
        <Route exact path='*' element={<Alarm />} />
        <Route exact path='/alarm' element={<Alarm />} />
        <Route exact path='/audio' element={<Audio />} />
        <Route exact path='/article' element={<Article />} />
        <Route exact path='/article/:title' element={<DetailArticle />} />
      </Route>
    </ReactRoutes>
  )
}

export default App

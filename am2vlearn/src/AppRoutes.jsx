import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Welcome from "./pages/Welcome/Welcome.jsx"
import LogIn from "./pages/Login&Signin/LogIn.jsx"
import SubjectMenu from "./pages/SubjectMenu/SubjectMenu.jsx"
import DownloadContent from "./pages/DownloadContent/DownloadContent.jsx"
import SignIn from "./pages/Login&Signin/SignIn.jsx"
import GameHtml from './pages/Games/GameHtml/GameHtml.jsx'
import GameCss from './pages/Games/GameCss/GameCss.jsx'
import GameJs from './pages/Games/GameJs/GameJs.jsx'
import GameAll from './pages/Games/GameAll/GameAll.jsx'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Welcome />}/>
                <Route path = "/login" element = {<LogIn />}/>
                <Route path = "/signin" element = {<SignIn />}/>
                <Route path = "/subjectmenu" element = {<ProtectedRoute element = {<SubjectMenu />}/>}/>
                <Route path = "/downloadcontent" element = {<ProtectedRoute element = {<DownloadContent />}/>}/>
                <Route path = "/gamehtml" element = {<ProtectedRoute element = {<GameHtml />}/>}/>
                <Route path = "/gamecss" element = {<ProtectedRoute element = {<GameCss />}/>}/>
                <Route path = "/gamejs" element = {<ProtectedRoute element = {<GameJs />}/>}/>
                <Route path = "/gameall" element = {<ProtectedRoute element = {<GameAll />}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
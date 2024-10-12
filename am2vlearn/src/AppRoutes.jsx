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
                <Route path = "/subjectmenu" element = {<ProtectedRoute><SubjectMenu /></ProtectedRoute>}/>
                <Route path = "/downloadcontent" element = {<ProtectedRoute><DownloadContent /></ProtectedRoute>}/>
                <Route path = "/gamehtml" element = {<ProtectedRoute><GameHtml /></ProtectedRoute>}/>
                <Route path = "/gamecss" element = {<ProtectedRoute><GameCss /></ProtectedRoute>}/>
                <Route path = "/gamejs" element = {<ProtectedRoute><GameJs /></ProtectedRoute>}/>
                <Route path = "/gameall" element = {<ProtectedRoute><GameAll /></ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}
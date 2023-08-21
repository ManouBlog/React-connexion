// Dependencies
import { Routes, Route } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Error404 from './components/Error404'
import DetailContact from './components/DetailContact'
const AppRoutes = () => (
<App>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />}/>
<Route path="/detail/:contactId" element={<DetailContact />} />
<Route path="*" element={<Error404 />} />
</Routes>
</App>
)
export default AppRoutes
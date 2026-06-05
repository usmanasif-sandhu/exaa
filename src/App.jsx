import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Campuses from './pages/Campuses'
import StudentLife from './pages/StudentLife'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="campuses" element={<Campuses />} />
        <Route path="student-life" element={<StudentLife />} />
        <Route path="contact" element={<Contact />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
    </Routes>
  )
}

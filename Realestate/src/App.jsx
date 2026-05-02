import { Routes, Route } from 'react-router-dom'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
     
      <Route path="/"                element={<Home />} />
      <Route path="/properties"      element={<Properties />} />
      <Route path="/about"           element={<About />} />
      <Route path="/contact"         element={<Contact />} />

      
      <Route
        path="/properties/:id"
        element={
          <>
            <SignedIn>
              <PropertyDetail />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  )
}

export default App
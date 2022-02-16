import React from 'react'
import './app.css'

import { Footer, Resume, Projects, AboutMe, Header } from './containers'
import { Brand,Navbar } from './components'

const App = () => {
  return (
    <div className="App">
       <div className="gradient__bg">
           <Navbar />
           <Header />
       </div>
       <Brand />
       <AboutMe />
       <Resume />
       {/* <Projects /> */}
       <Footer />
    </div>
  )
}

export default App
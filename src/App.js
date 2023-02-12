import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './shared/Navbar';
import About from './views/About';
import Projects from './views/Projects';
import theme from './shared/Theme'
import './App.css'
import ProjectCard from './components/ProjectCard';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}>
          <Route path=':projectId' element={<ProjectCard/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Home } from './Pages/Home'

function App() {
return (
    <div className='w-full'>
      <Layout>
        <Home/>
      </Layout>
    </div>
  )
}

export default App

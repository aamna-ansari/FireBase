
import React from 'react'
import './App.scss'
import { ConfigProvider } from 'antd'
import Routes from './pages/Routes'

function App() {
  

  return (
    <>
    <ConfigProvider theme={{token:{colorPrimary: '#1d3557'}}}>
      <Routes/>

    </ConfigProvider>

    </>
  )
}

export default App

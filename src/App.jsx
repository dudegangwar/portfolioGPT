import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <div className='container-app'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import Menu from '../menu/Menu'
import '../menu/menu.css'

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Menu />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout

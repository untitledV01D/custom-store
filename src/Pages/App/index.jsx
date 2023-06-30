import { useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { MyAccount } from '../myAccount'
import './App.css'

function App() {
  return (
      <div className='bg-yellow-100'>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SignIn />
      </div>
  )
}

export default App

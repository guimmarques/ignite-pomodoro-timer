import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefautLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="history" element={<History />}></Route>
      </Route>
    </Routes>
  )
}

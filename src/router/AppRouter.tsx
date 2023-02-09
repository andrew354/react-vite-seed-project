import { Route, Routes } from 'react-router-dom'
import Landing from '@/pages/Landing'

export const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Landing />} />
    </Routes>
  )
}

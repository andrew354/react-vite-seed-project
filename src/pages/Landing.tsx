import { useTranslation } from 'react-i18next'
import reactLogo from '@/assets/react.svg'
import Navbar from '@/components/Navbar/Navbar'

const Landing = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <h1>Landing page</h1>
      <img src={reactLogo} alt="reactLogo" />
    </>
  )
}

export default Landing

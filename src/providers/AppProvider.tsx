import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import i18n from '@/i18n/config'

const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  )
}

function loadLanguageBasedOnBrowser() {
  const browserLanguage = navigator.language
  const language = i18n.languages.find((lang: string) => lang === browserLanguage)
  return language || 'en'
}

async function changeLanguage(language: string) {
  await i18n.changeLanguage(language)
}

export const AppProvider = ({ children }: { children: React.ReactElement }) => {
  changeLanguage(loadLanguageBasedOnBrowser())

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>{children}</BrowserRouter>
    </ErrorBoundary>
  )
}

import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import PortfolioCard from "./components/PortfolioCard"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  const addedToPortfolio = useCryptoStore((state) => state.addedToPortfolio)
  const updatePortfolio = useCryptoStore((state) => state.updatePortfolio)
  const portfolio = useCryptoStore((state) => state.portfolio)
  const currency = useCryptoStore((state) => state.currency)

  useEffect(() => {
    fetchCryptos()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      portfolio.forEach((coin) => {
        updatePortfolio({
          currency: currency,
          cryptocurrency: coin.CRYPTOCURRENCY,
        })
      })
    }, 60000)
    console.log('update')
    return () => clearInterval(interval)

  }, [portfolio, currency, updatePortfolio]);
  
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="cards">
          <div className="content">
            <CryptoSearchForm/>
            {!addedToPortfolio && <CryptoPriceDisplay/>}
          </div>
          <PortfolioCard/>
        </div>
      </div>
    </>
  )
}

export default App

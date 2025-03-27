import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import PortfolioCard from "./components/PortfolioCard"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  const addedToPortfolio = useCryptoStore((state) => state.addedToPortfolio)

  useEffect(() => {
    fetchCryptos()
  }, [])

  setTimeout(() => {
    
  }, 10000);
  
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

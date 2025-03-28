import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function PortfolioCard() {

    const portfolio = useCryptoStore((state) => state.portfolio)
    const deleteCrypto = useCryptoStore((state) => state.deleteCrypto)

    const variation = useMemo(() => {
        if (portfolio.length === 0) return 0 // Si no hay datos, la variación es 0
        const totalVariation = portfolio.reduce((acc, crypto) => acc + +crypto.CHANGEPCT24HOUR, 0)
        return totalVariation / portfolio.length // Promedio de la variación
    }, [portfolio])

    return (
        <div className="portfolio-card">
            <h2>Portfolio &#128176;</h2>
            {portfolio.length !== 0 ? 
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Moneda</th>
                                <th>Precio</th>
                                <th>HPD &#128314;</th>
                                <th>LPD &#128315;</th>
                                <th>24h %</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolio.map((result, index) => (
                                <tr key={index} onClick={() => deleteCrypto(index)}>
                                    <td>{result.CRYPTOCURRENCY}</td>
                                    <td>{result.PRICE}</td>
                                    <td>{result.HIGHDAY}</td>
                                    <td>{result.LOWDAY}</td>
                                    <td>{result.CHANGEPCT24HOUR}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>Su portafolio ha variado en las ultimas 24h un{' '} 
                        <span className={variation>0 ? 'green':'red'}>
                            {variation.toFixed(2)}%
                        </span>
                    </p>
                </div>
            : 
                <p>Agrega criptomonedas a tu portfolio...</p>
            }
        </div>
    )
}
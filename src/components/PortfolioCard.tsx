import { useCryptoStore } from "../store"

export default function PortfolioCard() {

    const portfolio = useCryptoStore((state) => state.portfolio)

    return (
        <div className="portfolio-card">
            <h2>Portfolio</h2>
            {portfolio.length !== 0 ? 
                <table>
                    <thead>
                        <tr>
                            <th>Moneda</th>
                            <th>Precio</th>
                            <th>HPD</th>
                            <th>LPD</th>
                            <th>24h %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolio.map((result, index) => (
                            <tr key={index} onClick={() => console.log(index)}>
                                <td>{result.CRYPTOCURRENCY}</td>
                                <td>{result.PRICE}</td>
                                <td>{result.HIGHDAY}</td>
                                <td>{result.LOWDAY}</td>
                                <td>{result.CHANGEPCT24HOUR}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            : 
                <p>Agrega criptomonedas a tu portfolio...</p>
            }
        </div>
    )
}
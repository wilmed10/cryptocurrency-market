import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    
    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const addPortfolio = useCryptoStore((state) => state.addPortfolio)
    const hasResult = useMemo(() => Object.keys(result).length>0 , [result] )
    
    return (
        <div className="result-wrapper">
            {loading ? <Spinner/> : hasResult && (
                <>
                    <h2>Cotización:</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen crypto"
                        />
                        <div className="">
                            <p>Precio: <span>{result.PRICE}</span></p>
                            <p>Valor mas alto del dia: <span>{result.HIGHDAY}</span></p>
                            <p>Valor mas bajo del dia: <span>{result.LOWDAY}</span></p>
                            <p>Variacion del precio ultimas 24h: <span>{result.CHANGEPCT24HOUR}%</span></p>
                            <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                    <div className="btn">
                        <button
                            type="button"
                            onClick={() => addPortfolio(result)}
                        >Agregar al Portfolio</button>
                    </div>
                </>
            )}
        </div>
    )
}

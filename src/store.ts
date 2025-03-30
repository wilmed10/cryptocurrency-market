import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoCurrency, CryptoPrice, CryptoPricePortfolio, Pair } from './types'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoServices'

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    loading: boolean
    portfolio: CryptoPricePortfolio[]
    currency: string
    cryptoCurrency: string
    addedToPortfolio: boolean
    setCurrency: (pairCurrency: string) => Promise<void>
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
    addPortfolio: (cryptoP: CryptoPrice) => Promise<void>
    deleteCrypto: (index: number) => Promise<void>
    updatePortfolio: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    
    cryptoCurrencies: [],

    result: {} as CryptoPrice,

    loading: false,

    currency: localStorage.getItem('currency') || '',
    
    cryptoCurrency: '',

    portfolio: JSON.parse(localStorage.getItem('portfolio') || '[]'),

    addedToPortfolio: false,

    setCurrency: async (pairCurrency) => {
        set(() => ({
            currency: pairCurrency
        }))
        localStorage.setItem('currency', pairCurrency);
    },

    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },

    fetchData: async (pair) => {
        set(() => ({
            loading: true,
            addedToPortfolio: false,
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false,
            cryptoCurrency: pair.cryptocurrency
        }))
    },

    addPortfolio: async (cryptoP) => {
        set((state) => {
            const updatedPortfolio = [
                ...state.portfolio,
                {
                    ...cryptoP,
                    CRYPTOCURRENCY: state.cryptoCurrency
                },
            ];

            localStorage.setItem('portfolio', JSON.stringify(updatedPortfolio));
            
            return {
                portfolio: updatedPortfolio,
                cryptoCurrency: '',
                addedToPortfolio: true
            };
        });
    },

    deleteCrypto: async (index) => {
        set((state) => ({
            portfolio: state.portfolio.filter( (_, i) => i !== index)
        }))
    },

    updatePortfolio: async (pair) => {
        const update = await fetchCurrentCryptoPrice(pair)
        set((state) => ({
            portfolio: state.portfolio.map((coin) =>
                coin.CRYPTOCURRENCY === pair.cryptocurrency
                    ? { ...coin, ...update }
                    : coin
            )
        }))
    }
})))
import { useEffect } from 'react'
import { usePriceTokyoBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const tokyoPriceUsd = usePriceTokyoBusd()

  const tokyoPriceUsdString = tokyoPriceUsd.eq(0)
    ? ''
    : ` - $${tokyoPriceUsd.toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    document.title = `TOKYOSWAP${tokyoPriceUsdString}`
  }, [tokyoPriceUsdString])
}
export default useGetDocumentTitlePrice

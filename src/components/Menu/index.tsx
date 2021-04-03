import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceTokyoBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@tokyoswap/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const tokyoPriceUsd = usePriceTokyoBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={tokyoPriceUsd.toNumber()}
      links={config}
      priceLink="https://pancakeswap.info/token/0x57067A6BD75c0E95a6A5f158455926e43E79BeB0"
      {...props}
    />
  )
}

export default Menu

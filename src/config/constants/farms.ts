import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'TOKYO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xbb98fc236f2979665991c6dee1a9d99e845ad211',
    },
    tokenSymbol: 'TOKYO',
    tokenAddresses: {
      97: '',
      56: '0x3f25F73707539a2393D673aBC99566D4dE2071d4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    lpSymbol: 'TOKYO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6187c5432706d085be734241fbb129a459874bca',
    },
    tokenSymbol: 'TOKYO',
    tokenAddresses: {
      97: '',
      56: '0x3f25F73707539a2393D673aBC99566D4dE2071d4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // temple
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'TOKYO',
    lpAddresses: {
      97: '',
      56: '0xbb98fc236f2979665991c6dee1a9d99e845ad211', // TOKYO-BUSD LP
    },
    tokenSymbol: 'TOKYO',
    tokenAddresses: {
      97: '',
      56: '0x3f25F73707539a2393D673aBC99566D4dE2071d4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

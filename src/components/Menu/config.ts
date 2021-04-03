import { MenuEntry } from '@tokyoswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3f25F73707539a2393D673aBC99566D4dE2071d4',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x3f25F73707539a2393D673aBC99566D4dE2071d4',
        external: true,
      },
    ],
  },
  {
    label: 'Shinjuku City',
    icon: 'ShinjukuCityIcon',
    href: '/shinjukucity',
  },
  {
    label: 'Sensō-ji Temple',
    icon: 'SensoJiTempleIcon',
    href: '/sensojitemple',
  },
  {
    label: 'Tokyo Sky Tree (SOON)',
    icon: 'TokyoSkyTreeIcon',
    href: '/tokyoskytree',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x3f25F73707539a2393D673aBC99566D4dE2071d4',
        external: true,
      },
    ],
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/tokyoswap',
    external: true,
  },
  {
    label: 'Blog',
    icon: 'MediumIcon',
    href: 'https://tokyoswap.medium.com',
    external: true,
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    external: true,
    href: '/files/techrateAudit.pdf',
  },
]

export default config

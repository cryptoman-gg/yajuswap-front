import React from 'react'
import { Card, CardBody, Heading, Text } from '@tokyoswap/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceTokyoBusd } from '../../../state/hooks'

const StyledTokyoStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TokyoStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const tokyoPrice = usePriceTokyoBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const tokyoSupply = getBalanceNumber(circSupply)
  const marketCap = tokyoPrice.times(circSupply)

  let tokyoPerBlock = 0
  if (farms && farms[0] && farms[0].tokyoPerBlock) {
    tokyoPerBlock = new BigNumber(farms[0].tokyoPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledTokyoStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'TOKYO Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total TOKYO Supply')}</Text>
          {tokyoSupply && <CardValue fontSize="14px" value={tokyoSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total TOKYO Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New TOKYO/block')}</Text>
          <Text bold fontSize="14px">
            {tokyoPerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledTokyoStats>
  )
}

export default TokyoStats

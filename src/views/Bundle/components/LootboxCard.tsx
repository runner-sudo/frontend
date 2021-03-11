import React from 'react'
import { Card, CardBody, Heading, Text, Flex, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'

const StyledCakeStats = styled(Card)`
  background-image: url(/images/lootbox-bg.png);
  background-size: 160px;
  background-repeat: no-repeat;
  background-position: top 24px right 24px;
  margin-left: auto;
  margin-right: auto;
`

const StyledLootboxContent = styled(Flex)`
  height: 184px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e9eaeb;
  padding-right: 50%;
`

const StyledLootboxHeader = styled(Heading)`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 5px;
`

const StyledLootboxDesc = styled(Text)`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: auto;
`

const StyledLootboxButton = styled(Button)`
  margin-top: auto;
  width: 100%;
`

const StyledLootboxDetails = styled(({ children, ...props }) => <div {...props}>{children}</div>)`
  details {
    font-size: 14px;
    line-height: 18px;
    font-weight: 100;
    color: #666;
  }

  details[open] summary {
    margin-bottom: 20px;
  }

  summary {
    list-style: none;

    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 20px;
    text-align: right;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    :focus {
      outline: none;
    }

    ::-webkit-details-marker {
      display: none;
    }
  }
`

const CakeStats = () => {
  const TranslateString = useI18n()

  return (
    <StyledCakeStats>
      <CardBody>
        <StyledLootboxContent flexDirection="column">
          <StyledLootboxHeader>{TranslateString(10101, 'Rulebreaker')}</StyledLootboxHeader>
          <StyledLootboxDesc>{TranslateString(10100, 'Lootbox')}</StyledLootboxDesc>
          <StyledLootboxButton>Open box</StyledLootboxButton>
        </StyledLootboxContent>
        <StyledLootboxDetails>
          <details>
            <summary>Hide</summary>
            PancakeSwap is a decentralized exchange running on Binance Smart Chain, with lots of other features that let
            you earn and win tokens.
          </details>
        </StyledLootboxDetails>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats

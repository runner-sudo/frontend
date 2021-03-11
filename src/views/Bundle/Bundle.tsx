import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import LootboxCard from './components/LootboxCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/hero-icon-1.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 180px 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/hero-icon-1.png'), url('/images/hero-icon-2.png');
    background-position: left center, right center;
    background-size: 180px 180px, 180px 180px;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" mb="14px" style={{ fontSize: '50px' }}>
          {TranslateString(576, 'BSC')}
          <i>{TranslateString(577, 'Runner')}</i>
        </Heading>
        <Text>{TranslateString(578, 'Across all Farms and Nests and Layers')}</Text>
      </Hero>
      <div>
        <Cards>
          <LootboxCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home

import styled from 'styled-components'

import Header from '../components/Header/Header'
import HeaderIconButton from '../components/Header/HeaderIconButton'
import Search from '../components/Search/Search'

function RootPage() {
  return (
    <PageContainer>
      <Header>
        <HeaderIconButton />
      </Header>
      <StyledSection>
        <div className="banner-inner">
          <StyledContainer>
            <H2>
              국내 모든 임상시험 검색하고
              <br />
              온라인으로 참여하기
            </H2>
            <Search />
          </StyledContainer>
        </div>
      </StyledSection>
    </PageContainer>
  )
}

export default RootPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.bannerBgColor};
  .banner-inner {
    @media screen and (min-width: 1040px) {
      max-width: 1040px;
    }
    @media screen and (max-width: 1040px) {
      max-width: 80%;
    }
    width: 100%;
    padding: 80px 0 160px;
  }
`

const H2 = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-bottom: 40px;
  max-width: 1040px;
  @media screen and (min-width: 1040px) {
    font-size: 2.125rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 auto;
`

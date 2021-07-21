import styled from '@emotion/styled'

import DotBG from '@/images/DotBG.png'
import { mediaSizes } from '@/helpers'

export const FirstSection = styled.section`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
`
export const FirstTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    margin: 0 0 16px 0;

    ${mediaSizes.S} {
        width: 100%;
        flex-direction: column;
        margin: 0 0 28px 0;
    }
`
export const FirstH1 = styled.h1`
    font-family: Raleway, sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 8px 0 0;

    ${mediaSizes.S} {
        font-size: 32px;
        line-height: 40px;
        margin: 0 0 16px 0;
    }
`
export const FirstBody = styled.p`
    max-width: 800px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;

    color: ${props => props.theme.colors.light.black};

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0;

    ${mediaSizes.S} {
        font-size: 16px;
        line-height: 28px;
    }
`

export const SecondSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0;
    position: relative;
    margin: 128px 0 0 0;

    ${mediaSizes.S} {
        margin: 92px 0 0 0;
        flex-direction: column;
        align-items: center;
    }
`
export const SecondContent = styled.div`
    max-width: 893px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    ${mediaSizes.S} {
        margin: 0 0 60px 0;
    }
`
export const SecondH2 = styled.h2`
    font-family: Raleway, sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 0 16px 0;

    ${mediaSizes.S} {
        font-size: 24px;
        line-height: 32px;
        margin: 0 0 32px 0;
    }
`
export const SecondOl = styled.ol`
    padding: 0 0 0 20px;
    margin: 0;
`
export const SecondBody = styled.li`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    font-feature-settings: 'tnum' on, 'lnum' on;
    padding-bottom: 12px;

    :last-of-type {
        padding: 0;
    }

    color: ${props => props.theme.colors.light.black};

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0;

    ${mediaSizes.S} {
        font-size: 16px;
        line-height: 28px;
    }
`
export const SecondComment = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    max-width: 415px;
`

export const ThirdSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
`
export const ThirdH2 = styled.h2`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 120px 0 52px 0;

    ${mediaSizes.S} {
        font-size: 24px;
        line-height: 32px;
        margin: 92px 0 32px 0;
        text-align: left;
    }
`
export const ThirdContent = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
    flex: none;
    order: 1;
    flex-grow: 0;

    ${mediaSizes.S} {
        flex-direction: column;
    }
`

export const FourthSection = styled.section`
    position: relative;
    margin: 120px 0 0 0;
    padding: 140px 0 120px 0;
    background-image: url(${DotBG});
    background-size: 16px;

    ${mediaSizes.S} {
        margin: 92px 0 0 0;
        padding: 72px 0 120px 0;
    }
`
export const FourthContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
`
export const FourthH2 = styled.h2`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #202020;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 0 52px 0;

    ${mediaSizes.S} {
        font-size: 24px;
        line-height: 32px;
        margin: 0 0 32px 0;
        text-align: left;
    }
`
export const FourthArticle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;

    min-width: 100%;

    ${mediaSizes.S} {
        flex-direction: column;
    }
`

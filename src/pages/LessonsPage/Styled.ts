import styled from '@emotion/styled'
import { mediaSizes } from '@/helpers'

export const FirstSection = styled.section`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 88px 0;
    ${mediaSizes.S} {
        margin: 0 0 92px 0;
    }
`
export const FirstTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    flex: none;
    order: 0;
    flex-grow: 0;
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
    max-width: 600px;
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
`

export const TabberBox = styled.div`
    z-index: 10;

    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    border: 2px none ${props => props.theme.colors.light.add};
    border-bottom-style: solid;
    box-sizing: border-box;

    background: ${props => props.theme.colors.light.bg};

    position: sticky;
    top: 58px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 120px 0;
    position: relative;
    min-width: 100%;
`

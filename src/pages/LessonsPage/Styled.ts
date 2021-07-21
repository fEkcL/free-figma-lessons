import styled from '@emotion/styled'

export const FirstSection = styled.section`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin: 88px 0px;
`
export const FirstTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px 16px 0px;
`
export const FirstH1 = styled.h1`
    font-family: Raleway;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px 0px 0px;
`
export const FirstBody = styled.p`
    max-width: 800px;
    font-family: Roboto;
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
    padding: 0px;
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
    margin: 0px 0px 120px 0px;
    position: relative;
    min-width: 100%;
`

import styled from '@emotion/styled'

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 120px;
    padding: 0;
`

export const Menu = styled.div`
    position: sticky;
    top: 80px;
    align-self: flex-start;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    width: 396px;
    margin: 0 88px 0 0;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: 748px;
`
export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    margin-bottom: 48px;
    :last-of-type {
        margin: 0;
    }
`
export const BlockText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
`
export const BlockTextTitle = styled.h3`
    margin: 0 0 12px 0;
    padding: 0;

    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};
`
export const BlockTextText = styled.p`
    margin: 0;
    padding: 0;

    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;

    margin-top: 26px;
`
export const ButtonSpan = styled.span`
    margin-right: 12px;
    :last-of-type {
        margin: 0;
    }
`

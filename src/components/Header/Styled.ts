import styled from '@emotion/styled'
import { TRANSITION } from '@/helpers/defaultStyles'
import { mediaSizes } from '@/helpers'

interface WrapperProps {
    isShow: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    transition: ${TRANSITION};

    z-index: 20;

    position: sticky;
    top: ${props => (props.isShow ? 0 : -60)}px;
    background-color: ${props => props.theme.colors.light.bg};
    min-width: 100%;
    border: 1.4px none ${props => props.theme.colors.light.add};
    border-bottom-style: solid;
    box-sizing: border-box;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    flex: none;
    order: 2;
    flex-grow: 1;
    margin: 0 0 0 16px;
`

export const Logo = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px 12px 0;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0 0;
    border: 1px none ${props => props.theme.colors.light.add};
    border-right-style: solid;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
`

export const BayACoffee = styled.a`
    text-decoration: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;

    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.24px;
    text-align: center;

    cursor: pointer;
    :focus {
        outline: none;
    }

    color: ${props => props.theme.colors.light.black};
    background-color: transparent;

    transition: ${TRANSITION};

    &:hover {
        color: ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        color: ${props => props.theme.colors.interactive.pressed};
    }
`

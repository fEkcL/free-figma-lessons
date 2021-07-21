import styled from '@emotion/styled'
import { TRANSITION } from '@/helpers/defaultStyles'

export const LeadingIcon = styled.span`
    display: flex;
    align-items: center;
    margin: 0px 4px 0px 0px;
`

export const TrailingIcon = styled.span`
    display: flex;
    align-items: center;
    margin: 0px 0px 0px 12px;
`

export const Marker = styled.button`
    cursor: pointer;
    :focus {
        outline: none;
    }

    margin: 0px 12px 0px 0px;
    :last-child {
        margin: 0px;
    }

    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4.8px 12px;

    border: 1.4px solid ${props => props.theme.colors.interactive.default};
    box-sizing: border-box;
    border-radius: 8px;

    color: ${props => props.theme.colors.interactive.default};
    background-color: transparent;

    text-decoration: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    letter-spacing: -0.2px;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    transition: ${TRANSITION};

    &:hover {
        border: 1.4px solid ${props => props.theme.colors.interactive.hover};
        color: ${props => props.theme.colors.light.white};
        background-color: ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        border: 1.4px solid ${props => props.theme.colors.interactive.pressed};
        color: ${props => props.theme.colors.light.white};
        background-color: ${props => props.theme.colors.interactive.pressed};
    }
`

export const Href = styled.a`
    margin: 0px 12px 0px 0px;
    :last-child {
        margin: 0px;
    }
    text-decoration: none;
`

import styled from '@emotion/styled'
import { TRANSITION } from '@/helpers/defaultStyles'
import { mediaSizes } from '@/helpers'

export const TrailingIcon = styled.span`
    display: flex;
    align-items: center;
    margin: 0 0 0 12px;
`

interface UPButtonProps {
    opacity: number
}

export const UPButton = styled.button<UPButtonProps>`
    transition: ${TRANSITION};

    opacity: ${props => props.opacity};

    display: flex;
    align-items: center;
    flex-direction: row;
    position: fixed;
    z-index: 10;
    bottom: 20px;
    right: 140px;
    border: none;
    border-radius: 4px;
    padding: 12px 16px 12px 16px;

    ${mediaSizes.S} {
        display: none;
    }

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

    color: ${props => props.theme.colors.light.white};
    background-color: ${props => props.theme.colors.interactive.default};

    transition: ${TRANSITION};

    &:hover {
        background-color: ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        background-color: ${props => props.theme.colors.interactive.pressed};
    }
`

import styled from '@emotion/styled'
import { TRANSITION } from '@/helpers/defaultStyles'
import { mediaSizes } from '@/helpers'

export const LeadingIcon = styled.span`
    display: flex;
    align-items: center;
    margin: 0 4px 0 0;
`
export const TrailingIcon = styled.span`
    display: flex;
    align-items: center;
    margin: 0 0 0 12px;
`

interface ButtonProps {
    textColor: string
}
export const Fill = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;
    border: none;
    border-radius: 8px;
    padding: 12px 16px 12px 16px;

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
    border: 1.6px solid ${props => props.theme.colors.interactive.default};

    transition: ${TRANSITION};

    &:hover {
        background-color: ${props => props.theme.colors.interactive.hover};
        border: 1.6px solid ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        background-color: ${props => props.theme.colors.interactive.pressed};
        border: 1.6px solid ${props => props.theme.colors.interactive.pressed};
    }
`
export const Stroke = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 8px;
    padding: 12px 16px 12px 16px;

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

    border: 1.6px solid ${props => props.theme.colors.interactive.default};
    box-sizing: border-box;

    color: ${props => props.theme.colors.interactive.default};
    background-color: transparent;

    transition: ${TRANSITION};

    &:hover {
        border: 1.6px solid ${props => props.theme.colors.interactive.hover};
        color: ${props => props.theme.colors.light.white};
        background-color: ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        border: 1.6px solid ${props => props.theme.colors.interactive.pressed};
        color: ${props => props.theme.colors.light.white};
        background-color: ${props => props.theme.colors.interactive.pressed};
    }

    ${mediaSizes.S} {
        width: 100%;
    }
`
export const Text = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    flex-direction: row;
    border: none;
    padding: 12px 16px 12px 16px;

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

    color: ${props => props.textColor};
    background-color: transparent;

    transition: ${TRANSITION};

    &:hover {
        color: ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        color: ${props => props.theme.colors.interactive.pressed};
    }
`
export const TextInText = styled.button`
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    border: none;
    padding: 0 16px 0 16px;

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

    color: ${props => props.theme.colors.interactive.default};
    background-color: transparent;

    transition: ${TRANSITION};

    &:hover {
        color: ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        color: ${props => props.theme.colors.interactive.pressed};
    }
`

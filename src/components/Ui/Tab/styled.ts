import styled from '@emotion/styled'
import { TRANSITION } from '@/helpers/defaultStyles'

export const LeadingIcon = styled.span`
    display: flex;
    align-items: center;
    margin: 0px 4px 0px 0px;
`

interface TabProps {
    borderColor?: string
    textColor?: string
}
export const Tab = styled.button<TabProps>`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 12px 16px 12px 16px;
    border: 2px none ${props => props.borderColor};
    border-bottom-style: solid;

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
        border: 2px none ${props => props.theme.colors.interactive.hover};
        border-bottom-style: solid;
    }

    &:active {
        color: ${props => props.theme.colors.interactive.pressed};
        border: 2px none ${props => props.theme.colors.interactive.pressed};
        border-bottom-style: solid;
    }
`

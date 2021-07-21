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
export const Tab100 = styled.button<TabProps>`
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 12px 16px 12px 16px;
    border: 2px none ${props => props.borderColor};
    border-bottom-style: solid;

    width: 100%;

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

interface LessonButtonProps {
    borderColor: string
    textColor: string
}
export const LessonButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 100%;

    margin: 0px 0px 22px 0px;
    :last-of-type {
        margin: 0px;
    }
`
export const LessonButton = styled.button<LessonButtonProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;

    width: 100%;
    height: 60px;

    background-color: transparent;

    cursor: pointer;
    :focus {
        outline: none;
    }

    margin: 8px 0px 0px 0px;

    border: 1.6px solid ${props => props.borderColor};
    box-sizing: border-box;
    border-radius: 8px;

    color: ${props => props.textColor};

    transition: ${TRANSITION};

    &:hover {
        color: ${props => props.theme.colors.interactive.hover};
        border: 1.6px solid ${props => props.theme.colors.interactive.hover};
    }

    &:active {
        color: ${props => props.theme.colors.interactive.pressed};
        border: 1.6px solid ${props => props.theme.colors.interactive.pressed};
    }
`
export const LessonButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
`
export const LessonButtonNumber = styled.h4`
    width: 25px;

    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    line-height: 28px;

    display: flex;
    align-items: center;
    text-align: right;

    margin: 0px 26px 0px 0px;
    padding: 0px;
`
export const LessonButtonTitle = styled.h4`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    line-height: 28px;

    margin: 0px;
    padding: 0px;
`
export const LessonButtonTaberBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 8px;
    width: calc(100% - 16px);
    height: 44px;

    border: 2px none ${props => props.theme.colors.light.add};
    border-bottom-style: solid;
    box-sizing: border-box;
`

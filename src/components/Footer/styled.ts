import { TRANSITION } from '@/helpers/defaultStyles'
import styled from '@emotion/styled'
import { mediaSizes } from '@/helpers'

export const Feedback = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0 92px;
    width: 100%;
    background: #d8cffe;

    ${mediaSizes.S} {
        padding: 72px 0 92px 0;
    }
`
export const FeedbackWrapper = styled.div`
    width: 1142px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    ${mediaSizes.S} {
        width: 100%;
        flex-direction: column;
    }
`
export const FeedbackContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    max-width: 727px;

    ${mediaSizes.S} {
        margin: 0 16px;
        flex-direction: column;
    }
`
export const FeedbackTitle = styled.h2`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    margin: 0 0 16px 0;

    color: ${props => props.theme.colors.light.black};

    ${mediaSizes.S} {
        font-size: 24px;
        line-height: 32px;
        margin: 0 0 32px 0;
    }
`
export const FeedbackBody = styled.p`
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};

    ${mediaSizes.S} {
        font-size: 16px;
        line-height: 28px;
    }
`
export const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    ${mediaSizes.S} {
        margin: 32px 0 0 0;
        width: 100%;
    }
`
export const FeedbackFormTitle = styled.h4`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    margin: 0 0 20px 0;

    color: ${props => props.theme.colors.light.black};
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 312px;

    ${mediaSizes.S} {
        width: calc(100vw - 20px);
    }
`
export const Textarea = styled.textarea`
    border: 1.6px solid #202020;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 12px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    background-color: transparent;
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    cursor: pointer;
    :focus {
        outline: none;
    }

    resize: none;

    color: ${props => props.theme.colors.light.black}};
`
export const Button = styled.button`
    border: 0;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;

    width: 100%;

    border-radius: 8px;

    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    text-align: center;
    letter-spacing: -0.2px;
    font-feature-settings: 'pnum' on, 'lnum' on;
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

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    ${mediaSizes.S} {
        justify-content: space-between;
    }
`
export const Copyright = styled.h5`
    font-family: Raleway, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    text-align: center;

    color: ${props => props.theme.colors.light.black};
`

import styled from '@emotion/styled'
import { mediaSizes } from '@/helpers'

interface LessonCardProps {
    imgSrc: string
    bgColor: string
}
export const LessonPackCard = styled.div<LessonCardProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: 368px;
    border-radius: 16px;

    background: url(${props => props.imgSrc}), ${props => props.bgColor};
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 72%;

    box-shadow: 0 4px 28px rgba(8, 22, 49, 0.04), 0 0 4px rgba(7, 26, 66, 0.05),
        0 0 1px rgba(0, 0, 0, 0.04);

    :first-of-type {
        margin: 0 0 80px 0;
    }
    margin: 0 0 80px 0;
    :last-of-type {
        margin: 0;
    }

    ${mediaSizes.S} {
        background: ${props => props.bgColor};
        height: auto;
    }
`
export const LessonPackCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 472px;
    padding: 52px 52px 0 52px;
    ${mediaSizes.S} {
        padding: 20px 20px 20px 20px;
    }
`
export const LessonPackCardTitle = styled.h2`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.white};

    margin: 0 0 16px 0;

    ${mediaSizes.S} {
        font-size: 24px;
        line-height: 32px;
        margin: 0 0 32px 0;
    }
`
export const LessonPackCardBody = styled.p`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.white};

    margin: 0;
`
export const LessonPackCardButton = styled.div`
    padding: 0 52px 52px 52px;
    ${mediaSizes.S} {
        padding: 48px 20px 40px 20px;
    }
`

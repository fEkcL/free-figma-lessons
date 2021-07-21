import styled from '@emotion/styled'

interface LessonCardProps {
    imgSrc: string
    bgColor: string
}
export const LessonPackCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 472px;
    padding: 52px 52px 0px 52px;
`
export const LessonPackCardTitle = styled.h2`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.white};

    margin: 0px 0px 16px 0px;
`
export const LessonPackCardBody = styled.p`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.white};

    margin: 0px;
`
export const LessonPackCardCover = styled.section<LessonCardProps>`
    margin-top: 32px;
    margin-bottom: 88px;
    min-width: 100%;
    height: 248px;
    border-radius: 16px;
    background: url(${props => props.imgSrc}), ${props => props.bgColor};
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 72%;
    box-shadow: 0px 4px 28px rgba(8, 22, 49, 0.04), 0px 0px 4px rgba(7, 26, 66, 0.05),
        0px 0px 1px rgba(0, 0, 0, 0.04);
`

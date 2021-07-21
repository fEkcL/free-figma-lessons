import styled from '@emotion/styled'
import { mediaSizes } from '@/helpers'

interface ImageProps {
    src: string
}

export const ScreenCard = styled.div`
    max-width: 340px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0 12px 0 0;
    :last-child {
        margin: 0;
    }

    ${mediaSizes.S} {
        max-width: 100%;
        min-width: 100%;
        margin: 0 0 32px 0;
    }
`
export const ScreenCardCoverLabel = styled.h4`
    margin: 0;
    padding: 12px 0 0 12px;

    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.white};

    ${mediaSizes.S} {
        font-size: 16px;
        line-height: 28px;
    }
`
export const ScreenCardLabel = styled.div`
    max-width: 320px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 12px;

    margin: 12px 0 0 0;

    ${mediaSizes.S} {
        max-width: 100%;
        min-width: 100%;
    }
`
export const ScreenCardLabelBody = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};
`
export const ScreenCardCover = styled.div<ImageProps>`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: 338px;
    min-width: 100px;
    min-height: 152px;
    box-shadow: 0 4px 12px rgba(8, 22, 49, 0.05), 0 0 4px rgba(7, 26, 66, 0.05),
        0 0 1px rgba(0, 0, 0, 0.04);

    border-radius: 12px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    ${mediaSizes.S} {
        max-width: 100%;
        min-width: 100%;
    }
`

import styled from '@emotion/styled'
import { mediaSizes } from '@/helpers'

interface ImageProps {
    src: string
}

export const ArticleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 16px 0;

    margin: 0 12px 0 0;
    :last-child {
        margin: 0;
    }

    position: relative;
    max-width: 372px;
    min-width: 100px;

    background: ${props => props.theme.colors.light.white};

    box-shadow: 0 4px 24px rgba(8, 22, 49, 0.08), 0 0 4px rgba(7, 26, 66, 0.05),
        0 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 12px;

    ${mediaSizes.S} {
        max-width: 100%;
        min-width: 100%;
        margin: 0 0 28px 0;
        padding: 0 0 20px 0;
    }
`
export const ArticleCardCover = styled.div<ImageProps>`
    border-radius: 12px 12px 0 0;
    min-width: 100%;
    min-height: 172px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const ArticleCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 16px 0 16px;
`
export const ArticleCardTitle = styled.h4`
    display: inline-block;
    max-width: 340px;
    min-width: 240px;
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0 0 20px 0;

    ${mediaSizes.S} {
        font-size: 16px;
        line-height: 28px;
    }
`
export const ArticleCardMarker = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    flex: none;
    order: 1;
    flex-grow: 0;
`

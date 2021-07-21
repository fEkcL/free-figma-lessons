import styled from '@emotion/styled'

import CommentPhoto from '@/images/Photo.jpg'
import { mediaSizes } from '@/helpers'

export const SecondTextComment = styled.p`
    position: absolute;
    top: 288px;
    display: flex;
    flex-direction: row;
    padding: 0 32px;
    margin: 0;

    max-width: 351px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    align-items: center;
    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.black};

    ${mediaSizes.S} {
        top: 188px;
        font-size: 16px;
        line-height: 28px;
        padding: 0;
    }
`
export const SecondImg = styled.div`
    background-image: url(${CommentPhoto});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 32px;
    min-width: 415px;
    min-height: 280px;
    box-shadow: 0 4px 28px rgba(8, 22, 49, 0.04), 0 0 4px rgba(7, 26, 66, 0.05),
        0 0 1px rgba(0, 0, 0, 0.04);
    margin: 0 0 12px 0;

    ${mediaSizes.M} {
        min-width: 320px;
        min-height: 220px;
    }

    ${mediaSizes.S} {
        min-width: 288px;
        min-height: 180px;
    }
`

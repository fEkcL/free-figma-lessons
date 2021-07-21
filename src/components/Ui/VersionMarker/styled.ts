import styled from '@emotion/styled'
import { TRANSITION } from '@/helpers/defaultStyles'
import { mediaSizes } from '@/helpers'

export const VersionMarker = styled.button`
    cursor: pointer;
    :focus {
        outline: none;
    }
    border: none;
    padding: 4px 8px;
    background: ${props => props.theme.colors.interactive.default};
    border-radius: 8px;

    text-decoration: none;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    text-align: left;
    letter-spacing: -0.24px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: ${props => props.theme.colors.light.white};

    transition: ${TRANSITION};

    &:hover {
        background: ${props => props.theme.colors.interactive.hover};
    }

    ${mediaSizes.S} {
        width: 100%;
        text-align: center;
        padding: 12px 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
    }
`

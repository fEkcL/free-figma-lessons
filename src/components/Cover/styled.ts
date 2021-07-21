import styled from '@emotion/styled'
import { mediaSizes } from '@/helpers'

interface ImgProps {
    src: string
}
export const Cover = styled.section<ImgProps>`
    margin-top: 32px;
    margin-bottom: 44px;
    min-width: 100%;
    min-height: 248px;
    border-radius: 16px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0 4px 28px rgba(8, 22, 49, 0.04), 0 0 4px rgba(7, 26, 66, 0.05),
        0 0 1px rgba(0, 0, 0, 0.04);

    ${mediaSizes.S} {
        display: none;
    }
`

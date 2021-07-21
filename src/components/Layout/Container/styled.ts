import styled from '@emotion/styled'

import { mediaSizes } from '@/helpers'

/**
 * 1640 XL
 *
 * 1200 L
 *
 * 728 M
 *
 * 290 S
 */

export const Container = styled.section`
    width: 290px;
    margin: 0 auto;

    ${mediaSizes.XL} {
        width: 1640px;
    }

    ${mediaSizes.L} {
        width: calc(1200px + 440 * ((100vw - 1280px) / (1920 - 1280)));
    }

    ${mediaSizes.M} {
        width: calc(728px + 472 * ((100vw - 768px) / (1280 - 768)));
    }

    ${mediaSizes.S} {
        width: calc(290px + 438 * ((100vw - 320px) / (768 - 320)));
    }
`

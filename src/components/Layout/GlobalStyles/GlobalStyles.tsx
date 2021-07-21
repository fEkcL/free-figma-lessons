import React, { FC } from 'react'
import { css, Global, useTheme } from '@emotion/react'
import { mediaSizes } from '@/helpers'

export const GlobalStyles: FC = () => {
    const style = css`
        html.no-scroll {
            overflow: hidden;
        }
        body {
            background-color: #ffffff;
        }
    `

    return <Global styles={style} />
}

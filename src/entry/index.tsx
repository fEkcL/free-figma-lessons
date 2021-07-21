import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider } from '@emotion/react'
import { mainTheme } from '@/theme/main.theme'
import { App } from '@/components/App'

render(
    <ThemeProvider theme={mainTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('Figma')
)

import '@emotion/react'

interface Colors {
    light: {
        bg: string
        white: string
        black: string
        add: string
        add2: string
        add3: string
    }
    interactive: {
        default: string
        hover: string
        pressed: string
        error: string
        errorbg: string
    }
}

declare module '@emotion/react' {
    export interface Theme {
        colors: Colors
    }
}

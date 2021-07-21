export const sizes = {
    XL: '(min-width: 1920px)',
    L: '(min-width: 1280px) and (max-width: 1919.90px)',
    M: '(min-width: 768px) and (max-width: 1279.90px)',
    S: '(min-width: 320px) and (max-width: 767.90px)',
}

export const mediaSizes = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
    (accumulator, label) => {
        accumulator[label] = `@media ${sizes[label]}`
        return accumulator
    },
    {} as {
        [key in keyof typeof sizes]: string
    }
)

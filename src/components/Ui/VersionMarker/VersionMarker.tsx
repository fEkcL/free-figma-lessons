import React, { FC, useState } from 'react'

import * as S from './styled'

interface VMProps {
    title?: string
}
export const VersionMarker: FC<VMProps> = ({ title = 'Beta' }) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <a
            href="https://github.com/fEkcL/free-figma-lessons"
            style={{ textDecoration: 'none', width: '100%' }}
        >
            <S.VersionMarker
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {isHover ? `Последнее обновление ${___BUILDDATE___}` : title}
            </S.VersionMarker>
        </a>
    )
}

import React, { FC, useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'

import * as S from './styled'

function Tilt(props: { [x: string]: any; options: any }) {
    const { options, ...rest } = props
    const tilt = useRef(null)

    useEffect(() => {
        return VanillaTilt.init(tilt.current, options)
    }, [options])

    return <div ref={tilt} {...rest} />
}

const optionsComment = {
    reverse: true,
    speed: 300,
    max: 6,
    glare: true,
    'max-glare': 0.6,
}
const tiltStyleComment = {
    margin: 0,
    borderRadius: 32,
}

interface CommentProps {
    comment?: string
}
export const SecondComment: FC<CommentProps> = ({ comment }) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <>
            <Tilt
                style={tiltStyleComment}
                options={optionsComment}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <S.SecondImg />
            </Tilt>
            <S.SecondTextComment>{isHover ? comment : ''}</S.SecondTextComment>
        </>
    )
}

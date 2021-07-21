import React, { FC, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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

const optionsScreenCard = {
    reverse: true,
    speed: 300,
    max: 4,
    glare: true,
    'max-glare': 0.4,
}
const tiltStyleScreenCard = {
    margin: 0,
    width: '100%',
    borderRadius: 12,
}

interface ScreenCardProps {
    type?: 'a' | 'Link'
    link: string
    src: string
    title: string
    labelRegular: string
}
export const ScreenCard: FC<ScreenCardProps> = ({
    type = 'Link',
    link,
    src,
    title,
    labelRegular,
}) => {
    switch (type) {
        case 'a':
            return (
                <S.ScreenCard>
                    <Tilt style={tiltStyleScreenCard} options={optionsScreenCard}>
                        <a style={{ textDecoration: 'none' }} href={link}>
                            <S.ScreenCardCover src={src}>
                                <S.ScreenCardCoverLabel>{title}</S.ScreenCardCoverLabel>
                            </S.ScreenCardCover>
                        </a>
                    </Tilt>
                    <S.ScreenCardLabel>
                        <S.ScreenCardLabelBody>{labelRegular}</S.ScreenCardLabelBody>
                    </S.ScreenCardLabel>
                </S.ScreenCard>
            )
        case 'Link':
            return (
                <S.ScreenCard>
                    <Tilt style={tiltStyleScreenCard} options={optionsScreenCard}>
                        <Link style={{ textDecoration: 'none' }} to={link}>
                            <S.ScreenCardCover src={src}>
                                <S.ScreenCardCoverLabel>{title}</S.ScreenCardCoverLabel>
                            </S.ScreenCardCover>
                        </Link>
                    </Tilt>
                    <S.ScreenCardLabel>
                        <S.ScreenCardLabelBody>{labelRegular}</S.ScreenCardLabelBody>
                    </S.ScreenCardLabel>
                </S.ScreenCard>
            )
    }
}

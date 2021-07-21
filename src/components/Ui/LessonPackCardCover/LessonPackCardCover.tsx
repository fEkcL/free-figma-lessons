import React, { FC, useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { CoverContainer } from '@/components/Layout/CoverContainer'

import * as S from './styled'

function Tilt(props: { [x: string]: any; options: any }) {
    const { options, ...rest } = props
    const tilt = useRef(null)

    useEffect(() => {
        return VanillaTilt.init(tilt.current, options)
    }, [options])

    return <div ref={tilt} {...rest} />
}

const optionslessonCover = {
    reverse: true,
    speed: 300,
    max: 1,
    glare: true,
    'max-glare': 0.4,
}

interface LessonTopicCardProps {
    title: string
    body: string
    imgSrc: string
    bgColor: string
}

export const LessonPackCardCover: FC<LessonTopicCardProps> = ({ title, body, imgSrc, bgColor }) => {
    return (
        <CoverContainer>
            <Tilt options={optionslessonCover}>
                <S.LessonPackCardCover imgSrc={imgSrc} bgColor={bgColor}>
                    <S.LessonPackCardContent>
                        <S.LessonPackCardTitle>{title}</S.LessonPackCardTitle>
                        <S.LessonPackCardBody>{body}</S.LessonPackCardBody>
                    </S.LessonPackCardContent>
                </S.LessonPackCardCover>
            </Tilt>
        </CoverContainer>
    )
}

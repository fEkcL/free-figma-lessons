import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

import * as S from './styled'

interface LessonTopicCardProps {
    link?: string
    title: string
    body: string
    imgSrc: string
    bgColor: string
}
export const LessonPackCard: FC<LessonTopicCardProps> = ({
    link,
    title,
    body,
    imgSrc,
    bgColor,
}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <S.LessonPackCard
            imgSrc={imgSrc}
            bgColor={bgColor}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <S.LessonPackCardContent>
                <S.LessonPackCardTitle>{title}</S.LessonPackCardTitle>
                <S.LessonPackCardBody>{body}</S.LessonPackCardBody>
            </S.LessonPackCardContent>
            <S.LessonPackCardButton>
                <Link to={link} style={{ textDecoration: 'none' }}>
                    {isHover ? (
                        <Button title={'Пройти уроки'} trailingIcon={'ArrowRight'} />
                    ) : (
                        <Button
                            type={'Stroke'}
                            title={'Пройти уроки'}
                            trailingIcon={'ArrowRight'}
                        />
                    )}
                </Link>
            </S.LessonPackCardButton>
        </S.LessonPackCard>
    )
}

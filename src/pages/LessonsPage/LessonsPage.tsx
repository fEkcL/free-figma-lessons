import React, { FC } from 'react'
import { Container } from '@/components/Layout/Container'
import { VersionMarker } from '@/components/Ui/VersionMarker'
import { Tab } from '@/components/Ui/Tab'
import { LessonPackCard } from '@/components/Ui/LessonPackCard'

import * as S from './Styled'

import LessonPackCardBG1 from '@/images/BlackFriday.png'
import LessonPackCardBG2 from '@/images/UI.png'
import LessonPackCardBG3 from '@/images/Wait.png'

export const LessonsPage: FC = () => {
    return (
        <Container>
            <S.FirstSection>
                <S.FirstTitle>
                    <S.FirstH1>Твой путеводитель по миру Figma</S.FirstH1>
                    <VersionMarker />
                </S.FirstTitle>
                <S.FirstBody>
                    Проходи урок за уроком, чтобы узнать все тонкости Figma
                    <br /> и научиться чистому дизайну в своих проектах.
                </S.FirstBody>
            </S.FirstSection>

            <S.Content>
                <LessonPackCard
                    link={'/lessons/lesson1'}
                    title={'☝ Как начать свой путь?'}
                    body={
                        'В этих уроках ты узнаешь всё, что нужно для начала пути; познакомишься с интерфейсом Figma и её терминами; создашь свой первый файл для дальнейшей работы!'
                    }
                    imgSrc={LessonPackCardBG1}
                    bgColor={'#efbda9'}
                />
                <LessonPackCard
                    link={'/'}
                    title={'111'}
                    body={'111'}
                    imgSrc={LessonPackCardBG2}
                    bgColor={'#C6B9FF'}
                />
                <LessonPackCard
                    link={'/'}
                    title={'111'}
                    body={'111'}
                    imgSrc={LessonPackCardBG3}
                    bgColor={'#efb8e8'}
                />
            </S.Content>
        </Container>
    )
}

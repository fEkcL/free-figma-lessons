import React, { FC } from 'react'
import { Container } from '@/components/Layout/Container'
import { LessonPackCardCover } from '@/components/Ui/LessonPackCardCover'
import { LessonButton } from '@/components/Ui/LessonButton'

import * as S from './Styled'

import LessonPackCardBG1 from '@/images/BlackFriday.png'
import * as D from '../LessonsData'
import { useState } from 'react'

export const Lesson1: FC = () => {
    const [lessonData, setLessonData] = useState('first')

    return (
        <>
            <LessonPackCardCover
                title={'☝ Как начать свой путь?'}
                body={
                    'Ты узнаешь всё, что нужно для начала пути. Познакомишься с интерфейсом Figma и её терменами. Создашь свой первый файл для дальнейшей работы!'
                }
                imgSrc={LessonPackCardBG1}
                bgColor={'#efbda9'}
            />

            <Container>
                <S.Content>
                    <S.Menu>
                        <LessonButton
                            active={lessonData === 'first'}
                            number={'1'}
                            title={'Подготовка к работе'}
                            onClick={() => setLessonData('first')}
                            tags={[]}
                        />
                        <LessonButton
                            active={lessonData === 'second'}
                            number={'2'}
                            title={'Общее знакомство'}
                            onClick={() => setLessonData('second')}
                            tags={[]}
                        />
                        <LessonButton
                            active={lessonData === 'third'}
                            number={'3'}
                            title={'Комьюнити'}
                            onClick={() => setLessonData('third')}
                            tags={[]}
                        />
                        <LessonButton
                            active={lessonData === 'fourth'}
                            number={'4'}
                            title={'Команды'}
                            onClick={() => setLessonData('fourth')}
                            tags={[]}
                        />
                    </S.Menu>
                    <S.Info>
                        {lessonData === 'first' && <D.Lesson1Data1 />}
                        {lessonData === 'second' && <D.Lesson1Data2 />}
                        {lessonData === 'third' && <D.Lesson1Data3 />}
                        {lessonData === 'fourth' && <D.Lesson1Data4 />}
                    </S.Info>
                </S.Content>
            </Container>
        </>
    )
}

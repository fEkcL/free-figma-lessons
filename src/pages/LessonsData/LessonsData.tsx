import React, { FC, useEffect, useState } from 'react'
import { Button } from '@/components/Ui/Button'
import { Element } from 'react-scroll'

import * as S from './Styled'

export const Lesson1Data1: FC = () => {
    return (
        <>
            <Element name="first">
                <S.Block id={'block'}>
                    <S.BlockText>
                        <S.BlockTextTitle>Создание аккаунта</S.BlockTextTitle>
                        <S.BlockTextText>
                            <>
                                Для начала
                                <a
                                    style={{ textDecoration: 'none' }}
                                    href={'https://www.figma.com/signup'}
                                >
                                    <Button type={'TextInText'} title={'Создай'} />
                                </a>
                                аккаунт в Figma, если у тебя его нет.
                            </>
                        </S.BlockTextText>
                    </S.BlockText>
                </S.Block>
            </Element>
            <Element name="second">
                <S.Block>
                    <S.BlockText>
                        <S.BlockTextTitle>Приложение на компьютер</S.BlockTextTitle>
                        <S.BlockTextText>
                            Рекомендую установить приложение на компьютер, потому что в зависимости
                            от выбранного браузера ты можешь столкнуться с некоторыми неудобствами.
                            После открой приложение и авторизуйся в нем.
                        </S.BlockTextText>
                    </S.BlockText>
                    <S.Buttons>
                        <S.ButtonSpan>
                            <a
                                style={{ textDecoration: 'none' }}
                                href={'https://www.figma.com/download/desktop/win'}
                            >
                                <Button title={'Для Windows'} />
                            </a>
                        </S.ButtonSpan>
                        <S.ButtonSpan>
                            <a
                                style={{ textDecoration: 'none' }}
                                href={'https://www.figma.com/download/desktop/mac'}
                            >
                                <Button title={'Для Mac'} />
                            </a>
                        </S.ButtonSpan>
                    </S.Buttons>
                </S.Block>
            </Element>
        </>
    )
}

export const Lesson1Data2: FC = () => {
    const [w, setW] = useState(0)
    const h = w / 1.78

    const handleHeight = () => {
        setW(document.getElementById('block').clientWidth)
    }

    useEffect(() => {
        setW(document.getElementById('block').clientWidth)
        window.addEventListener('resize', handleHeight)
        return () => {
            window.removeEventListener('resize', handleHeight)
        }
    }, [])

    return (
        <>
            <S.Block id={'block'}>
                <S.BlockText>
                    <S.BlockTextTitle>Уже скоро...</S.BlockTextTitle>
                </S.BlockText>
            </S.Block>
        </>
    )
}

export const Lesson1Data3: FC = () => {
    return (
        <>
            <S.Block id={'block'}>
                <S.BlockText>
                    <S.BlockTextTitle>Уже скоро...</S.BlockTextTitle>
                    <S.BlockTextText>Уже скоро...</S.BlockTextText>
                </S.BlockText>
            </S.Block>
        </>
    )
}

export const Lesson1Data4: FC = () => {
    return (
        <>
            <S.Block id={'block'}>
                <S.BlockText>
                    <S.BlockTextTitle>Уже скоро...</S.BlockTextTitle>
                    <S.BlockTextText>Уже скоро...</S.BlockTextText>
                </S.BlockText>
            </S.Block>
        </>
    )
}

export const Lesson1Data5: FC = () => {
    return (
        <>
            <S.Block id={'block'}>
                <S.BlockText>
                    <S.BlockTextTitle>Уже скоро...</S.BlockTextTitle>
                    <S.BlockTextText>Уже скоро...</S.BlockTextText>
                </S.BlockText>
            </S.Block>
        </>
    )
}

import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Ui/Button'
import { Element } from 'react-scroll'

import * as S from './Styled'
import { BlockContent } from './Styled'

export const Lesson1Data1: FC = () => {
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
            <S.Block>
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

            <S.Block>
                <S.BlockText>
                    <S.BlockTextTitle>Приложение на компьютер</S.BlockTextTitle>
                    <S.BlockTextText>
                        Рекомендую установить приложение на компьютер, потому что в зависимости от
                        выбранного браузера ты можешь столкнуться с некоторыми неудобствами. После
                        открой приложение и авторизуйся в нем.
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

            <S.Block id={'block'}>
                <iframe
                    width="100%"
                    height={h}
                    src="https://www.youtube-nocookie.com/embed/TX489WeRTbk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </S.Block>
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
                    <S.BlockTextTitle>Общее знакомство с интерфейсом</S.BlockTextTitle>
                </S.BlockText>
                <iframe
                    width="100%"
                    height={h}
                    src="https://www.youtube-nocookie.com/embed/nkUEhK0w0G4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </S.Block>
            <S.Block>
                <S.BlockText>
                    <S.BlockTextTitle>Содержание</S.BlockTextTitle>
                    <S.BlockContent>
                        <S.Content>Вкладки недавние и черновики;</S.Content>
                        <S.Content>Создание файла;</S.Content>
                        <S.Content>Шаблоны;</S.Content>
                        <S.Content>Настройки аккаунта;</S.Content>
                        <S.Content>Уведомления;</S.Content>
                        <S.Content>Умный поиск;</S.Content>
                        <S.Content>Удаленные файлы;</S.Content>
                        <S.Content>Комьюнити;</S.Content>
                        <S.Content>Тарифы в Figma;</S.Content>
                        <S.Content>Команды.</S.Content>
                    </S.BlockContent>
                </S.BlockText>
            </S.Block>
        </>
    )
}

export const Lesson1Data3: FC = () => {
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
                    <S.BlockTextTitle>Комьюнити</S.BlockTextTitle>
                </S.BlockText>
                <iframe
                    width="100%"
                    height={h}
                    src="https://www.youtube-nocookie.com/embed/IYYKrJcDLmE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </S.Block>
            <S.Block>
                <S.BlockText>
                    <S.BlockTextTitle>Содержание</S.BlockTextTitle>
                    <S.BlockContent>
                        <S.Content>Что такое комьюнити и как в него попасть;</S.Content>
                        <S.Content>Обзор того, что может быть опубликовано в комьюнити;</S.Content>
                        <S.Content>Копирование файла к себе;</S.Content>
                        <S.Content>Что находится на стартовой странице;</S.Content>
                        <S.Content>Профиль автора и как создать свой профиль.</S.Content>
                    </S.BlockContent>
                </S.BlockText>
            </S.Block>
        </>
    )
}

export const Lesson1Data4: FC = () => {
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
                    <S.BlockTextTitle>Команды</S.BlockTextTitle>
                </S.BlockText>
                <iframe
                    width="100%"
                    height={h}
                    src="https://www.youtube-nocookie.com/embed/l8U1AP1GvBE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </S.Block>
            <S.Block>
                <S.BlockText>
                    <S.BlockTextTitle>Содержание</S.BlockTextTitle>
                    <S.BlockContent>
                        <S.Content>Что такое команды и для чего они;</S.Content>
                        <S.Content>Условия бесплатного тарифа;</S.Content>
                        <S.Content>
                            Участники, приглашения в команду и манипуляция с правами участников;
                        </S.Content>
                        <S.Content>Настройки команды;</S.Content>
                        <S.Content>
                            Публикация профиля команды в комьюнити и поиск других команд;
                        </S.Content>
                        <S.Content>Удаление и смена названия;</S.Content>
                        <S.Content>Создание новой команды.</S.Content>
                    </S.BlockContent>
                </S.BlockText>
            </S.Block>
        </>
    )
}

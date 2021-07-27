import React, { FC, useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import { Container } from '@/components/Layout/Container'
import { Button } from '../Ui/Button'

import * as S from './Styled'

import Logo from '../../images/logo.png'

import BayACoffee from '@/images/bayACoffee.png'
import _ from 'lodash'

export const Header: FC = () => {
    const [scrollY, setScrollY] = useState(0)
    const [offset, setOffset] = useState(0)
    const [y, setY] = useState(window.scrollY)

    const [burgerMenuShow, setBurgerMenuShow] = useState(false)
    const Burger = {
        default: (
            <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 17.9999C0 17.1162 0.737413 16.3999 1.64706 16.3999L20.1765 16.3999C21.0861 16.3999 21.8235 17.1162 21.8235 17.9999C21.8235 18.8836 21.0861 19.5999 20.1765 19.5999L1.64706 19.5999C0.737413 19.5999 1.05979e-10 18.8836 0 17.9999Z"
                    fill="#202020"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9.9999C0 9.11625 0.737413 8.3999 1.64706 8.3999H26.3529C27.2626 8.3999 28 9.11625 28 9.9999C28 10.8836 27.2626 11.5999 26.3529 11.5999H1.64706C0.737413 11.5999 0 10.8836 0 9.9999Z"
                    fill="#202020"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.9999C0 1.11625 0.737413 0.399902 1.64706 0.399902H26.3529C27.2626 0.399902 28 1.11625 28 1.9999C28 2.88356 27.2626 3.5999 26.3529 3.5999H1.64706C0.737413 3.5999 0 2.88356 0 1.9999Z"
                    fill="#202020"
                />
            </svg>
        ),
        open: (
            <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 9.9999C0 9.11625 0.737413 8.3999 1.64706 8.3999H26.3529C27.2626 8.3999 28 9.11625 28 9.9999C28 10.8836 27.2626 11.5999 26.3529 11.5999H1.64706C0.737413 11.5999 0 10.8836 0 9.9999Z"
                        fill="#202020"
                    />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="28" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
    }

    const iconBurger = burgerMenuShow ? Burger.open : Burger.default

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget
            if (y > window.scrollY) {
                setOffset(prevState => (prevState === 1 ? 1 : prevState + 1))
            } else if (y < window.scrollY) {
                setOffset(prevState => (prevState > -10 ? prevState - 1 : -10))
            }
            setY(window.scrollY)
        },
        [y]
    )

    useEffect(() => {
        const throttleHandleScroll = _.throttle(handleNavigation, 50)
        setY(window.scrollY)
        window.addEventListener('scroll', throttleHandleScroll)

        return () => {
            window.removeEventListener('scroll', throttleHandleScroll)
        }
    }, [handleNavigation])

    function handleScroll() {
        setScrollY(window.pageYOffset)
    }

    useEffect(() => {
        const throttleHandleScroll = _.throttle(handleScroll, 50)
        window.addEventListener('scroll', throttleHandleScroll)
        return () => {
            window.removeEventListener('scroll', throttleHandleScroll)
        }
    }, [])

    return (
        <>
            <S.Wrapper isShow={scrollY <= 400 || offset === 1}>
                <Container>
                    <S.Header>
                        <S.Logo onClick={() => animateScroll.scrollToTop()}>
                            <Link to="/">
                                <svg
                                    width="80"
                                    height="28"
                                    viewBox="0 0 49 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.896 17.644C6.248 17.644 4.832 17.284 3.648 16.564C2.48 15.844 1.552 14.884 0.864 13.684L3.6 12.124C4.016 12.94 4.6 13.58 5.352 14.044C6.12 14.492 6.976 14.716 7.92 14.716C8.848 14.716 9.664 14.508 10.368 14.092C11.072 13.66 11.64 13.092 12.072 12.388C12.504 11.668 12.776 10.876 12.888 10.012H6.456V7.564H12.84C12.696 6.796 12.416 6.092 12 5.452C11.584 4.796 11.032 4.276 10.344 3.892C9.656 3.492 8.848 3.292 7.92 3.292C6.992 3.292 6.16 3.516 5.424 3.964C4.688 4.412 4.112 5.052 3.696 5.884L1.08 4.084C1.768 2.98 2.656 2.084 3.744 1.396C4.848 0.707999 6.248 0.363999 7.944 0.363999C9.272 0.363999 10.456 0.603999 11.496 1.084C12.536 1.564 13.416 2.212 14.136 3.028C14.856 3.844 15.4 4.764 15.768 5.788C16.152 6.812 16.344 7.876 16.344 8.98C16.344 10.132 16.144 11.228 15.744 12.268C15.344 13.308 14.776 14.236 14.04 15.052C13.304 15.852 12.416 16.484 11.376 16.948C10.336 17.412 9.176 17.644 7.896 17.644ZM20.5414 17.62V14.884H21.8854C22.2854 14.884 22.5894 14.796 22.7974 14.62C23.0214 14.444 23.2134 14.164 23.3734 13.78L23.7574 12.94L16.9894 0.459999H20.6374L25.2214 9.58L29.2054 0.459999H32.6854L25.8934 15.34C25.4774 16.188 25.0054 16.78 24.4774 17.116C23.9494 17.452 23.2454 17.62 22.3654 17.62H20.5414ZM34.2615 17.5V0.459999H48.0615V17.5H44.7735V3.364H37.5495V17.5H34.2615Z"
                                        fill="#202020"
                                    />
                                </svg>
                            </Link>
                        </S.Logo>
                        <S.Links>
                            <S.Buttons>
                                <Link
                                    to="/Lessons"
                                    style={{ textDecoration: 'none' }}
                                    onClick={() => animateScroll.scrollToTop()}
                                >
                                    <Button type="Text" title="Уроки и задания" />
                                </Link>
                                <a
                                    href="https://www.figma.com/home"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button type="Text" title="О Figma" />
                                </a>
                            </S.Buttons>

                            <S.BayACoffee href="https://www.buymeacoffee.com/fekcl">
                                <img
                                    style={{ padding: '0 8px 0 0' }}
                                    src={BayACoffee}
                                    width="32"
                                    height="32"
                                    alt="Купить кофе"
                                />
                                Купить автору кофе
                            </S.BayACoffee>
                            <S.Burger onClick={() => setBurgerMenuShow(prevState => !prevState)}>
                                {iconBurger}
                            </S.Burger>
                        </S.Links>
                    </S.Header>
                </Container>
            </S.Wrapper>
            <S.BurgerMenu isShow={burgerMenuShow}>
                <Link
                    to="/Lessons"
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                        animateScroll.scrollToTop(), setBurgerMenuShow(false)
                    }}
                >
                    <Button type="Text" title="Уроки и задания" />
                </Link>
                <a href="https://www.figma.com/home" style={{ textDecoration: 'none' }}>
                    <Button type="Text" title="О Figma" />
                </a>
            </S.BurgerMenu>
        </>
    )
}

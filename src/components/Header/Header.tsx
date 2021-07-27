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
                                <img src={Logo} alt="Logo" />
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

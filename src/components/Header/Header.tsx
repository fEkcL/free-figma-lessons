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
                                <svg
                                    width="28"
                                    height="21"
                                    viewBox="0 0 28 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 18.4999C0 17.6162 0.737413 16.8999 1.64706 16.8999L20.1765 16.8999C21.0861 16.8999 21.8235 17.6162 21.8235 18.4999C21.8235 19.3836 21.0861 20.0999 20.1765 20.0999L1.64706 20.0999C0.737413 20.0999 1.05979e-10 19.3836 0 18.4999Z"
                                            fill="#202020"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 10.4999C0 9.61625 0.737413 8.8999 1.64706 8.8999H26.3529C27.2626 8.8999 28 9.61625 28 10.4999C28 11.3836 27.2626 12.0999 26.3529 12.0999H1.64706C0.737413 12.0999 0 11.3836 0 10.4999Z"
                                            fill="#202020"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 2.4999C0 1.61625 0.737413 0.899902 1.64706 0.899902H26.3529C27.2626 0.899902 28 1.61625 28 2.4999C28 3.38356 27.2626 4.0999 26.3529 4.0999H1.64706C0.737413 4.0999 0 3.38356 0 2.4999Z"
                                            fill="#202020"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect
                                                width="28"
                                                height="20"
                                                fill="white"
                                                transform="translate(0 0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
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

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
                            <a href="https://www.figma.com/home" style={{ textDecoration: 'none' }}>
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
                    </S.Links>
                </S.Header>
            </Container>
        </S.Wrapper>
    )
}

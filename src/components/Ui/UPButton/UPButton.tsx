import React, { FC, useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'
import { Iconly } from 'react-iconly'

import * as S from './styled'
import _ from 'lodash'

interface ButtonProps {
    title?: string
    trailingIcon?: string
}

export const UPButton: FC<ButtonProps> = ({ title = 'Наверх', trailingIcon = 'ArrowUp' }) => {
    const [scrollY, setScrollY] = useState(0)
    let opacity = 0

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

    if (scrollY <= 400) {
        opacity = 0
    } else {
        opacity = 100
    }

    return (
        <S.UPButton opacity={opacity} onClick={() => animateScroll.scrollToTop()}>
            {title}
            {trailingIcon && (
                <S.TrailingIcon>
                    <Iconly name={trailingIcon} size={22} stroke={'bold'} />
                </S.TrailingIcon>
            )}
        </S.UPButton>
    )
}

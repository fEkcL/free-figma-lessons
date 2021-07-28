import React, { FC, useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'

import { CoverContainer } from '@/components/Layout/CoverContainer'
import * as S from './styled'

import HomeBanner from '@/images/Home_Banner.png'
import FigmaIcon from '@/images/Figma_Icon.png'

function Tilt(props: { [x: string]: any; options: any }) {
    const { options, ...rest } = props
    const tilt = useRef(null)

    useEffect(() => {
        return VanillaTilt.init(tilt.current, options)
    }, [options])

    return <div ref={tilt} {...rest} />
}

const options = {
    reverse: true,
    speed: 300,
    max: 1,
    glare: true,
    'max-glare': 0.4,
}

const tiltStyle = {
    margin: 0,
    borderRadius: 16,
}

const imgStyle = {
    marginTop: 24,
    marginLeft: 24,
}

export const Cover: FC = () => {
    return (
        <CoverContainer>
            <Tilt style={tiltStyle} options={options}>
                <S.Cover src={HomeBanner}>
                    <img
                        style={imgStyle}
                        width="100"
                        height="100"
                        src={FigmaIcon}
                        alt="FigmaIcon"
                    />
                </S.Cover>
            </Tilt>
        </CoverContainer>
    )
}

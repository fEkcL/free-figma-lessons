import React, { FC } from 'react'
import { Iconly } from 'react-iconly'

import * as S from './styled'

interface ButtonProps {
    type?: 'Fill' | 'Stroke' | 'Text' | 'TextInText'
    leadingIcon?: string
    title?: string
    trailingIcon?: string
    textColor?: string
}

export const Button: FC<ButtonProps> = ({
    type = 'Fill',
    leadingIcon,
    title,
    trailingIcon,
    textColor,
}) => {
    const children = (
        <>
            {leadingIcon && (
                <S.LeadingIcon>
                    <Iconly name={leadingIcon} size={18} stroke={'bold'} />
                </S.LeadingIcon>
            )}
            {title}
            {trailingIcon && (
                <S.TrailingIcon>
                    <Iconly name={trailingIcon} size={18} stroke={'bold'} />
                </S.TrailingIcon>
            )}
        </>
    )

    switch (type) {
        case 'Fill':
            return <S.Fill>{children}</S.Fill>
        case 'Stroke':
            return <S.Stroke>{children}</S.Stroke>
        case 'Text':
            return <S.Text textColor={textColor}>{children}</S.Text>
        case 'TextInText':
            return <S.TextInText>{children}</S.TextInText>
    }
}

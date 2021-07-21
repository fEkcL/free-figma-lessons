import React, { FC } from 'react'
import { Iconly } from 'react-iconly'

import * as S from './styled'

interface ButtonProps {
    title: string
    leadingIcon: string
}

export const Tab100: FC<ButtonProps> = ({ leadingIcon, title }) => {
    return (
        <S.Tab100>
            {leadingIcon && (
                <S.LeadingIcon>
                    <Iconly name={leadingIcon} size={16} stroke={'bold'} />
                </S.LeadingIcon>
            )}
            {title}
        </S.Tab100>
    )
}

import React, { FC, useState } from 'react'
import { Iconly } from 'react-iconly'

import * as S from './styled'

interface ButtonProps {
    title: string
}

export const Tab: FC<ButtonProps> = ({ title }) => {
    const [activeTab, setActiveTab] = useState(false)

    const defaultBorderColor = '#CECECE'
    const defaultTextColor = '#747474'
    const activeColor = '#689AFF'

    return (
        <S.Tab
            onClick={() => setActiveTab(prevState => !prevState)}
            borderColor={activeTab ? activeColor : defaultBorderColor}
            textColor={activeTab ? activeColor : defaultTextColor}
        >
            {activeTab && (
                <S.LeadingIcon>
                    <Iconly name={'Folder'} size={16} stroke={'bold'} />
                </S.LeadingIcon>
            )}
            {title}
        </S.Tab>
    )
}

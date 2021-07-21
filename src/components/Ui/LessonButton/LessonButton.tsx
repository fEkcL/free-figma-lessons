import React, { FC, useState } from 'react'
import { Iconly } from 'react-iconly'
import { scroller } from 'react-scroll'

import * as S from './styled'

interface Tag {
    id: string
    label: string
}

interface TagWithActive extends Tag {
    active: boolean
}

interface LessonButtonProps {
    number: string
    title: string
    onClick: () => void
    tags: Tag[]
    active: boolean
}

interface TagButtonProps extends TagWithActive {
    onClick: () => void
}

const TagButton: FC<TagButtonProps> = ({ label, active, onClick }) => {
    const defaultBorderColor = '#CECECE'
    const defaultTextColor = '#747474'
    const activeColor = '#689AFF'

    return (
        <S.Tab100
            onClick={onClick}
            borderColor={active ? activeColor : defaultBorderColor}
            textColor={active ? activeColor : defaultTextColor}
        >
            {active && (
                <S.LeadingIcon>
                    <Iconly name={'Show'} size={16} stroke={'bold'} />
                </S.LeadingIcon>
            )}
            {label}
        </S.Tab100>
    )
}

export const LessonButton: FC<LessonButtonProps> = ({
    number,
    title,
    onClick,
    tags: baseTags,
    active,
}) => {
    const defaultBorderColor = '#cecece'
    const defaultTextColor = '#747474'
    const activeColor = '#689AFF'

    const [tags, setTags] = useState<TagWithActive[]>(
        baseTags.map((tag, i) => (i === 0 ? { ...tag, active: true } : { ...tag, active: false }))
    )

    return (
        <S.LessonButtonBox>
            {tags.length !== 0 && active && (
                <S.LessonButtonTaberBox style={{ display: 'flex' }}>
                    {tags.map(tag => (
                        <TagButton
                            key={tag.id}
                            {...tag}
                            onClick={() => {
                                setTags(prevState =>
                                    prevState.map(item =>
                                        item.id === tag.id
                                            ? {
                                                  ...item,
                                                  active: true,
                                              }
                                            : { ...item, active: false }
                                    )
                                )
                                scroller.scrollTo(tag.id, {
                                    offset: -160,
                                })
                            }}
                        />
                    ))}
                </S.LessonButtonTaberBox>
            )}

            <S.LessonButton
                onClick={onClick}
                borderColor={active ? activeColor : defaultBorderColor}
                textColor={active ? activeColor : defaultTextColor}
            >
                <S.LessonButtonContent>
                    <S.LessonButtonNumber>{number}</S.LessonButtonNumber>
                    <S.LessonButtonTitle>{title}</S.LessonButtonTitle>
                </S.LessonButtonContent>
            </S.LessonButton>
        </S.LessonButtonBox>
    )
}

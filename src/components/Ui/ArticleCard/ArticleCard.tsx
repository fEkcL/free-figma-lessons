import React, { FC } from 'react'
import { CategoryMarker } from '../CategoryMarker'
import { LinkMarker } from '../LinkMarker'
import LinesEllipsis from 'react-lines-ellipsis'

import * as S from './styled'

interface ArticleCardProps {
    linkMarkerLink: string
    linkMarkerLeadingIcon?: string
    linkMarkerTitle?: string

    categoryMarkerLink: string
    categoryMarkerLeadingIcon?: string
    categoryMarkerTitle: string

    src: string
    title: string
}
export const ArticleCard: FC<ArticleCardProps> = ({
    linkMarkerLink,
    linkMarkerLeadingIcon = 'Paper',
    linkMarkerTitle = 'читать',

    categoryMarkerLink,
    categoryMarkerLeadingIcon = 'Folder',
    categoryMarkerTitle,

    src,
    title,
}) => {
    return (
        <S.ArticleCard>
            <S.ArticleCardCover src={src} />
            <S.ArticleCardContent>
                <S.ArticleCardTitle>
                    <LinesEllipsis
                        text={title}
                        maxLine="2"
                        ellipsis="..."
                        trimRight
                        basedOn="words"
                    />
                </S.ArticleCardTitle>
                <S.ArticleCardMarker>
                    <LinkMarker
                        linkMarkerLink={linkMarkerLink}
                        linkLeadingIcon={linkMarkerLeadingIcon}
                        linkMarkerTitle={linkMarkerTitle}
                    />
                    <CategoryMarker
                        categoryMarkerLink={categoryMarkerLink}
                        categoryLeadingIcon={categoryMarkerLeadingIcon}
                        categoryMarkerTitle={categoryMarkerTitle}
                    />
                </S.ArticleCardMarker>
            </S.ArticleCardContent>
        </S.ArticleCard>
    )
}

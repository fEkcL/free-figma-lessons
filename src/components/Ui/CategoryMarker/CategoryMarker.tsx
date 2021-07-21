import React, { FC } from 'react'
import { Iconly } from 'react-iconly'

import * as S from './styled'

interface CategoryMarkerProps {
    categoryLeadingIcon?: string
    categoryMarkerTitle: string
    categoryMarkerLink: string
}
export const CategoryMarker: FC<CategoryMarkerProps> = ({
    categoryLeadingIcon,
    categoryMarkerTitle,
    categoryMarkerLink,
}) => {
    return (
        <S.Href href={categoryMarkerLink}>
            <S.Marker>
                {categoryLeadingIcon && (
                    <S.LeadingIcon>
                        <Iconly name={categoryLeadingIcon} size={16} stroke={'bold'} />
                    </S.LeadingIcon>
                )}
                {categoryMarkerTitle}
            </S.Marker>
        </S.Href>
    )
}

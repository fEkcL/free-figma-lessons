import React, { FC } from 'react'
import { Iconly } from 'react-iconly'

import * as S from './styled'

interface LinkMarkerProps {
    linkLeadingIcon?: string
    linkMarkerTitle?: string
    linkMarkerLink: string
}
export const LinkMarker: FC<LinkMarkerProps> = ({
    linkLeadingIcon,
    linkMarkerTitle,
    linkMarkerLink,
}) => {
    return (
        <S.Href href={linkMarkerLink}>
            <S.Marker>
                {linkLeadingIcon && (
                    <S.LeadingIcon>
                        <Iconly name={linkLeadingIcon} size={18} stroke={'bold'} />
                    </S.LeadingIcon>
                )}
                {linkMarkerTitle}
            </S.Marker>
        </S.Href>
    )
}

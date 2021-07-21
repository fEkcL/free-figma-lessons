import React, { FC } from 'react'
import { Container } from '@/components/Layout/Container'
import { Cover } from '@/components/Cover'
import { VersionMarker } from '@/components/Ui/VersionMarker'
import { ScreenCard } from '@/components/Ui/ScreenCard'
import { SecondComment } from '@/components/Ui/SecondComment'
import { ArticleCard } from '@/components/Ui/ArticleCard'

import * as S from './Styled'

import ScreenCardPhoto1 from '@/images/ScreenCardPhoto1.png'
import ScreenCardPhoto2 from '@/images/ScreenCardPhoto2.png'
import ScreenCardPhoto3 from '@/images/ScreenCardPhoto3.png'
import ScreenCardPhoto4 from '@/images/ScreenCardPhoto4.png'
import ArticleCardCover1 from '@/images/ArticleCardCover1.png'
import ArticleCardCover2 from '@/images/ArticleCardCover2.png'
import ArticleCardCover3 from '@/images/ArticleCardCover3.png'
import ArticleCardCover4 from '@/images/ArticleCardCover4.png'

export const IndexPage: FC = () => {
    return (
        <>
            <Cover />
            <Container>
                <S.FirstSection>
                    <S.FirstTitle>
                        <S.FirstH1>Электронное учебное пособие по&#160;Figma</S.FirstH1>
                        <VersionMarker />
                    </S.FirstTitle>
                    <S.FirstBody>
                        Привет! Здесь ты узнаешь, как&#160;пользоваться Figma; найдёшь полезные
                        статьи по&#160;дизайну и другие вспомогательные материалы.
                        Учебник&#160;дополняется по&#160;мере обновления сервиса и по отзывам
                        пользователей.
                    </S.FirstBody>
                </S.FirstSection>

                <S.SecondSection>
                    <S.SecondContent>
                        <S.SecondH2>Зачем мне Figma?</S.SecondH2>
                        <S.SecondOl>
                            <S.SecondBody>
                                Сервис даст тебе возможность воплотить любую твою задумку
                                в&#160;жизнь. В&#160;Figma ты сможешь создать уникальный дизайн для
                                презентации, плаката, приложения, сайта и других продуктов.
                                В&#160;этом&#160;тебе поможет широкий инструментарий и удобная
                                работа с ним.
                            </S.SecondBody>
                            <S.SecondBody>
                                C её помощью очень просто освоить профессиональное
                                создание&#160;дизайн-систем из-за&#160;невероятно удобной работы
                                с&#160;компонентами и&#160;стилями и&#160;приятного инструментария
                                для&#160;разработчиков.
                            </S.SecondBody>
                            <S.SecondBody>
                                Если ты уже работаешь с другими сервисами, изучишь возможности
                                аналога и, возможно, найдёшь&#160;то, чего&#160;тебе не хватало.
                            </S.SecondBody>
                            <S.SecondBody>
                                Узнаешь что-то новое, расширишь&#160;кругозор.
                            </S.SecondBody>
                        </S.SecondOl>
                    </S.SecondContent>
                    <S.SecondComment>
                        <SecondComment comment="«Я сам регулярно использую Figma и очень рад, что выбрал именно её»" />
                    </S.SecondComment>
                </S.SecondSection>

                <S.ThirdSection>
                    <S.ThirdH2>Разделы не для галочки! Навигация по&nbsp;пособию</S.ThirdH2>
                    <S.ThirdContent>
                        <ScreenCard
                            link={'/'}
                            src={ScreenCardPhoto1}
                            title={'Главная'}
                            labelRegular={'Сейчас ты здесь 😌 Познакомься с другими разделами.'}
                        />
                        <ScreenCard
                            link={'/Lessons'}
                            src={ScreenCardPhoto2}
                            title={'Уроки и задания'}
                            labelRegular={'Теоретический материал и практические задания здесь.'}
                        />
                        <ScreenCard
                            link={'/'}
                            src={ScreenCardPhoto3}
                            title={'???'}
                            labelRegular={'Временно секретный раздел. Он в разработке 😋'}
                        />
                        <ScreenCard
                            type={'a'}
                            link={'https://www.figma.com/home'}
                            src={ScreenCardPhoto4}
                            title={'О Figma'}
                            labelRegular={
                                'Никто не сможет рассказать о проекте лучше, чем его создатель.'
                            }
                        />
                    </S.ThirdContent>
                </S.ThirdSection>
            </Container>

            <S.FourthSection>
                <Container>
                    <S.FourthContent>
                        <S.FourthH2>Я уже упоминал статьи? Верно! Они здесь &#128071;</S.FourthH2>
                        <S.FourthArticle>
                            <ArticleCard
                                linkMarkerLink={
                                    'https://ux.pub/horoshiy-dizayn-eto-nauka-a-ne-iskusstvo/'
                                }
                                categoryMarkerLink={'https://ux.pub/user-experience/'}
                                categoryMarkerTitle={'ux дизайн'}
                                src={ArticleCardCover1}
                                title={'Хороший дизайн – это наука, а не искусство'}
                            />
                            <ArticleCard
                                linkMarkerLink={
                                    'https://ux.pub/10-hitrostey-figma-kotorye-ya-hotel-by-znat-ranshe/'
                                }
                                categoryMarkerLink={'https://ux.pub/design-tools/figma/'}
                                categoryMarkerTitle={'figma'}
                                src={ArticleCardCover2}
                                title={'10 хитростей Figma, которые я хотел бы знать раньше'}
                            />
                            <ArticleCard
                                linkMarkerLink={
                                    'https://ux.pub/5-sposobov-uluchsheniya-lipkoy-shapki-sticky-header-ot-nielsen-norman-group/'
                                }
                                categoryMarkerLink={'https://ux.pub/user-experience/'}
                                categoryMarkerTitle={'ux дизайн'}
                                src={ArticleCardCover3}
                                title={
                                    '5 способов улучшения липкой шапки (sticky header) от Nielsen Norman Group'
                                }
                            />
                            <ArticleCard
                                linkMarkerLink={
                                    'https://ux.pub/chto-na-samom-dele-oznachaet-prostoy-dizayn-pravilnyy-podhod-k-sozdaniyu-ui-kit-dlya-ios/'
                                }
                                categoryMarkerLink={'https://ux.pub/lifehack/'}
                                categoryMarkerTitle={'лайфхаки'}
                                src={ArticleCardCover4}
                                title={
                                    'Что на самом деле означает простой дизайн? Правильный подход к созданию UI-kit для iOS'
                                }
                            />
                        </S.FourthArticle>
                    </S.FourthContent>
                </Container>
            </S.FourthSection>
        </>
    )
}

import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Normalize } from '@/components/Layout/Normalize'
import { GlobalStyles } from '@/components/Layout/GlobalStyles'

import { Header } from '@/components/Header'
import { IndexPage } from '@/pages/IndexPage'
import { LessonsPage } from '@/pages/LessonsPage'
import { Lesson1 } from '@/pages/Lesson1'
import { ToolkitPage } from '@/pages/ToolkitPage'
import { UPButton } from '../Ui/UPButton'
import { Footer } from '../Footer'

export const App: FC = () => (
    <Router>
        <Normalize />
        <GlobalStyles />
        <Header />
        <Switch>
            <Route path="/" exact>
                <IndexPage />
            </Route>
            <Route path="/lessons" exact>
                <LessonsPage />
            </Route>
            <Route path="/lessons/lesson1" exact>
                <Lesson1 />
            </Route>
            <Route path="/toolkit" exact>
                <ToolkitPage />
            </Route>
        </Switch>
        <Footer />
        <UPButton />
    </Router>
)

import React, { FC, useState } from 'react'

import Profile from './Profile'
import Experience from './Experience';

import { IPortfolioData } from '@/types/portfolio.types';
import { EnRuKeys } from '@/types/lang.types';
import { IExperienceData } from '@/types/experience.types';
import Portfolio from './Portfolio';
import { IProfileData } from '@/types/profile.types';

interface IContent {
    lang: string
    profile: IProfileData
    experience: IExperienceData
    portfolio: IPortfolioData
}

const Content:FC<IContent> = ({ lang, profile, experience, portfolio }) => {

    const [profileWithChosenLang] = useState(profile[(lang as EnRuKeys)]);
    const [experienceWithChosenLang] = useState(experience[(lang as EnRuKeys)]);
    const [portfolioWithChosenLang] = useState(portfolio[(lang as EnRuKeys)]);
    
    return (
        <main className='sm:mx-4'>
            <Profile lang={lang} data={profileWithChosenLang} />
            <Experience lang={lang} data={experienceWithChosenLang} />
            <Portfolio lang={lang} data={portfolioWithChosenLang} />
        </main>
    )
}

export default Content
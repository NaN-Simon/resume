import useObserver from '@/hooks/useObserver';
import type { ISkillsData } from '@/types/skills.types'
import { useRef } from 'react';

const Skills = ({ skills }: { skills?: ISkillsData }) => {
    const {
        technologies = [],
        frameworks = [],
        storage = [],
        design = [],
        methodology = {},
        other = {}
    } = skills || {};
    const skillsListWithImages = [technologies, frameworks, storage, design]

    const asideRef = useRef<HTMLDivElement>(null);
    const asideIsIntersecting = useObserver(asideRef);
    const skillsAnimate = asideIsIntersecting ? 'animate__animated animate__fadeInLeft' : '';

    return (
        <aside ref={asideRef} className={skillsAnimate} id='skills'>
            <div>
                {skillsListWithImages.map((category, index) => (
                    <div key={index} className='flex flex-col gap-4 p-3'>
                        {Object.entries(category).map(([category, skills]) => (
                            <div key={category} className='flex flex-col gap-2'>
                                <h2 className='text-xl capitalize border-b-2 border-b-slate-500'>{category}</h2>
                                <ul className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                                    {skills.map((skill: string) => (
                                        <li key={Object.keys(skill)[0]} className='flex flex-col sm:flex-row md:flex-col items-center gap-2'>
                                            <img width={30} height={30} src={Object.values(skill)[0]} alt={Object.keys(skill)[0]} />
                                            <span className='text-sm text-center'>{Object.keys(skill)[0]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}

                <div className='flex flex-col gap-4 p-3'>
                    <h2 className='text-xl capitalize border-b-2 border-b-slate-500'>{Object.keys(methodology)[0]}</h2>
                    <ul className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                        {methodology.methodology.map((methodology) => (
                            <li key={methodology} className='flex flex-col sm:flex-row md:flex-col items-center gap-2'>
                                <span className='text-sm text-center'>{methodology}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col gap-4 p-3'>
                    <h2 className='text-xl capitalize border-b-2 border-b-slate-500'>{Object.keys(other)[0]}</h2>
                    <ul className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                        {other.other.map((other) => (
                            <li key={other} className='flex flex-col sm:flex-row md:flex-col items-center gap-2'>
                                <span className='text-sm text-center'>{other}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Skills
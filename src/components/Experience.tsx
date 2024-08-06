import { FC, useRef, useState } from "react"

import { serviceButtonsData } from "@/data/index.js";

import { IServiceButtons } from "@/types/serviceButtons.types"
import { IExperienceSimple } from "@/types/experience.types"
import { EnRuKeys } from "@/types/lang.types"
import useObserver from "@/hooks/useObserver";

interface IExperience {
    lang: string
    data: IExperienceSimple[]
}

const Experience: FC<IExperience> = ({ lang, data }) => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionIsIntersecting = useObserver(sectionRef);
    const sectionAnimate = sectionIsIntersecting ? 'animate__animated animate__fadeInUp' : '';

    const [headlines] = useState<IServiceButtons>(serviceButtonsData[(lang as EnRuKeys)]);

    return (
        <section ref={sectionRef} id="experience" className={`flex flex-col gap-6 bg-white dark:bg-grayDark rounded-lg p-6 mb-2 ring-1 ring-slate-900/5 shadow-xl ${sectionAnimate}`}>
            <h2 className="text-2xl font-bold tracking-tight pb-6">{headlines.experience}</h2>

            {data.map((item: IExperienceSimple, index: number) => (
                <div key={item.company}>
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="w-full md:w-2/6">
                            <h3 className="text-xl font-medium tracking-tight pr-2">{item.company}</h3>
                            <h3 className="text-sm font-medium tracking-tight break-words">({item.specificity})</h3>
                            {item.site && <a href={`https://${item.site}`} className="text-sm font-medium tracking-tight underline pr-2">{item.site}</a>}
                            <h4 className="text-base font-bold tracking-tight text-gray"> {item.position} </h4>
                            <p className="mt-2 text-sm inline"> {item.date} </p>
                            <p className="mt-2 text-sm inline text-gray"> ({item.sumDate}) </p>
                        </div>
                        <div className="w-full md:w-4/6">
                            <h2 className="text-lg font-medium tracking-tight">{headlines.tasks}</h2>
                            <ul className="pl-4 pb-4">
                                {item.tasks.map((task: string) => (
                                    <li className="list-disc" key={task}>
                                        <p className="text-sm">{task}</p>
                                    </li>
                                ))}
                            </ul>
                            <h2 className="text-lg font-medium tracking-tight">{headlines.technologies}</h2>
                            <ul className="flex flex-wrap pb-4">
                                {item.technologies.map((tech: string, index: number) => (
                                    <li key={tech}>
                                        <p className="text-sm inline">{tech}</p>
                                        {index !== item.technologies.length - 1 && <span>&nbsp;·&nbsp;</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {index !== data.length - 1 && <div
                        data-testid="divider"
                        className="border-t-[1px] border-dashed border-gray my-4"
                    >
                    </div>}

                </div>
            ))}

        </section>
    )
}

export default Experience
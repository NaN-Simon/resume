import { FC, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { serviceButtonsData } from "@/data/index.js";

import { IServiceButtons } from "@/types/serviceButtons.types"
import { EnRuKeys } from "@/types/lang.types"
import { IPortfolioSimple } from "@/types/portfolio.types"
import useObserver from "@/hooks/useObserver";

interface IExperience {
    lang: string
    data: IPortfolioSimple[]
}

const Portfolio: FC<IExperience> = ({ lang, data }) => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionIsIntersecting = useObserver(sectionRef);
    const sectionAnimate = sectionIsIntersecting ? 'animate__animated animate__fadeInUp' : '';

    const [headlines] = useState<IServiceButtons>(serviceButtonsData[(lang as EnRuKeys)]);

    const arrayOfPlugin = data.map(() => useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    ))


    return (
        <section ref={sectionRef} id="portfolio" className={`flex flex-col gap-6 bg-white dark:bg-grayDark rounded-lg p-6 mb-2 ring-1 ring-slate-900/5 shadow-xl ${sectionAnimate}`}>
            <h2 className="text-2xl font-bold tracking-tight pb-6">{headlines.portfolio}</h2>

            {data.map((item: IPortfolioSimple, index: number) => (
                <div key={item.name}>
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="w-full md:w-2/6">
                            <h3 className="text-xl font-medium tracking-tight pr-2">{item.name}</h3>
                            <h3 className="text-sm font-medium tracking-tight break-words">{item.description}</h3>
                            <a href={`https://${item.fullDescription}`} className="text-sm font-medium tracking-tight underline pr-2">({headlines.fullDescription})</a>
                            <a href={`https://${item.github}`} className="text-sm font-medium tracking-tight underline pr-2">github</a>
                            <a href={`https://${item.demo}`} className="text-sm font-medium tracking-tight underline pr-2">demo</a>
                        </div>
                        <div className="w-full md:w-4/6">
                            <h2 className="text-lg font-medium tracking-tight">{headlines.description}</h2>
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
                            {item.images && <Carousel plugins={[arrayOfPlugin[index].current]} data-testid='Carousel' className="w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-4xl xl:max-w-[1000px] mx-auto">
                                <CarouselContent data-testid='CarouselContent' className='h-[inherit]'>
                                    {item.images.map((image: string) => (
                                        <CarouselItem data-testid='CarouselItem' key={image}>
                                            <img
                                                src={image}
                                                alt={image}
                                                className="w-full h-auto my-2"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>}
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

export default Portfolio
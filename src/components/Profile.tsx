import { serviceButtonsData } from "@/data";
import useObserver from "@/hooks/useObserver";
import { EnRuKeys } from "@/types/lang.types";
import { IProfileSimple } from "@/types/profile.types";
import { IServiceButtons } from "@/types/serviceButtons.types";
import { FC, useRef, useState } from "react"

interface IProfile {
    lang: string
    data: IProfileSimple
}

const Profile: FC<IProfile> = ({ lang, data }) => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionIsIntersecting = useObserver(sectionRef);
    const sectionAnimate = sectionIsIntersecting ? 'animate__animated animate__fadeInUp' : '';

    const [headlines] = useState<IServiceButtons>(serviceButtonsData[(lang as EnRuKeys)]);

    return (
        <section ref={sectionRef} id="about" className={`bg-white dark:bg-grayDark rounded-lg p-6 mb-2 ring-1 ring-slate-900/5 shadow-xl ${sectionAnimate}`}>

            <h2 className="text-2xl font-bold tracking-tight pb-6">{headlines.resume}</h2>

            <div className="flex flex-col md:flex-row gap-6">
                <div className='flex-[0_0_auto] h-24 w-24'>
                    <img src={data.avatar} className="rounded-full" alt="avatar" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">{data.name}</h2>
                    <h3 className="text-base font-medium tracking-tight">{data.position}</h3>
                    <p className="mt-2 text-sm">
                        {data.description}
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default Profile
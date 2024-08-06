export interface IExperienceData {
    ru: IExperienceSimple[]
    en: IExperienceSimple[]
  }
  
  export interface IExperienceSimple {
    company: string
    site?: string
    specificity: string
    position: string
    date: string
    sumDate: string
    tasks: string[]
    technologies: string[]
  }
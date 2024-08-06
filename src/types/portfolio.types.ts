export interface IPortfolioData {
    ru: IPortfolioSimple[]
    en: IPortfolioSimple[]
  }
  
  export interface IPortfolioSimple {
    name: string
    github: string
    demo: string
    description: string
    fullDescription: string
    tasks: string[]
    technologies: string[]
    images?: string[]
  }
export interface ISkillsData {
  technologies: ITechnologies
  frameworks: IFrameworks
  storage: IStorage
  design: IDesign
  methodology: IMethodology
  other: IOther2
}

export interface ITechnologies {
  markup: IMarkup[]
  styles: IStyle[]
  scripts: IScript[]
  node: INode[]
}

export interface IMarkup {
  HTML?: string
  Pug?: string
}

export interface IStyle {
  CSS?: string
  SASS?: string
}

export interface IScript {
  "JavaScript (ES5, ES6)"?: string
  Typescript?: string
}

export interface INode {
  "Node.js (базовое)": string
}

export interface IFrameworks {
  react: IReact[]
  otherFramework: IOtherFramework[]
}

export interface IReact {
  REACT?: string
  "Next-JS"?: string
}

export interface IOtherFramework {
  Astro?: string
  Webpack?: string
}

export interface IStorage {
  storage: IStorage2[]
}

export interface IStorage2 {
  Redux?: string
  "RTK Query"?: string
  "React-Query"?: string
}

export interface IDesign {
  design: IDesign2[]
}

export interface IDesign2 {
  Tailwind?: string
  "shadcn/ui"?: string
  "Styled-component"?: string
  "Material-UI"?: string
  Bootstrap?: string
}

export interface IMethodology {
  [key: string]: string[]
}

export interface IOther2 {
  [key: string]: string[]
}

export interface IExperience {
  company: string
  position: string
  date: string
  tasks: string[]
  technologies: string[]
}

export interface IPortfolio {
  name: string
  code: string
  github: string
  demo: string
  description: string
  tasks: string[]
  images: string[]
}

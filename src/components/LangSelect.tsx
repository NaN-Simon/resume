import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LangSelect = ({ lang, isDarkMode }: { lang: string, isDarkMode?: boolean }) => {
  const handleChange = (value: string) => {
    window.location.href = value
  };
  return (
    <Select onValueChange={handleChange} data-testid='Select'>

      <SelectTrigger data-testid='SelectTrigger' className="gap-2 w-full mx-2 bg-light dark:bg-dark border-0 focus:bottom-0 focus:ring-0 focus:ring-offset-0 min-w-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={isDarkMode ? '#efefef' : '#333333'}>
          <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
        </svg>
        <SelectValue data-testid='SelectValue' className='bg-transparent' placeholder={lang} />
      </SelectTrigger>

      <SelectContent className="bg-light dark:bg-dark">
        <SelectGroup>
          <SelectLabel className='text-black'>Language</SelectLabel>
          <SelectItem data-testid='selectItem' value="/">ru</SelectItem>
          <SelectItem data-testid='selectItem' value="/en">en</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LangSelect
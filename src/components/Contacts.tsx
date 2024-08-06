import { useCallback, useState } from 'react';
import pkg from 'react-copy-to-clipboard';
import { Button } from './ui/button';
import { IContacts } from '@/types/contacts.types';
import { serviceButtonsData } from '@/data';
import { EnRuKeys } from '@/types/lang.types';
import { IServiceButtons } from '@/types/serviceButtons.types';
const { CopyToClipboard } = pkg;

const Contacts = ({ lang, data }: { lang: string, data: IContacts }) => {

  const [headlines] = useState<IServiceButtons>(serviceButtonsData[(lang as EnRuKeys)]);
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${data.email}`

  const onCopy = useCallback(() => {
    setCopied(true);
  }, [])

  return (
    <section id="contacts" className="font-murmansk">
      <div className="flex justify-center items-center bg-grayDark p-10">
        <div className="max-w-auto sm:max-w-[400px] md:max-w-[650px] lg:max-w-[850px] xl:max-w-[1140px] m-auto">
          <div
            className="pb-2 text-white text-center uppercase"
          >
            {headlines.contacts}
          </div>
          <div
            data-testid="divider"
            className="border-t-[1px] border-dashed border-gray my-4"
          >
          </div>

          <div
            data-testid="socials"
            className="flex flex-col sm:flex-row justify-center items-center"
          >
            <div data-testid="left" className="flex">
              <a href={data.github}>
                <img
                  className="w-[52px] h-[52px] transition-all duration-500 hover:scale-125"
                  src="/images/contacts/github.svg"
                  alt="github"
                />
              </a>
              <a href={data.telegram}>
                <img
                  className="w-[52px] h-[52px] transition-all duration-500 hover:scale-125"
                  src="/images/contacts/telegram.svg"
                  alt="Написать в Telegram"
                />
              </a>
              <a href={data.linkedin}>
                <img
                  className="w-[52px] h-[52px] transition-all duration-500 hover:scale-125"
                  src="/images/contacts/linkedin.svg"
                  alt="Написать в linkedin"
                />
              </a>
            </div>
            <div
              data-testid="center"
              className="flex flex-col gap-3 order-2 sm:order-none p-5 sm:p-0"
            >


                <CopyToClipboard onCopy={onCopy} text={data.email}>
                  <Button variant={"ghost"} size="lg" className="w-full min-w-16 hover:bg-slate-600 text-white text-lg text-center cursor-copy">
                    {data.email}
                  </Button>
                </CopyToClipboard>


              <a
                href={mailto}
                className="text-white text-lg text-center">{headlines.send}</a
              >
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Contacts
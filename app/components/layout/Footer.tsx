import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'О компании', href: '/about' },
    { name: 'Вакансии', href: '/careers' },
    { name: 'Контакты', href: '/contacts' },
  ],
  services: [
    { name: 'Ремонт электротехнического оборудования', href: '/services/electrical-repair' },
    { name: 'Обслуживание сетей тепловодоснабжения', href: '/services/heating-water-supply' },
    { name: 'Обслуживание вентиляционного оборудования', href: '/services/ventilation-equipment' },
    { name: 'Измерения и испытания', href: '/services/measurements' },
  ],
  social: [
    { name: 'VK', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M1.554 0.5H22.446C23.3728 0.5 24 1.127 24 2.054V21.946C24 22.873 23.3728 23.5 22.446 23.5H1.554C0.627 23.5 0 22.873 0 21.946V2.054C0 1.127 0.627 0.5 1.554 0.5ZM20.2729 17.0285H18.2029C17.2502 17.0285 16.9352 16.2598 15.7304 15.0281C14.7047 13.9833 14.2047 13.8079 13.83 13.8079C13.3318 13.8079 13.2114 13.9283 13.2114 14.6206V16.3458C13.2114 16.7573 13.0625 17.0269 11.9064 17.0269C9.54625 17.0269 6.92275 15.5651 5.05875 12.7466C2.2785 8.639 1.5855 5.5295 1.5855 5.0515C1.5855 4.7925 1.7 4.5545 2.2 4.5545H4.271C4.7185 4.5545 4.879 4.7315 5.069 5.2095C6.154 8.607 7.9175 11.573 8.785 11.573C9.1215 11.573 9.2415 11.453 9.2415 10.6495V7.136C9.181 5.725 8.6105 5.6245 8.6105 5.213C8.6105 5.0035 8.8 4.5545 9.09 4.5545H12.3275C12.7045 4.5545 12.819 4.7315 12.819 5.179V9.839C12.819 10.2175 12.969 10.3315 13.0625 10.3315C13.399 10.3315 13.665 10.2175 14.2998 9.585C15.837 7.8925 16.8978 5.15 16.8978 5.15C17.0325 4.8245 17.2255 4.5561 17.7073 4.5561H19.7773C20.3393 4.5561 20.4593 4.7986 20.3393 5.1811C20.0903 6.268 17.5823 9.8421 17.5823 9.8421C17.3663 10.1896 17.307 10.3316 17.5823 10.6991C17.7873 10.9741 18.4388 11.5366 18.8518 12.0161C19.6475 12.9285 20.2733 13.6853 20.4588 14.2258C20.6733 14.7652 20.4265 17.0285 20.2729 17.0285V17.0285Z" clipRule="evenodd" />
      </svg>
    ) },
    { name: 'Telegram', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976.53.204 1.525.573 2.044.766.52.192 1.255.465 1.962.722.706.258 1.38.502 1.728.634.348.132.758.288 1.042.288.133 0 .265-.025.382-.06.291-.088.518-.297.682-.562.164-.265.303-.58.303-.58.019-.042 2.089-5.398 3.143-8.148 1.055-2.748 1.476-3.854 1.61-4.07.134-.216.09-.054.223-.122.112-.06.205-.17.284-.332.097-.195.138-.378.155-.552.034-.337-.023-.695-.093-.92-.07-.227-.207-.412-.346-.505-.152-.096-.3-.16-.503-.185-.202-.026-.356-.02-.55-.016-.194.003-.356.037-.586.087-.23.05-1.925.76-6.57 2.65-2.323.95-4.64 1.899-6.395 2.608-1.756.71-2.954 1.185-3.076 1.233-.122.048-.096.038-.134.053-.37.16-.75.388-1.07.702-.137.135-.27.295-.387.484-.117.19-.225.396-.298.646-.147.5-.154 1.176.122 1.68.275.504.74.808 1.184 1.009.65.293 1.428.44 2.124.638.696.196 1.47.437 2.264.685.793.248 1.793.57 2.319.78.527.208 1.158.468 1.599.73.442.262.76.56.989.848.229.288.38.592.422.885.041.293-.022.571-.131.837-.248.588-.5 1.103-.5 1.103l-.302.627.505.18s.133.045.328.073c.195.029.423.032.62-.01.396-.085.66-.372.66-.372l2.04-2.128s.752-.777 1.303-1.344c.551-.567.901-.936 1.303-1.39.402-.454.66-.792.887-1.085.114-.147.207-.27.269-.386.063-.116.095-.234.095-.369s-.052-.285-.095-.369c-.043-.084-.102-.156-.176-.241-.147-.17-.38-.392-.737-.686-.357-.295-.846-.653-1.342-.979-.497-.326-1-.629-1.353-.853-.176-.112-.304-.193-.304-.193l-3.781 2.607s-1.672 1.153-2.516 1.74c-.845.588-1.616 1.135-1.616 1.135l-.238.165s.223.088.324.15c.1.064.217.132.27.132 0 0 .33.009.457.056.126.046.322.144.322.144l.114.066-.019.128s-.12.923-.12 1.767c0 .845.057 1.614.057 1.614l.036.325.32-.05.413-.07s3.207-.502 6.463-1.017c3.257-.515 6.504-1.037 7.32-1.172.816-.135 1.31-.225 1.538-.296.114-.035.177-.066.177-.066l.08-.063c.254-.164.453-.493.546-.846.094-.352.11-.712.048-1.04-.062-.33-.192-.625-.339-.892-.294-.534-.724-1.04-1.175-1.505-.45-.465-1.432-1.44-1.906-1.893-.475-.455-.868-.83-1.223-1.119-.355-.29-.656-.507-.867-.645-.105-.069-.179-.114-.226-.14-.047-.025-.063-.031-.063-.031l-.032-.015zM6.195 17.138s-.292.244-.754.63c-.462.387-1.097.919-1.097.919l-.795.67.5.016s.35.016.518.016c.169 0 .347.003.347.003l.737-.422s1.183-.687 1.732-1.006c.549-.32.686-.404.686-.404l.237-.152s.01-.006.01-.025c0-.019-.01-.025-.01-.025l-.16-.113s-.372-.289-.696-.538c-.323-.249-.591-.452-.591-.452l-.24.181-.181.137s-.1.076-.243.185z" />
      </svg>
    ) },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Навигация</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Услуги</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Контакты</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <p className="text-sm leading-6 text-gray-300">
                  <span className="block font-medium text-white">Телефон:</span>
                  <a href="tel:+74951508563" className="hover:text-white">+7 (495) 150-85-63</a>
                </p>
              </li>
              <li>
                <p className="text-sm leading-6 text-gray-300">
                  <span className="block font-medium text-white">Email:</span>
                  <a href="mailto:info@enremservice.ru" className="hover:text-white">info@enremservice.ru</a>
                </p>
              </li>
              <li>
                <p className="text-sm leading-6 text-gray-300">
                  <span className="block font-medium text-white">Адрес:</span>
                  Россия, Магаданская область
                </p>
              </li>
              <li>
                <div className="flex space-x-6">
                  {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl border-t border-gray-800 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-xs leading-5 text-gray-400">
            <Link href="/privacy-policy" className="hover:text-gray-300">
              Политика конфиденциальности
            </Link>
          </p>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} ЭРС Групп. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
} 
import * as Tabs from '@radix-ui/react-tabs';
import { lazy, Suspense } from 'react';
import Progress from '../progress/progress';
import './tabs.css';


const Device = lazy(() => import("../../components/devices/device"));
const Reports = lazy(() => import("../../components/reports/reports"));
const Settings = lazy(() => import("../../components/settings/settings"));
const Account = lazy(() => import("../../components/account/account"));
const Tab = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1" orientation='vertical'>
    <Suspense fallback={<Progress />}>
      <Tabs.Content className="TabsContent" value="tab1">
        <Device/>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
          <Reports />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab3">
          <Settings />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab4">
          <Account />
      </Tabs.Content>
    </Suspense>
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 275.334 275.334" xml:space="preserve" stroke="#ffffff">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <g> <path d="M137.667,168.021c16.737,0,30.354-13.617,30.354-30.354s-13.617-30.354-30.354-30.354s-30.354,13.617-30.354,30.354 S120.93,168.021,137.667,168.021z M137.667,119.313c10.121,0,18.354,8.233,18.354,18.354s-8.233,18.354-18.354,18.354 s-18.354-8.233-18.354-18.354S127.546,119.313,137.667,119.313z"/> <path d="M269.334,131.667h-23.775c-3.015-54.818-47.074-98.877-101.892-101.892V6c0-3.313-2.687-6-6-6s-6,2.687-6,6v29.605 c0,3.313,2.687,6,6,6c52.969,0,96.062,43.093,96.062,96.062s-43.093,96.062-96.062,96.062s-96.062-43.093-96.062-96.062 c0-36.783,21.452-70.817,54.651-86.704c2.989-1.431,4.253-5.013,2.822-8.002c-1.43-2.988-5.015-4.252-8.002-2.822 c-18.131,8.676-33.473,22.217-44.366,39.158c-10.11,15.724-15.897,33.718-16.924,52.37H6c-3.313,0-6,2.687-6,6s2.687,6,6,6h23.775 c3.015,54.818,47.074,98.877,101.892,101.892v23.775c0,3.313,2.687,6,6,6s6-2.687,6-6v-23.775 c54.818-3.015,98.877-47.074,101.892-101.892h23.775c3.313,0,6-2.687,6-6S272.647,131.667,269.334,131.667z"/> </g> </g>
        </svg>
        <span>Devices</span>
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff"  viewBox="0 0 36 36" stroke="#ffffff">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier">
          <rect x="6.48" y="18" width="5.76" height="11.52" rx="1" ry="1"/>
          <rect x="15.12" y="6.48" width="5.76" height="23.04" rx="1" ry="1"/>
          <rect x="23.76" y="14.16" width="5.76" height="15.36" rx="1" ry="1"/>
          </g>
        </svg>
        <span>Reports</span>
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab3">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#e6e6e6" stroke-width="1.5"/> <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#e6e6e6" stroke-width="1.5" stroke-linecap="round"/> </g>
        </svg>
        <span>Settings</span>
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab4">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#ffffff"/> <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="#ffffff"/> </g>
        </svg>
        <span>Account</span>
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
);

export default Tab;

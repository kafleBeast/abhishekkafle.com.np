import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarItem = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Hot Market',
    path: '/hotMarket',
    icon: <IoIcons.IoMdBonfire />,
    cName: 'nav-text'
  },

  {
    title: 'Top Gainers-Losers',
    path: '/topGainersLosers',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Screener',
    path: '/screener',
    icon: <IoIcons.IoMdSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Stock details',
    path: '/stockDetails',
    icon: <FaIcons.FaChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/aboutUs',
    icon: <IoIcons.IoIosInformationCircle />,
    cName: 'nav-text'
  }
];

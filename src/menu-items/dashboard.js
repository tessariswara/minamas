// assets
import {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers
} from '@tabler/icons';
import {
  IconKey,
  IconGasStation,
  IconDropletHalf2Filled,
  IconClipboardTypography,
  IconPigMoney,
  IconReport,
  IconUserStar,
  IconCash,
  IconShoppingCart,
  IconCreditCardFilled,
  IconSettingsCog
} from '@tabler/icons-react';

// constant
const icons = {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers,
  IconKey,
  IconGasStation,
  IconDropletHalf2Filled,
  IconClipboardTypography,
  IconPigMoney,
  IconReport,
  IconCash,
  IconUserStar,
  IconShoppingCart,
  IconCreditCardFilled,
  IconSettingsCog
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  title: 'MAIN  MENU',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconHome,
      breadcrumbs: true
    },
    {
      id: 'fuel',
      title: 'Fuel Management',
      type: 'item',
      url: '/managment/fuel',
      icon: icons.IconGasStation
    },
    {
      id: 'pumps',
      title: 'Fuel Consumption',
      type: 'item',
      url: '/managment/Pump',
      icon: icons.IconDropletHalf2Filled
    },
    {
      id: 'assign duty',
      title: 'Approval Management',
      type: 'item',
      url: '/management/assignDuty',
      icon: icons.IconClipboardTypography
    }
    // {
    //   id: 'staff',
    //   title: 'Driver Management',
    //   type: 'item',
    //   url: '/hrms/staff',
    //   icon: icons.IconUserStar
    // },
    // {
    //   id: 'suppliers',
    //   title: 'Vehicle Management',
    //   type: 'item',
    //   url: '/hrms/supplier',
    //   icon: icons.IconShoppingCart
    // }
  ]
};

export default dashboard;

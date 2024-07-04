// assets
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
  IconKey,
  IconCash,
  IconUserStar,
  IconShoppingCart,
  IconCreditCardFilled,
  IconSettingsCog,
  IconGasStation,
  IconDropletHalf2Filled,
  IconClipboardTypography,
  IconPigMoney,
  IconReport
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const managements = {
  id: 'fuel managment',
  title: 'MANAGEMENT',
  type: 'group',

  children: [
    {
      id: 'staff',
      title: 'Driver Management',
      type: 'item',
      url: '/hrms/staff',
      icon: icons.IconUserStar
    },
    {
      id: 'suppliers',
      title: 'Vehicle Management',
      type: 'item',
      url: '/hrms/supplier',
      icon: icons.IconShoppingCart
    }
    // {
    //   id: 'fuel',
    //   title: 'Fuel',
    //   type: 'item',
    //   url: '/managment/fuel',
    //   icon: icons.IconGasStation
    // },
    // {
    //   id: 'pumps',
    //   title: 'Pumps',
    //   type: 'item',
    //   url: '/managment/Pump',
    //   icon: icons.IconDropletHalf2Filled
    // },
    // {
    //   id: 'assign duty',
    //   title: 'Assign Duty',
    //   type: 'item',
    //   url: '/management/assignDuty',
    //   icon: icons.IconClipboardTypography
    // },
    // {
    //   id: 'saving',
    //   title: 'Saving',
    //   type: 'item',
    //   url: '/savingList/saving',
    //   icon: icons.IconPigMoney
    // },
    // {
    //   id: 'sales report',
    //   title: 'Sales Report',
    //   type: 'item',
    //   url: '/managment/sales',
    //   icon: icons.IconReport
    // }
  ]
};

export default managements;

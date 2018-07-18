import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Menus',
    group: true,
  },

  
  {
    title: 'Cadastros',
    icon: 'nb-compose',
    children: [
      {
        title: 'Cadastro Usuário',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Cadastro Funcionário',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Fichas',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Funcionarios',
    icon: 'nb-tables',
    children: [
      {
        title: 'Cadastro',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];

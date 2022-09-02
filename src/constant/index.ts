import { GiPentacle, GiTentacleStrike } from 'react-icons/gi';
import { BiGitMerge } from 'react-icons/bi';
import {
  SiNotion,
  SiJirasoftware,
  SiMicrosoftazure,
  SiSlack,
} from 'react-icons/si';

export const PRODUCTS = [
  {
    id: 11,
    name: 'Notion',
    icon: {
      svg: SiNotion,
      color: 'text-black',
    },
  },
  {
    id: 22,
    name: 'NopenSpeed',
    icon: {
      svg: GiPentacle,
      color: 'text-red-500',
    },
  },
  {
    id: 33,
    name: 'Noimics',
    icon: {
      svg: BiGitMerge,
      color: 'text-blue-600',
    },
  },
  {
    id: 44,
    name: 'NoyerBooks',
    icon: {
      svg: GiTentacleStrike,
      color: 'text-blue-600',
    },
  },
  {
    id: 55,
    name: 'Jira',
    icon: {
      svg: SiJirasoftware,
      color: 'text-blue-500',
    },
  },
  {
    id: 66,
    name: 'Slack',
    icon: {
      svg: SiSlack,
      color: 'text-red-400',
    },
  },
  {
    id: 77,
    name: 'MS Azure',
    icon: {
      svg: SiMicrosoftazure,
      color: 'text-blue-600',
    },
  },
];

export const PRODUCT_LIMIT = 4;

export const STEPS_DETAIL = {
  HEADING: "Let's add your internal tools",
  DISCRIPTION: `Search to quickly add products your team uses today. You'll be able to
  add as many as you need later but for now let's add four.`,
};

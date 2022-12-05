import {
  FaAt,
  FaHashtag,
  FaClock,
  FaFont,
  FaQuoteLeft,
  FaWrench,
} from 'react-icons/fa'

export const testConfig = [
  {
    type: 'icon',
    icon: <FaAt />,
    label: 'punctuation',
  },
  {
    type: 'icon',
    icon: <FaHashtag />,
    label: 'numbers',
  },
  {
    type: 'divider',
  },
  {
    type: 'icon',
    icon: <FaClock />,
    label: 'time',
    additionalConfig: [
      { label: '10', value: 10 },
      { label: '30', value: 30 },
      { label: '60', value: 60 },
      { label: '120', value: 120 },
    ],
  },
  {
    type: 'icon',
    icon: <FaFont />,
    label: 'word',
    additionalConfig: [
      { label: '10', value: 10 },
      { label: '25', value: 25 },
      { label: '50', value: 50 },
      { label: '100', value: 100 },
    ],
  },
  {
    type: 'icon',
    icon: <FaQuoteLeft />,
    label: 'quote',
    additionalConfig: [
      { label: 'all', value: 1 },
      { label: 'short', value: 2 },
      { label: 'medium', value: 3 },
      { label: 'long', value: 4 },
      { label: 'thicc', value: 5 },
    ],
  },
  {
    type: 'icon',
    icon: <FaWrench />,
    label: 'custom',
  },
]

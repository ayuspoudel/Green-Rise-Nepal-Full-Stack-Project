import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { IoHome } from 'react-icons/io5'


const links = [
  { id: 2, text: 'home', path: 'blogs', icon: <IoHome /> },
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 3, text: 'all projects', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 4, text: 'survey form', path: 'EWasteSurveyForm', icon: <FaWpforms /> },
  { id: 5, text: 'profile', path: 'profile', icon: <ImProfile /> },
  // { id: 4, text: '', path: 'add-job'},
];

export default links;

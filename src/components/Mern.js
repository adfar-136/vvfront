import Roadmap from "./Roadmap";
import Youtube from "./Youtube";

const plans = [
    {
      id: 1,
      name: 'Hobby',
      memory: '4 GB RAM',
      cpu: '4 CPUs',
      storage: '128 GB SSD disk',
      price: '$40',
      isCurrent: false,
    },
    {
      id: 2,
      name: 'Startup',
      memory: '8 GB RAM',
      cpu: '6 CPUs',
      storage: '256 GB SSD disk',
      price: '$80',
      isCurrent: true,
    },
    // More plans...
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Mern() {
    const topics = [
        { name: "Introduction to HTML", link: "https://www.youtube.com/link-to-html" },
        { name: "CSS Basics", link: "https://www.youtube.com/link-to-css" },
        { name: "Responsive Design", link: "https://www.youtube.com/link-to-responsive-design" },
      ];
      
      return (
        <div>
          <Roadmap/>
          <Youtube/>
        </div>
      );
  }
  
import { MdArticle,MdEventAvailable } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { SiHomebridge } from "react-icons/si";

const navItems = [
  {
    name: "Home",
    icon: <SiHomebridge  className="h-6"/>,
    route: "home"
  },
  {
    name: "Articles",
    icon: <MdArticle className="h-6" />, // Use the imported image as the value for the 'icon' key
    route: "articles"
  },
  {
    name: "Events",
    icon: <MdEventAvailable  className="h-6"/>,
    route: "events"
  },
  {
    name: "My Bucket",
    icon: <GrProjects  className="h-6"/>,
    route: "mybucket"
  }
];

export default navItems;

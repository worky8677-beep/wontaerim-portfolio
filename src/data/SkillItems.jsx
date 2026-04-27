import { faCode, faPenNib, faClapperboard, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export const skillCategories = [
  {
    label: "DEVELOPMENT",
    icon: faCode,
    iconBg: "bg-dev-light",
    iconColor: "text-dev",
    tagClass: "bg-dev-light text-dev border-dev/30",
    skills: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    label: "DESIGN",
    icon: faPenNib,
    iconBg: "bg-collab-light",
    iconColor: "text-collab",
    tagClass: "bg-collab-light text-collab border-collab/30",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    label: "VIDEO & MEDIA",
    icon: faClapperboard,
    iconBg: "bg-video-light",
    iconColor: "text-video",
    tagClass: "bg-video-light text-video border-video/30",
    skills: ["Premier Pro", "Capcut"],
  },
  {
    label: "COLLABORATION",
    icon: faUserGroup,
    iconBg: "bg-design-light",
    iconColor: "text-design",
    tagClass: "bg-design-light text-design border-design/30",
    skills: ["Notion", "Figma"],
  },
];

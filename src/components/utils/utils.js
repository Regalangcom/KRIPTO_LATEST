import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";

import { MapPin } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";

export const Menus = [
  {
    name: "Solution",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "AI Auditor",
        desc: "Responsive design",
        link : '/Auditor',
        icon: PanelsTopLeft,
      },
      {
        name: "Privacy Mixer",
        desc: "Site control",
        icon: Bolt,
        link : '/Privacy',

      },
      {
        name: "Privacy DEX",
        desc: "Site control",
        icon: Bolt,
        link: "/DEX"
      },
      {
        name: "Anti-Rug AI",
        desc: "Site control",
        icon: Bolt,
        link: "/Anti-Rug"
      },
      {
        name: "AI Developer Hub",
        desc: "Site control",
        icon: Bolt,
        link : "/AI-Developer-Hub"
      },
    ],
    gridCols: 2,
  },
  {
    name: "Community",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Knowlage base",
        desc: "Browse templates",
        icon: ShoppingBag,
        link : "/Knowlage"
      },
      {
        name: "Events",
        desc: "Upcoming events",
        icon: MapPin,
        link : "/Events"
      },
      {
        name: "LeaderBoard",
        desc: "Changelog",
        icon: BellDot,
        link : "/LeaderBoard"
      },
    ],
    gridCols: 3,
  },
  {
    name: "Resources",
    subMenu: [
      {
        name: "Blog",
        desc: "Center",
        icon: CircleHelp,
        link : "/Blog"
      },
      {
        name: "Whitepaper",
        desc: "Project help",
        icon: MessageCircle,
        link : "/Whitepaper"
      },
      {
        name: "Documentation",
        desc: "Urgent issues",
        icon: TriangleAlert,
        link : "/Documentation"
      },
      {
        name: "Pitch Deck",
        desc: "Urgent issues",
        icon: TriangleAlert,
        link : "/Pitch-Deck"
      },
      {
        name: "Media Kit",
        desc: "Urgent issues",
        icon: TriangleAlert,
        link : "/Media-Kit"
      },
    ],
    gridCols: 1,
  },
  {
    name: "Platform",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "About Us",
        desc: "Overview",
        icon: ShieldPlus,
        link : "/About-Us"
      },
      {
        name: "Ecosystem",
        desc: "Design together",
        icon: Users,
        link : "/Ecosystem"

      },
      {
        name: "AiAuditor Token",
        desc: "Stories",
        icon: Dessert,
        link : "/AiAuditor-Token"

      },
      {
        name: "Dashboard",
        desc: "Your site secured",
        icon: Lock,
        link : "/Dashboard"
      },
    ],
    gridCols: 2,
  },

];

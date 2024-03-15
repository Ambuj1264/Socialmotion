import { FacebookDataInterface, SocialMenuType } from "@/types/interface";

export const BRAND_NAME = "SOCIAL MOTION";
export const BANNER_HEADING = "Welcome to Social Motion";
export const BANNER_SUB_HEADING =
  "Automate Your Social Media with Social Motion";
export const Buyyouproduct="BUY YOUR FAVOURITE PRODUCTS"
export const SocialMenu: SocialMenuType[] = [
  {
    details: "Automate Your Facebook Account",
    toolNo: "5 Free and 10 Paid  tools",
    name: "Facebook",
    addr: "/product/facebook/manageextension",
    imgAddr:
      "image/facebook-logo-3d-social-media-icon-isolated/m024t0256_b_facebook_17oct22.jpg",
  },
  {
    details: "Automate Your Instagram Account",
    toolNo: "Coming soon..",
    name: "Instagram",
    addr: "#",
    imgAddr:
      "image/instagram-icon-3d-rendering-isolated/m024t0252_a_social_media_icon_12oct22.jpg",
  },
  {
    details: "Automate Your Linkedin Account",
    toolNo: "Coming soon..",
    name: "Linkedin",
    addr: "#",
    imgAddr:
      "image/social-media-linkedin-3d-icon-render-with-transparent-background-linkedin-3d-icon-illustration_740533-279-transformed.jpeg",
  },
  {
    details: "Automate Your Official Website",
    toolNo: "Order tool",
    name: "Your Website",
    addr: "/contact",
    imgAddr: "image/hero-card-complete.jpeg",
  },
];
export const priceSocialMenu: SocialMenuType[] = [
  {
    details: "Automate Your Facebook Account",
    toolNo: "5 Free and 10 Paid  tools",
    name: "Facebook",
    addr: "/product/facebook/manageextension",
    price : "40"
  },
  {
    details: "Automate Your Instagram Account",
    toolNo: "Coming soon..",
    name: "Instagram",
    addr: "#",
    price : ""
  },
  {
    details: "Automate Your Linkedin Account",
    toolNo: "Coming soon..",
    name: "Linkedin",
    addr: "#",
    price : ""
   
  },
  {
    details: "Automate Your Official Website",
    toolNo: "Order tool",
    name: "Your Website",
    addr: "/contact",
    price : "100"

  },
];

export const FacebookData: FacebookDataInterface[] = [
  {
    key: "facebookextension",
    link: "/product/facebook/manageextension",
    name: "Manage Extension",
  },
  {
    key: "becameamember",
    link: "/product/facebook/becameamember",
    name: "Became a Member",
  },
];

export const sidebarPathNames = [
  "/product/facebook/becameamember",
  "/product/facebook/manageextension",
];
export const FacebookTool = [
  {
    title: "Friend Request Canceller",
    description:
      "Easily cancel pending friend requests with automation.",
    link: "/demoDetails/FriendRequestCanceller",
  },
  {
    title: "Auto Comment Responder",
    description:
      "Respond to your fans' comments automatically.",
    link: "#",
  },
  {
    title: "Message Deletion Tool",
    description:
      "Effortlessly delete unnecessary messages with a single click.",
    link: "#",
  },
  {
    title: "Group Deletion Automation",
    description:
      "Swiftly remove unnecessary groups using automation.",
    link: "#",
  },
  {
    title: "Message Sender Automation",
    description:
      "Send messages to multiple friends with one click.",
    link: "#",
  },
  {
    title: "Inactive Friends Unfriender",
    description:
      "Easily remove inactive friends to maintain your friend list.",
    link: "#",
  },
];

import { FacebookDataInterface, SocialMenuType } from "@/types/interface";

export const BRAND_NAME = "SOCIAL MOTION";
export const BANNER_HEADING = "Welcome to Social Motion";
export const BANNER_SUB_HEADING =
  "Automate Your Social Media with Social Motion";
export const Buyyouproduct = "BUY YOUR FAVOURITE PRODUCTS";
export const BuySingleproduct = "BUY YOUR FAVOURITE PRODUCT";
export const SocialMenu: SocialMenuType[] = [
  {
    details: "Automate Your Facebook Account",
    toolNo: "1 Free and 5 Paid  tools",
    name: "Facebook",
    addr: "/product/facebook/manageextension",
    imgAddr:
      "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182418/vedcdnzsnzvjfuv6ywkt.jpg",
  },
  {
    details: "Automate Your Instagram Account",
    toolNo: "Coming soon..",
    name: "Instagram",
    addr: "#",
    imgAddr:
      "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182266/ggv9eqifbwyhaqjzv4gv.jpg",
  },
  {
    details: "Automate Your Linkedin Account",
    toolNo: "Coming soon..",
    name: "Linkedin",
    addr: "#",
    imgAddr:
      "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182336/kvsqenyclubxq3qndbb0.jpg",
  },
  {
    details: "Automate Your Official Website",
    toolNo: "Order tool",
    name: "Your Website",
    addr: "/contact",
    imgAddr: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711181875/j3xe93qbonoyuqk6ubmf.jpg",
  },
];
export const priceSocialMenu: SocialMenuType[] = [
  {
    details: "Automate Your Facebook Account",
    toolNo: "5 Free and 10 Paid  tools",
    name: "Facebook",
    addr: "/product/facebook/manageextension",
    price: "40",
  },
  {
    details: "Automate Your Official Website",
    toolNo: "Order tool",
    name: "Your Website",
    addr: "/contact",
    price: "100",
  },
];

export const FacebookData: FacebookDataInterface[] = [
  {
    key: "facebookextension",
    link: "/product/facebook/manageextension",
    name: "Manage Extension",
  },
  {
    key: "BuyNow",
    link: "/buynow/Facebook",
    name: "Buy Now",
  },
  {
    key: "becameamember",
    link: "/product/facebook/becameamember",
    name: "Extension",
  },
];

export const sidebarPathNames = [
  "/product/facebook/becameamember",
  "/product/facebook/manageextension",
];
export const FacebookTool = [
  {
    title: "Friend Request Canceller",
    description: "Easily cancel pending friend requests with automation.",
    link: "/demoDetails/FriendRequestCanceller",
  },
  {
    title: "Auto Comment Responder",
    description: "Respond to your fans' comments automatically.",
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
    description: "Swiftly remove unnecessary groups using automation.",
    link: "#",
  },
  {
    title: "Message Sender Automation",
    description: "Send messages to multiple friends with one click.",
    link: "#",
  },
  {
    title: "Inactive Friends Unfriender",
    description: "Easily remove inactive friends to maintain your friend list.",
    link: "#",
  },
];
export const API_ERROR_MESSAGE = "An error occurred while processing your request."

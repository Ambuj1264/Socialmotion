import { FacebookDataInterface, SocialMenuType, TestimonialType } from "@/types/interface";

export const BRAND_NAME = "SOCIAL MOTION";
export const BANNER_HEADING = "Welcome to Social Motion";
export const CompanySlogan= "+100 Companies interested in our Social Motion";
export const CompanyImages =[ "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76a1410b0086f23f39_2.png", "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76c2db6bd98c24844a_9.png", "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76de7d58e1d6bae4d2_8.png", "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76eee048572ef41963_5.png", "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea768e5ecaab5f55590f_6.png"]
export const BANNER_SUB_HEADING =
  "Automate Your Social Media with Social Motion";
export const buyYourProduct = "BUY YOUR FAVOURITE PRODUCTS";
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
    name: "Extension Deatails",
  },
  {
    key: "BuyNow",
    link: "/buynow/Facebook",
    name: "Buy Now",
  },
  {
    key: "becameamember",
    link: "/product/facebook/becameamember",
    name: "Extensions",
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

export const SlickSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};


export const TestimonialDetails : TestimonialType[] = [
  {
    name: "John Doe",
    image: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182418/vedcdnzsnzvjfuv6ywkt.jpg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Doe",
    image: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182418/vedcdnzsnzvjfuv6ywkt.jpg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Doe",
    image: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182418/vedcdnzsnzvjfuv6ywkt.jpg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Doe",
    image: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182418/vedcdnzsnzvjfuv6ywkt.jpg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Doe",
    image: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182418/vedcdnzsnzvjfuv6ywkt.jpg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]
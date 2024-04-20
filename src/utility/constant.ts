import { FacebookDataInterface, SocialMenuType, TestimonialType } from "@/types/interface";

export const BRAND_NAME = "SOCIAL MOTION";
export const BANNER_HEADING = "Welcome to Social Motion";
export const CompanySlogan = "+100 Companies interested in our Social Motion";
export const CompanyImages = [
  "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76a1410b0086f23f39_2.png",
  "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76c2db6bd98c24844a_9.png",
  "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76de7d58e1d6bae4d2_8.png",
  "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea76eee048572ef41963_5.png",
  "https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/64ebea768e5ecaab5f55590f_6.png",
];
export const BANNER_SUB_HEADING = "Automate Your Social Media with Social Motion";
export const buyYourProduct = "BUY YOUR FAVOURITE PRODUCTS";
export const BuySingleproduct = "BUY YOUR FAVOURITE PRODUCT";
export const SocialMenu: SocialMenuType[] = [
  {
    details: "Automate Your Facebook Account",
    toolNo: "1 Free and 5 Paid  tools",
    name: "Facebook",
    addr: "/product/facebook/manageextension",
    imgAddr: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182418/vedcdnzsnzvjfuv6ywkt.jpg",
  },
  {
    details: "Automate Your Instagram Account",
    toolNo: "Coming soon..",
    name: "Instagram",
    addr: "#",
    imgAddr: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182266/ggv9eqifbwyhaqjzv4gv.jpg",
  },
  {
    details: "Automate Your Linkedin Account",
    toolNo: "Coming soon..",
    name: "Linkedin",
    addr: "#",
    imgAddr: "https://res.cloudinary.com/dzepo3ahj/image/upload/v1711182336/kvsqenyclubxq3qndbb0.jpg",
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
  {
    key: "installationanddemo",
    link: "/installationanddemo",
    name: "Installation and Demo",
  },
];

export const sidebarPathNames = ["/product/facebook/becameamember", "/product/facebook/manageextension"];
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
    description: "Effortlessly delete unnecessary messages with a single click.",
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
export const API_ERROR_MESSAGE = "An error occurred while processing your request.";

export const SlickSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

export const TestimonialDetails: TestimonialType[] = [
  {
    name: "John",
    feedback: "I've been using this social media automation site for months now and it has drastically improved my productivity. Highly recommended!",
    image: "https://source.unsplash.com/featured/1920x1080/?human,man",
  },
  {
    name: "Emily",
    feedback: "This site has saved me so much time managing my social media accounts. It's incredibly easy to use and has all the features I need.",
    image: "https://source.unsplash.com/featured/1920x1080/?human,woman",
  },
  {
    name: "Michael",
    feedback: "I was skeptical at first, but after trying it out, I'm amazed at how much time I've saved. It's like having a personal social media assistant!",
    image: "https://source.unsplash.com/featured/1920x1080/?human",
  },
  {
    name: "Sarah",
    feedback: "The best social media automation tool I've ever used. It's intuitive, powerful, and saves me hours every week.",
    image: "https://source.unsplash.com/featured/1920x1080/?person",
  },
  {
    name: "David",
    feedback: "I've tried several similar tools before, but none come close to the functionality and ease of use of this one. Highly recommended!",
    image: "https://source.unsplash.com/featured/1920x1080/?portrait",
  },
  {
    name: "Jessica",
    feedback: "Using this site has been a game-changer for my business. I can't imagine managing social media without it.",
    image: "https://source.unsplash.com/featured/1920x1080/?face",
  },
  {
    name: "Ryan",
    feedback: "As a social media manager, this tool has made my job so much easier. It's reliable, efficient, and constantly updated with new features.",
    image: "https://source.unsplash.com/featured/1920x1080/?people",
  },
  {
    name: "Emma",
    feedback: "I love how customizable this site is. I can tailor it to fit my specific needs and workflows perfectly.",
    image: "https://source.unsplash.com/featured/1920x1080/?model",
  },
  {
    name: "Daniel",
    feedback: "The support team behind this site is fantastic. Anytime I've had a question or issue, they've been quick to respond and help me out.",
    image: "https://source.unsplash.com/featured/1920x1080/?person,man",
  },
  {
    name: "Olivia",
    feedback: "This site has helped me grow my social media presence exponentially. I've seen a noticeable increase in followers and engagement since I started using it.",
    image: "https://source.unsplash.com/featured/1920x1080/?person,woman",
  },
];

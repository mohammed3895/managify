export const UserList = [
  {
    name: "John doe",
    email: "john@doe.com",
    photoUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    phoneNumber: "+11 234 567 898",
    role: "Customer",
    status: "active",
    connected: true,
    analytics: [
      { label: "Projects", value: "14" },
      { label: "Tasks", value: "10" },
      { label: "Connections", value: "1k" },
    ],
  },
  {
    name: "Ahme Ali",
    email: "ahmed@ali.com",
    photoUrl: "https://randomuser.me/api/portraits/men/35.jpg",
    phoneNumber: "+20 123 456 789",
    role: "seller",
    status: "active",
    connected: false,
    analytics: [
      { label: "Projects", value: "17" },
      { label: "Tasks", value: "22" },
      { label: "Connections", value: "21k" },
    ],
  },
  {
    name: "sara adam",
    email: "sara@adam.com",
    photoUrl: "https://randomuser.me/api/portraits/women/40.jpg",
    phoneNumber: "+20 132 958 765",
    role: "customer service",
    status: "banned",
    connected: true,
    analytics: [
      { label: "Projects", value: "27" },
      { label: "Tasks", value: "11" },
      { label: "Connections", value: "13k" },
    ],
  },
  {
    name: "alison  jones",
    email: "alison@jones.com",
    photoUrl: "https://randomuser.me/api/portraits/men/85.jpg",
    phoneNumber: "+91 557 881 295",
    role: "content manager",
    status: "active",
    connected: false,
    analytics: [
      { label: "Projects", value: "35" },
      { label: "Tasks", value: "21" },
      { label: "Connections", value: "3.5k" },
    ],
  },
  {
    name: "Ahme hassan",
    email: "ahmed@hassan.com",
    photoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    phoneNumber: "+20 113 456 578",
    role: "seller",
    status: "active",
    connected: true,
    analytics: [
      { label: "Projects", value: "32" },
      { label: "Tasks", value: "41" },
      { label: "Connections", value: "30k" },
    ],
  },
  {
    name: "shahd ahmed",
    email: "shahd@ahmed.com",
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    phoneNumber: "+12 232 456 789",
    role: "admin",
    status: "active",
    connected: true,
    analytics: [
      { label: "Projects", value: "19" },
      { label: "Tasks", value: "26" },
      { label: "Connections", value: "10.1k" },
    ],
  },
  {
    name: "yasmeen ali",
    email: "yasmeen@ali.com",
    photoUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    phoneNumber: "+12 111 456 789",
    role: "Product Manager",
    status: "banned",
    connected: false,
    analytics: [
      { label: "Projects", value: "24" },
      { label: "Tasks", value: "13" },
      { label: "Connections", value: "5k" },
    ],
  },
  {
    name: "hassan bakry",
    email: "hassan@bakry.com",
    photoUrl: "https://randomuser.me/api/portraits/men/53.jpg",
    phoneNumber: "+12 111 456 789",
    role: "Front End Developer",
    status: "active",
    connected: true,
    analytics: [
      { label: "Projects", value: "3" },
      { label: "Tasks", value: "10" },
      { label: "Connections", value: "805" },
    ],
  },
  {
    name: "farah khaled",
    email: "farah@khaled.com",
    photoUrl: "https://randomuser.me/api/portraits/women/95.jpg",
    phoneNumber: "+12 111 456 789",
    role: "user",
    status: "active",
    connected: false,
    analytics: [
      { label: "Projects", value: "8" },
      { label: "Tasks", value: "10" },
      { label: "Connections", value: "941" },
    ],
  },
  {
    name: "layla haitham",
    email: "lyla@haitham.com",
    photoUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    phoneNumber: "+12 111 456 789",
    role: "Back End Developer",
    status: "active",
    connected: true,
    analytics: [
      { label: "Projects", value: "13" },
      { label: "Tasks", value: "32" },
      { label: "Connections", value: "4.2k" },
    ],
  },
];

export const Chats = [
  {
    id: 1,
    sender: {
      name: "John doe",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    messages: [
      {
        text: `Hi there! How can I help you?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `i need support with my product`,
        time: "12 : 40 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 58 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me the price is too high for me the price is too high for me the price is too high for me`,
        time: "01 : 01 pm",
        isMe: false,
      },
      {
        text: `can i found lower price product ?`,
        time: "01 : 12 pm",
        isMe: false,
      },
      {
        text: `yes, i will send you  the link to a cheaper one`,
        time: "01 : 13 pm",
        isMe: true,
      },
    ],
  },
  {
    id: 2,
    sender: {
      name: "sara larson",
      avatar: "https://randomuser.me/api/portraits/women/83.jpg",
    },
    messages: [
      {
        text: `Hey, did find  something good?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `yes , actually it's amazing !`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `ok, i'm waiting  for your message`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `sure, i will connect you  with him as soon as possible`,
        time: "12 : 38 pm",
        isMe: false,
      },
    ],
  },
  {
    id: 3,
    sender: {
      name: "Adam smith",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    messages: [
      {
        text: `Hi there! How can I help you?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `i need support with my product`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `can i found lower price product ?`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `yes, i will send you  the link to a cheaper one`,
        time: "12 : 38 pm",
        isMe: true,
      },
    ],
  },
  {
    id: 4,
    sender: {
      name: "suzan hady",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    messages: [
      {
        text: `Hi there! How can I help you?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `i need support with my product`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `can i found lower price product ?`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `yes, i will send you  the link to a cheaper one`,
        time: "12 : 38 pm",
        isMe: true,
      },
    ],
  },
  {
    id: 5,
    sender: {
      name: "hassan adam",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    messages: [
      {
        text: `Hi there! How can I help you?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `i need support with my product`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `can i found lower price product ?`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `yes, i will send you  the link to a cheaper one`,
        time: "12 : 38 pm",
        isMe: true,
      },
    ],
  },
  {
    id: 6,
    sender: {
      name: "Layla osman",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    messages: [
      {
        text: `Hi there! How can I help you?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `i need support with my product`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `sure, what is your problem ?`,
        time: "12 : 38 pm",
        isMe: true,
      },
      {
        text: `the price is too high for me`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `can i found lower price product ?`,
        time: "12 : 38 pm",
        isMe: false,
      },
      {
        text: `yes, i will send you  the link to a cheaper one`,
        time: "12 : 38 pm",
        isMe: true,
      },
    ],
  },
];

export const ActiveUsersData = [
  {
    time: "daily",
    total: "1.2k",
  },
  {
    time: "weekly",
    total: "12k",
  },
  {
    time: "monthly",
    total: "46.4k",
  },
];

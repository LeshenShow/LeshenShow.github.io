import React from "react";
import ReactDOM from "react-dom/client";
// import { rerenderEntireTree } from "../index";
let rerenderEntireTree = () => {};

let state = {
  profilePage: {
    postData: [
      { id: 0, message: "Hi, how are u?", likes: 10 },
      { id: 1, message: "It's my first post", likes: 15 },
      { id: 2, message: "It's my second post", likes: 115 },
      {
        id: 3,
        message:
          "Excepteur do aliqua laborum sit aliqua do quis adipisicing cupidatat incididunt reprehenderit cupidatat voluptate irure. Laboris in occaecat qui consectetur cupidatat minim nulla do id amet. Deserunt deserunt ex veniam ex esse. Magna laborum occaecat id tempor et dolore officia et enim tempor excepteur velit ea. Et exercitation id quis quis commodo sunt et dolor ad ullamco laborum.",
        likes: 20,
      },
      {
        id: 4,
        message:
          "Excepteur do aliqua laborum sit aliqua do quis adipisicing cupidatat incididunt reprehenderit cupidatat voluptate irure. Laboris in occaecat qui consectetur cupidatat minim nulla do id amet. Deserunt deserunt ex veniam ex esse. Magna laborum occaecat id tempor et dolore officia et enim tempor excepteur velit ea. Et exercitation id quis quis commodo sunt et dolor ad ullamco laborum.",
        likes: 30,
      },
      {
        id: 5,
        message:
          "Excepteur do aliqua laborum sit aliqua do quis adipisicing cupidatat incididunt reprehenderit cupidatat voluptate irure. Laboris in occaecat qui consectetur cupidatat minim nulla do id amet. Deserunt deserunt ex veniam ex esse. Magna laborum occaecat id tempor et dolore officia et enim tempor excepteur velit ea. Et exercitation id quis quis commodo sunt et dolor ad ullamco laborum.",
        likes: 40,
      },
    ],
    newPostText: "",
  },
  dialogsPage: {
    dialogsData: [
      {
        id: 0,
        name: "Andrey",
        photo: "https://www.svgrepo.com/show/416520/animal-bear-cartoon.svg",
      },
      {
        id: 1,
        name: "Dima",
        photo: "https://www.svgrepo.com/show/416529/animal-cartoon-fauna.svg",
      },
      {
        id: 2,
        name: "Sasha",
        photo:
          "https://www.svgrepo.com/show/416543/animal-carnivore-cartoon.svg",
      },
      {
        id: 3,
        name: "Nikita",
        photo:
          "https://www.svgrepo.com/show/416521/animal-carnivore-cartoon-2.svg",
      },
      {
        id: 4,
        name: "Serezha",
        photo:
          "https://www.svgrepo.com/show/416522/animal-austalia-cartoon.svg",
      },
      {
        id: 5,
        name: "Artem",
        photo: "https://www.svgrepo.com/show/416523/animal-cartoon-fauna-5.svg",
      },
      {
        id: 6,
        name: "Valera",
        photo:
          "https://www.svgrepo.com/show/416531/animal-carnivore-cartoon-4.svg",
      },
    ],
    messagesData: [
      { id: 0, message: "Hi" },
      { id: 1, message: "How are u" },
      { id: 2, message: "Yo" },
    ],
    newMessageText: "",
  },
  navbarPage: {
    friendsData: [
      {
        name: "Dima",
        photo: "https://www.svgrepo.com/show/416529/animal-cartoon-fauna.svg",
      },
      {
        name: "Valera",
        photo:
          "https://www.svgrepo.com/show/416531/animal-carnivore-cartoon-4.svg",
      },
      {
        name: "Sasha",
        photo:
          "https://www.svgrepo.com/show/416543/animal-carnivore-cartoon.svg",
      },
    ],
  },
};
// window.state = state;
// export let addPost = (postMessage) => {
//   let newPost = {
//     id: 5,
//     message: postMessage,
//     likes: 0,
//   };
//   state.profilePage.postData.push(newPost);
//   rerenderEntireTree(state);
// };
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.postData.unshift(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 3,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};
export const updateMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  // rerenderEntireTree(state);
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;

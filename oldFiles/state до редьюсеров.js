const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let store = {
  _state: {
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
          photo:
            "https://www.svgrepo.com/show/416523/animal-cartoon-fauna-5.svg",
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
          id: 0,
          name: "Dima",
          photo: "https://www.svgrepo.com/show/416529/animal-cartoon-fauna.svg",
        },
        {
          id: 1,
          name: "Valera",
          photo:
            "https://www.svgrepo.com/show/416531/animal-carnivore-cartoon-4.svg",
        },
        {
          id: 2,
          name: "Sasha",
          photo:
            "https://www.svgrepo.com/show/416543/animal-carnivore-cartoon.svg",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  // _addPost() {
  //   let newPost = {
  //     id: 6,
  //     message: this._state.profilePage.newPostText,
  //     likes: 0,
  //   };
  //   this._state.profilePage.postData.unshift(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // _updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  // _addMessage() {
  //   let newMessage = {
  //     id: 3,
  //     message: this._state.dialogsPage.newMessageText,
  //   };
  //   this._state.dialogsPage.messagesData.push(newMessage);
  //   this._state.dialogsPage.newMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // _updateMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    //{type:'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postData.unshift(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 3,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST }); // return { type: ADD_POST };
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: text,
});

export default store;
window.store = store;
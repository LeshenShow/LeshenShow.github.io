// import profileReducer, {
//   addPostActionCreator,
//   deletePost,
// } from "./profileReducer";
// import { React } from "react";
// import { ReactDOM } from "react-dom/client";
// import axios from "axios";
// let state = {
//   postData: [
//     { id: 1, message: "Hi, how are u?", likes: 10 },
//     { id: 2, message: "It's my first post", likes: 15 },
//     { id: 3, message: "It's my second post", likes: 115 },
//     { id: 4, message: "Excepteur lab", likes: 20 },
//   ],
// };
// test("length of posts should be incremented", () => {
//   // 1. test data
//   let action = addPostActionCreator("it-kama");
//   // 2.action
//   let newState = profileReducer(state, action);
//   //3. expectation
//   expect(newState.postData.length).toBe(5);
// });
// test("must be it-kama", () => {
//   // 1. test data
//   let action = addPostActionCreator("it-kama");
//   // 2.action
//   let newState = profileReducer(state, action);
//   //3. expectation
//   console.log(newState.postData[4]);
//   expect(newState.postData[0].message).toBe("it-kama");
// });
// test("after delete length of messages should be decrement", () => {
//   let action = deletePost(1);
//   let newState = profileReducer(state, action);
//   expect(newState.postData.length).toBe(3);
// });

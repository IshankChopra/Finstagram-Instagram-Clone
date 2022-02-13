import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    user: USERS[0].user,
    likes: 123,
    caption: "CAT",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "ishank",
        comment: "what a cat",
      },
      {
        user: "chopra",
        comment: "lovely cat",
      },
    ],
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/ogw/ADea4I7J3oe3ftaaRZNrrMpC9RJfSLpyVzjIRRptYbjK=s83-c-mo",
    user: USERS[1].user,
    likes: 456,
    caption: "PUNEET CHOPRA",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "kjr",
        comment: "jfh jfhe jfh",
      },
    ],
  },
];

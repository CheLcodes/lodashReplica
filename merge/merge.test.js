const { mergeJSON } = require("./merge.js");

const user1 = {
    name: "userA",
    age: 27,
    links: {
        blog: 'blog-a',
        facebook: 'facebook-a',
        instagram: 'instagram-a',
    },
    interests: ['gaming', 'water polo'],
};

const user2 = {
    name: "userB",
    age: 25,
    links: {
        twitter: 'twitter-b',
        instagram: 'instagram-b'
    },
    interests: ['tv', 'cat', 'dog', 'zoo'],
};

const user3 = {
    name: "userC",
    age: 29,
    links: {
        twitter: 'twitter-c',
        instagram: 'instagram-c'
    },
    interests: ['music', 'movie'],
};

const user = mergeJSON(user1, user2, user3);
console.log(user);


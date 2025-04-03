// const user = new Object();  // same way to declare obj
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));

const user = {
  isLoggedIn: true,
  age: 16,
  name: {
    fname: "divya",
    lname: "jadhav",
    email: {
      emailId1: "divya@redxcel.com",
      emailId2: "divya@gmail.com",
    },
  },
};

console.log(user);
console.log(user.name.email.emailId1); //access the object frrom hierarchy

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = { ...obj1, ...obj2, ...obj3 }; //using spread operator
console.log(obj4);
console.log(typeof obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3); //using assign
console.log(obj5);
console.log(typeof obj5);

const mailUsers = [
  {
    id: 1,
    email: "sh@gmail.com",
  },
  {
    id: 1,
    email: "oh@gmail.com",
  },
  {
    id: 1,
    email: "dh@gmail.com",
  },
];

mailUsers[0].id;
console.log(mailUsers[0].email);

// ....................OBJECT DESTUCTURING................

const courseDetails = {
  course: "Frontend",
  duration: "1 month",
  courseTutor: "Divya",
  languagesTime: {
    html: "1 week",
    css: "1 week",
    js: "3 weeek",
  },
};

const { course } = courseDetails;
console.log(course);

const { languagesTime } = courseDetails;
console.log(languagesTime.html);

const { courseTutor: tutor } = courseDetails; // Object destructuring with alias
console.log(tutor);

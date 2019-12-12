// const person: {
//     name: string;
//     age: number;
//     nickname: string,
//     hobbies: string[],
//     role: [number, string] // Tuple
// } = {
//   name: 'Byron',
//   age: 48,
//   nickname: 'Five0',
//   hobbies: ['Sports', 'Chess'],
//   role: [2, 'author']  //Tuple
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Byron',
    age: 48,
    nickname: 'Five0',
    hobbies: ['Sports', 'Chess'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Chess'];
console.log(person.nickname);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('is author');
}

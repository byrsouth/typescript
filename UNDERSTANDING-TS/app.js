var person = {
    name: 'Byron',
    age: 48,
    nickname: 'Five0',
    hobbies: ['Sports', 'Chess'],
    role: [2, 'author']
};
var favoriteActivities;
favoriteActivities = ['Chess'];
console.log(person.nickname);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}

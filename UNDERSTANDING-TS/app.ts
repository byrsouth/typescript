const person = {
  name: 'Byron',
  age: 48,
  nickname: 'Five0',
  hobbies: ['Sports', 'Chess']
};

let favoriteActivities: string[];
favoriteActivities = ['Chess'];

console.log(person.nickname);

for (const hobby of person.hobbies ) {
    console.log(hobby);
}
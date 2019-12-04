const person: {
    name: string;
    age: number;
    nickname: string,
    hobbies: string[],
    role: [number, string] // Tuple
} = {
  name: 'Byron',
  age: 48,
  nickname: 'Five0',
  hobbies: ['Sports', 'Chess'],
  role: [2, 'author']  //Tuple
};



let favoriteActivities: string[];
favoriteActivities = ['Chess'];

console.log(person.nickname);

for (const hobby of person.hobbies ) {
    console.log(hobby);
}
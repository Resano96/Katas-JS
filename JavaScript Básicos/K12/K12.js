const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
    listWithoutDuplicates = Array.from(new Set(list))
    return listWithoutDuplicates
}

console.log(removeDuplicates(duplicates))
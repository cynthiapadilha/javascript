const char = createKnight('Cynthia')
const monster = createLittleMonster()

stage. start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

console.log(char.name)
console.log(monster)
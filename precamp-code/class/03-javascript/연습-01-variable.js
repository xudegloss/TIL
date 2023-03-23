let name = "홍길동";
// undefined
name;
// '홍길동'
name = "김코딩";
// '김코딩'
name;
// '김코딩'
let name = "나코딩";
// Uncaught SyntaxError: Identifier 'name' has already been declared

const nickname = "웬디";
// undefined
nickname;
// '웬디'
nickname = "아이린";
// Uncaught TypeError: Assignment to constant variable.

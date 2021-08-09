let str = `
010-1234-5678.
thejava@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// @ 앞의 1글자이상의 단어 검색
console.log(str.match(/.{1,}(?=\@)/g));
// @ 뒤의 1글자이상의 단어 검색
console.log(str.match(/(?<=\@).{1,}/g));

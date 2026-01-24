//checking word repeatition
let word = "Why are you here? is there anything which you are finding?";
let wordsplit = (word.toLowerCase()).split('');
let dup = [];

wordsplit.forEach((wp)=>{
    const wordsplit1 = wordsplit.find(w => wp == w && wp !== " ")
    if (wordsplit1) {
        
        const wordspilt2 = dup.find(d => d == wp);
        if (!wordspilt2) {
            dup.push(wp);
        }
    }
})

console.log(dup);
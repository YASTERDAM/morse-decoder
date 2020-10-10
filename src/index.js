const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const BIN_TO_MORSE={
    11:'-',
    10:'.',
}

function decode(expr) {
    debugger
    let res='';
    let buffer=[];
    let word='';
    expr=expr.split('**********');
    for(let j=0;j<expr.length;j++){
        word=expr[j];
        for(let i=0;i<word.length/10;i++){
            let c=0+i*10;
            while(c!==i*10+10){
                if(word[c]==1){
                buffer.push(word.slice(c,c+2));
                c++;
                }
                c++;
            }
            res+=MORSE_TABLE[buffer.map((el)=>el=BIN_TO_MORSE[el]).join('')];
            buffer=[];
            expr[j]=expr[j].split('').splice(0,10).join('');
        }
        res+=' ';
    }
    return res.trim();
}

module.exports = {
    decode
}
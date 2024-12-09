console.log('Andre' && true && false);

function falaOi (){
    return "OI";
}

const vaiExecutar = false;

vaiExecutar && falaOi();

console.log(0 || false || null || 'Andre' || true);

const corUsuario = false;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
const cardFaces = ['1J.svg', '2J.svg', '2B.svg']

for (let i = 0; i <= 3; i++) {
    
    if(i === 0){
        cardSuit = 'C'
    }else if( i === 1){
        cardSuit = 'S'
    }else if( i === 2){
        cardSuit = 'D'
    }else if( i === 3){
        cardSuit = 'H'
    }
    console.log(i)
    for (let y = 2; y <= 14; y++) {
        cardNumber = y;
        if( y <= 9){
            cardName = cardNumber
        }else if( y === 10){
            cardName = 'T'
        }else if ( y === 11){
            cardName = 'J'
        }else if( y === 12 ){
            cardName = 'Q'
        }else if(y === 13){
            cardName = 'K'
        }else{
            cardName = 'A'
        }
        cardFaces.push(`${cardName}${cardSuit}.svg`)
        cardNumber += 1
        console.log(cardSuit)
    }
}

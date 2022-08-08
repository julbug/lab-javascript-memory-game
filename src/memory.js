class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }
      for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
  }   
    return this.cards;
  }

  // shuffleCards() {
  //   if(!this.cards){
  //     return undefined
  //   }

  // let arrLength = this.cards.length;

  // while (arrLength > 0){
        //**get a random number from 0 to the length of the array of cards -1 or whatever number arrLength is currently equal to -1**
  // let index = Math.floor(Math.random() * arrLength);

        //** here we reduce the number of arrLength by 1 so that the last card in the card array does not get changed everytime the loop runs or the card that corresponds to the arrLength in the cards array**
  // arrLength --;

        // **create a temp variable that store the last element in the array ot the index which corresponds to the cardds [arrLength];**
  // let tempCard = this.cards[arrLength];

        // **fill the last element in the array of cards with the random card**
  // this.cards[arrLength]=this.cards[index]

        // **fill the empty space where the random element was with the temp card;**
  // this.cards[index] = tempCard;

      // ** this is the same thing that is happening on line 37 - 43 above
  // ** OR: [[this.cards[arrLength], this.cards[index]]] = [[this.cards[index], this.cards[arr.Length]]]

  // }
  //   return this.cards;
  // }
  
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      return true
    } else {
      return false
    }  
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2){
    return true;
    }
    return false;
    }

    checkIfLost(){
      if (this.pairsClicked === this.cards.length){
        return true;
      }
      return false;
    }
  }

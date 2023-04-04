cardsData.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    const cardFrontElement = document.createElement('div');
    cardFrontElement.classList.add('card-front');
    cardFrontElement.textContent = card.front;
  
    const cardBackElement = document.createElement('div');
    cardBackElement.classList.add('card-back');
    cardBackElement.textContent = card.back;
  
    cardElement.appendChild(cardFrontElement);
    cardElement.appendChild(cardBackElement);
  
    cardsContainer.appendChild(cardElement);
  });
  // Denna fil skall innehålla JavaScript (JS)
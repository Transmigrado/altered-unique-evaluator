export const getCard = (cardId: string) => {
    return fetch(`https://api.altered.gg/cards/${cardId}`)
        .then(response => response.json())
}
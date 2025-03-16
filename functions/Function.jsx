const addFavorite = (coin) => {
    let favorites = JSON.parse(localStorage.getItem("favorite")) || [];

    if (favorites.some((fav) => fav.id === coin.id)) {
        alert(`${coin.name} ya está en favoritos.`);
    } else {
        favorites.push(coin);
        
        localStorage.setItem("favorite", JSON.stringify(favorites));
        alert(`${coin.name} agregado a favoritos!`);
        console.log("LocalStorage", localStorage);
        
    }
};

export default addFavorite;
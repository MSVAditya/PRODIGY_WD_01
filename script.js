// script.js

const fruitPrices = {
    redApple: "$3.00 per kg",
    greenApple: "$3.50 per kg",
    banana: "$1.20 per kg",
    orange: "$2.50 per kg",
    watermelon: "$4.00 per kg",
    pineapple: "$3.80 per kg",
    mango: "$5.00 per kg",
    pomegranate: "$6.00 per kg",
    grapes: "$2.80 per kg",
    kiwi: "$8.00 per kg",
    papaya: "$2.00 per kg"
};

function showPrice(fruitId) {
    const productTitle = document.getElementById('productTitle');
    const productDescription = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');
    const shopNowButton = document.getElementById('shopNowButton');

    switch (fruitId) {
        case 'redApple':
            productTitle.textContent = 'Red Apple';
            productDescription.textContent = 'Red apples are sweet, juicy, and full of flavor.';
            productPrice.textContent = fruitPrices.redApple;
            break;
        case 'banana':
            productTitle.textContent = 'Banana';
            productDescription.textContent = 'Bananas are rich in potassium and great for snacking.';
            productPrice.textContent = fruitPrices.banana;
            break;
        case 'orange':
            productTitle.textContent = 'Orange';
            productDescription.textContent = 'Oranges are a great source of Vitamin C and very refreshing.';
            productPrice.textContent = fruitPrices.orange;
            break;
        case 'watermelon':
            productTitle.textContent = 'Watermelon';
            productDescription.textContent = 'Watermelons are perfect for hot summer days.';
            productPrice.textContent = fruitPrices.watermelon;
            break;
        case 'pineapple':
            productTitle.textContent = 'Pineapple';
            productDescription.textContent = 'Pineapples are tropical and very tasty.';
            productPrice.textContent = fruitPrices.pineapple;
            break;
        case 'mango':
            productTitle.textContent = 'Mango';
            productDescription.textContent = 'Mangoes are sweet and juicy, perfect for desserts.';
            productPrice.textContent = fruitPrices.mango;
            break;
        case 'pomegranate':
            productTitle.textContent = 'Pomegranate';
            productDescription.textContent = 'Pomegranates are packed with antioxidants.';
            productPrice.textContent = fruitPrices.pomegranate;
            break;
        case 'grapes':
            productTitle.textContent = 'Grapes';
            productDescription.textContent = 'Grapes are perfect for snacking and making wine.';
            productPrice.textContent = fruitPrices.grapes;
            break;
        case 'kiwi':
            productTitle.textContent = 'Kiwi';
            productDescription.textContent = 'Kiwis are small but packed with flavor and nutrients.';
            productPrice.textContent = fruitPrices.kiwi;
            break;
        case 'papaya':
            productTitle.textContent = 'Papaya';
            productDescription.textContent = 'Papayas are rich in vitamins and enzymes for good digestion.';
            productPrice.textContent = fruitPrices.papaya;
            break;
        default:
            productTitle.textContent = 'Welcome to MSV\'s Fruit Store';
            productDescription.textContent = 'Go to Fruits section to see available Fruits';
            productPrice.textContent = '';
            shopNowButton.style.display = 'none';
            return;
    }

    shopNowButton.style.display = 'inline-block';
}

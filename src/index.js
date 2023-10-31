window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('.add-to-cart-btn').forEach(item => 
{
    item.addEventListener("click" , () => 
    {
        alert("The product has been added to the shopping cart")
    })
})



document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + '$';

        let totalPriceForAllProduct = 0;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const quantity = product.querySelector('[data-product-quantity]').value
            const totalPriceForProduct = pricePerUnite * quantity 

            totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
        })
        document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + '$'
    })
})



document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove();

        let totalPriceForAllProduct = 0;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const quantity = product.querySelector('[data-product-quantity]').value
            const totalPriceForProduct = pricePerUnite * quantity 

            totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
        })
        document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + '$'
    })
})

// ......credit card

document.querySelectorAll('#form-checkout input[name = "payment-method"]').forEach(item =>{
    item.addEventListener('change',() => {
        const paymentMethod = item.value;

        const creditCardInputs = document.querySelectorAll('#credit-card-info input');
        if(paymentMethod === 'on-delivery') {
            creditCardInputs.forEach(input => {
                input.style.display='none'
            })
        }else {
            creditCardInputs.forEach(input => {
                input.style.display='block'
            })
        }
    })
})


document.getElementById("copyright").innerHTML ="All Rights Reserved " + new Date().getFullYear();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


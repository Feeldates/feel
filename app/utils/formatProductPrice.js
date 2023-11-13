import {formatCurrencyString} from "use-shopping-cart";

export default function formatProductPrice(product, currency = "MXN", total = 0){
    return formatCurrencyString({
        value: product?.price.unit_amount ?? total,
        currency: product?.price.currency ?? currency,
        language: navigator.language
    })
}
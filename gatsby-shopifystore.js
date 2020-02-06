module.exports = {
    product: {
        text     : { button: 'Comprar' },
        iframe   : false,
        contents : {
            img   : false,
            title : false,
            price : false,
            options: false
        },
        templates : {
            button : '<button class="button primary icon solid fa-cart-plus {{data.classes.product.button}}">{{data.buttonText}}</button>'
        },
        buttonDestination: 'cart',
        quantiyLabel: 'Quantidade'
    },
    toggle: {
        contents: {
            count: true,
            icon: true,
            title: false,
        },
        styles: {
            button: {
                'background-color': '#78b657',
            }
        }
    },
    cart: {
        startOpen: false,
        contents: {
            title: true,
            lineItems: true,
            footer: true,
            note: true,
        },
        text: {
            title: 'Carrinho',
            empty: 'Seu carrinho está vazio.',
            button: 'Finaizar Compra',
            total: 'Total',
            currency: 'BRL',
            notice: 'O frete sera calculado no na finalização da compra.',
            noteDescription: 'Adicione alguma instrução adicional se necessário',
        },
        styles: {
            button: {
                'background-color': '#78b657',
            }
        },
	popup: false
} }

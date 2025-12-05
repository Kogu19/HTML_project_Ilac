const { createApp } = Vue;

createApp({
    data() {
        return {
            products: productsData,
            currentIndex: 0,
            selectedColor: '',
            selectedSize: 'M',
            sizes: ['S', 'M', 'L', 'XL'],
            cart: [],
            showCart: false
        }
    },
    computed: {
        currentProduct() {
            return this.products[this.currentIndex];
        },
        currentImage() {
            const selectedColorObj = this.currentProduct.colors.find(c => c.name === this.selectedColor);
            return selectedColorObj ? selectedColorObj.image : this.currentProduct.colors[0].image;
        },
        cartCount() {
            return this.cart.reduce((total, item) => total + item.quantity, 0);
        },
        cartTotal() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
        }
    },
    methods: {
        nextProduct() {
            this.currentIndex = (this.currentIndex + 1) % this.products.length;
            this.resetSelection();
        },
        previousProduct() {
            this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
            this.resetSelection();
        },
        resetSelection() {
            this.selectedColor = this.currentProduct.colors[0].name;
            this.selectedSize = 'M';
        },
        addToCart() {
            const selectedColorObj = this.currentProduct.colors.find(c => c.name === this.selectedColor);
            
            const existingItem = this.cart.find(item => 
                item.title === this.currentProduct.title && 
                item.size === this.selectedSize && 
                item.color === this.selectedColor
            );
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({
                    title: this.currentProduct.title,
                    price: this.currentProduct.price,
                    size: this.selectedSize,
                    color: this.selectedColor,
                    colorHex: selectedColorObj.hex,
                    quantity: 1
                });
            }
        },
        toggleCart() {
            this.showCart = !this.showCart;
        },
        closeCart() {
            this.showCart = false;
        },
        increaseQuantity(index) {
            this.cart[index].quantity++;
        },
        decreaseQuantity(index) {
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity--;
            } else {
                this.removeItem(index);
            }
        },
        removeItem(index) {
            this.cart.splice(index, 1);
        },
        clearCart() {
            this.cart = [];
        },
        checkout() {
            alert('Paiement en cours...');
        }
    },
    mounted() {
        this.selectedColor = this.currentProduct.colors[0].name;
    }
}).mount('#app');
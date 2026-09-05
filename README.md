# Out-Of-Bounds E-Commerce Store

A modern, responsive e-commerce website built with HTML, CSS, and vanilla JavaScript. Perfect for selling products online with a sleek, user-friendly interface.

## 🚀 Features

- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Product Grid** - Display products with images, descriptions, and prices
- **Shopping Cart** - Add/remove products, adjust quantities
- **Local Storage** - Cart persists between sessions
- **Contact Form** - Get in touch with customers
- **Navigation** - Smooth scrolling and sticky navigation bar
- **Notifications** - User feedback for actions
- **About Section** - Information about your store
- **Footer** - Social media links and additional navigation

## 📁 Project Structure

```
Out-Of-Bounds/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── app.js          # JavaScript functionality
└── README.md           # This file
```

## 🎨 Color Scheme

- **Primary:** Purple (#6c5ce7)
- **Secondary:** Green (#00b894)
- **Accent:** Red (#ff7675)
- **Dark Background:** #2d3436
- **Light Background:** #f5f6fa

## 📦 Products

The store includes 8 sample products:
1. Premium Headphones - $129.99
2. Wireless Mouse - $49.99
3. Gaming Keyboard - $99.99
4. USB-C Cable - $19.99
5. Phone Stand - $24.99
6. Webcam HD - $79.99
7. Screen Protector - $14.99
8. Portable Charger - $44.99

## 🔧 How to Use

1. **Clone or Download** the repository
2. **Open `index.html`** in your web browser
3. **Browse products** and add items to your cart
4. **View cart** by clicking the shopping cart icon
5. **Checkout** or continue shopping

## 💻 Customization

### Add New Products
Edit the `products` array in `js/app.js`:

```javascript
{
    id: 9,
    name: 'Your Product Name',
    price: 99.99,
    emoji: '🎁',
    description: 'Product description',
    rating: '⭐⭐⭐⭐⭐'
}
```

### Change Colors
Update the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #00b894;
    --accent-color: #ff7675;
}
```

### Modify Content
- **Navbar Brand:** Edit the `<h1>` in the navbar section
- **Hero Section:** Modify heading and description text
- **About Section:** Update company information and features
- **Footer:** Add your actual contact info and social media links

## 🚀 Deployment

### Deploy to GitHub Pages
1. Go to repository Settings
2. Under "Pages", select "main" branch
3. Your site will be available at: `https://colesondavenport-bit.github.io/Out-Of-Bounds`

### Deploy to Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Traditional Hosting**: Upload files via FTP

## 📱 Features in Detail

### Shopping Cart
- Add products with one click
- Adjust quantities
- Remove unwanted items
- Persistent storage using localStorage
- Real-time total calculation

### Responsive Design
- Mobile-first approach
- Hamburger menu on smaller screens
- Optimized layouts for all screen sizes
- Touch-friendly buttons and interfaces

### User Experience
- Smooth scrolling navigation
- Hover effects on products
- Toast notifications for actions
- Modal-based shopping cart
- Form validation

## 🔐 Security Notes

This is a frontend-only store. For production:
- Integrate with a payment gateway (Stripe, PayPal)
- Add backend authentication
- Implement secure checkout
- Use HTTPS
- Add proper form validation

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📞 Support

For issues or questions, please create a GitHub issue.

---

**Happy Selling! 🛍️**

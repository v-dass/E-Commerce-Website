function Footer() {
  return (
    <footer className="professional-footer">

      <div className="footer-container">

        {/* Company Information */}
        <div className="footer-section footer-about">

          <h2>🛍️ E-Commerce Website</h2>

          <p>
            Your one-stop destination for electronics,
            fashion, accessories, bags and more.
            Shop easily and enjoy a simple online
            shopping experience.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Shopping Cart</a>
          <a href="/checkout">Checkout</a>

        </div>


        {/* Customer Service */}
        <div className="footer-section">

          <h3>Customer Service</h3>

          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Help & Support</a>

        </div>


        {/* Contact Information */}
        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>📞 +91 98765 43210</p>

          <p>📧 support@ecommerce.com</p>

          <p>📍 Coimbatore, Tamil Nadu, India</p>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 E-Commerce Website.
          All Rights Reserved.
        </p>

        <p>
          Designed for E-Commerce Web Application
        </p>

      </div>

    </footer>
  );
}

export default Footer;
import { useMemo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiArrowRight, FiCheck, FiMenu, FiShoppingCart, FiStar, FiTrash2, FiX } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { products, pricingPlans, steps } from './data/products';

const tagStyles = {
  popular: 'bg-violet-100 text-violet-700',
  new: 'bg-emerald-100 text-emerald-700',
  'best-seller': 'bg-amber-100 text-amber-700',
};

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cartItems, setCartItems] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems],
  );

  const addToCart = (product) => {
    const exists = cartItems.some((item) => item.id === product.id);

    if (exists) {
      toast.info(`${product.name} is already in your cart.`);
      setActiveTab('cart');
      return;
    }

    setCartItems((current) => [...current, product]);
    toast.success(`${product.name} added to cart.`);
  };

  const removeFromCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    setCartItems((current) => current.filter((item) => item.id !== productId));

    if (product) {
      toast.warn(`${product.name} removed from cart.`);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info('Your cart is empty. Add a product first.');
      return;
    }

    setCartItems([]);
    toast.success('Checkout complete. Your cart has been cleared.');
  };

  return (
    <div className="min-h-screen bg-soft text-ink">
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar={false} newestOnTop />

      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <a href="#top" className="text-2xl font-extrabold tracking-tight text-brand">
            DigiTools
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#products" className="transition hover:text-brand">Products</a>
            <a href="#features" className="transition hover:text-brand">Features</a>
            <a href="#pricing" className="transition hover:text-brand">Pricing</a>
            <a href="#testimonials" className="transition hover:text-brand">Testimonials</a>
            <a href="#footer" className="transition hover:text-brand">FAQ</a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button className="text-sm font-semibold text-slate-600 transition hover:text-brand">Login</button>
            <button className="primary-button px-5 py-2.5 text-sm">Get Started</button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('cart');
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand hover:text-brand"
              aria-label="Open cart"
            >
              <FiShoppingCart className="text-lg" />
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-xs font-bold text-white">
                {cartItems.length}
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          >
            {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="container-shell border-t border-slate-200 pb-4 lg:hidden">
            <div className="flex flex-col gap-3 pt-4 text-sm font-medium text-slate-600">
              <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('cart');
                  setMobileMenuOpen(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left"
              >
                <span className="flex items-center gap-2"><FiShoppingCart /> Cart</span>
                <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-bold text-white">{cartItems.length}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="container-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="mb-6 inline-flex rounded-full bg-violet-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              New AI-powered tools available
            </span>
            <h1 className="section-title max-w-2xl">
              Supercharge your digital workflow with premium ready-to-use tools.
            </h1>
            <p className="section-copy mt-6 max-w-xl">
              Access premium AI tools, design assets, templates, and productivity software in one place.
              Build faster, create better, and launch with more confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="primary-button">
                Explore Products
              </a>
              <button className="secondary-button gap-2">
                <img src="/assets/play.png" alt="Play icon" className="h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="glass-card overflow-hidden bg-heroGlow p-4 shadow-glow">
            <img
              src="/assets/banner.png"
              alt="Digital workflow illustration"
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </section>

        <section className="bg-brandGradient py-10 text-white">
          <div className="container-shell grid gap-8 text-center sm:grid-cols-3 sm:text-left">
            {[
              ['50K+', 'Active Users'],
              ['200+', 'Premium Tools'],
              ['4.9', 'Average Rating'],
            ].map(([value, label]) => (
              <div key={label} className="sm:border-r sm:border-white/20 sm:pr-8 last:border-r-0">
                <h2 className="text-4xl font-extrabold md:text-5xl">{value}</h2>
                <p className="mt-2 text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="container-shell py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-4xl md:text-6xl">Premium Digital Tools</h2>
            <p className="section-copy mt-4">
              Choose from a curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab('products')}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeTab === 'products' ? 'bg-brandGradient text-white shadow-md' : 'text-slate-600'
                }`}
              >
                Products
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cart')}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeTab === 'cart' ? 'bg-brandGradient text-white shadow-md' : 'text-slate-600'
                }`}
              >
                Cart ({cartItems.length})
              </button>
            </div>
          </div>

          {activeTab === 'products' ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => {
                const inCart = cartItems.some((item) => item.id === product.id);
                return (
                  <article
                    key={product.id}
                    className="glass-card flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                        <img src={product.icon} alt={product.name} className="h-9 w-9 object-contain" />
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[product.tagType]}`}>
                        {product.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-ink">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{product.description}</p>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-3xl font-extrabold text-ink">${product.price}</span>
                      <span className="pb-1 text-sm capitalize text-slate-500">/{product.period}</span>
                    </div>

                    <ul className="mt-6 space-y-3 text-sm text-slate-600">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <FiCheck className="mt-0.5 shrink-0 text-emerald-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className={`mt-8 rounded-full px-5 py-3 text-sm font-semibold transition ${
                        inCart
                          ? 'border border-emerald-300 bg-emerald-50 text-emerald-700'
                          : 'bg-brandGradient text-white shadow-glow hover:-translate-y-0.5'
                      }`}
                    >
                      {inCart ? 'Added to Cart' : 'Buy Now'}
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto mt-12 max-w-5xl glass-card p-6 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-ink">Your Cart</h3>
                  <p className="mt-2 text-slate-500">Review your selected digital tools before checkout.</p>
                </div>
                <div className="rounded-2xl bg-slate-100 px-5 py-4 text-right">
                  <p className="text-sm text-slate-500">Total</p>
                  <p className="text-3xl font-extrabold text-ink">${totalPrice}</p>
                </div>
              </div>

              {cartItems.length === 0 ? (
                <div className="mt-10 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
                  <FiShoppingCart className="mx-auto text-4xl text-slate-400" />
                  <h4 className="mt-4 text-2xl font-bold text-ink">Your cart is empty</h4>
                  <p className="mt-2 text-slate-500">Go back to the product tab and add a few premium tools.</p>
                </div>
              ) : (
                <div className="mt-10 space-y-5">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 rounded-[24px] bg-slate-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <img src={item.icon} alt={item.name} className="h-9 w-9 object-contain" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-ink">{item.name}</h4>
                          <p className="mt-1 text-slate-500">${item.price}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-50 sm:self-center"
                      >
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brandGradient px-6 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </section>

        <section id="features" className="bg-white py-16 md:py-24">
          <div className="container-shell text-center">
            <h2 className="section-title">Get Started in 3 Steps</h2>
            <p className="section-copy mt-4">Start using premium digital tools in minutes, not hours.</p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step) => (
                <article key={step.id} className="glass-card relative p-8 text-center">
                  <span className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {step.id}
                  </span>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
                    <img src={step.icon} alt={step.title} className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-deep py-16 md:py-24 text-white">
          <div className="container-shell text-center">
            <h2 className="section-title text-white">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-base text-slate-300 md:text-lg">Choose a plan that matches your creative workflow and team size.</p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.id}
                  className={`rounded-[28px] p-8 text-left shadow-xl transition ${
                    plan.featured
                      ? 'bg-brandGradient text-white shadow-glow'
                      : 'bg-white text-ink'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className={`mt-2 text-sm ${plan.featured ? 'text-white/80' : 'text-slate-500'}`}>{plan.copy}</p>
                    </div>
                    {plan.featured && (
                      <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-amber-900">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-8 flex items-end gap-1">
                    <span className="text-5xl font-extrabold">${plan.price}</span>
                    <span className={`${plan.featured ? 'text-white/80' : 'text-slate-500'}`}>/month</span>
                  </div>
                  <ul className="mt-8 space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <FiCheck className={`mt-0.5 shrink-0 ${plan.featured ? 'text-white' : 'text-emerald-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? 'bg-white text-brand hover:bg-slate-100'
                        : 'bg-brandGradient text-white hover:-translate-y-0.5'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-brandGradient py-20 text-white">
          <div className="container-shell text-center">
            <FiStar className="mx-auto text-3xl" />
            <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">Ready to transform your workflow?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Join thousands of creators, freelancers, and teams who use DigiTools to work smarter,
              launch faster, and stay organized.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#products" className="pill-button bg-white text-brand hover:bg-slate-100">Explore Products</a>
              <a href="#pricing" className="pill-button border border-white/40 text-white hover:bg-white/10">View Pricing</a>
            </div>
            <p className="mt-6 text-sm text-white/70">14-day free trial · No credit card required · Cancel anytime</p>
          </div>
        </section>
      </main>

      <footer id="footer" className="bg-[#081126] py-16 text-white">
        <div className="container-shell">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
            <div>
              <h3 className="text-3xl font-extrabold">DigiTools</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                Premium digital tools for creators, freelancers, and businesses. Work smarter with curated assets and proven resources.
              </p>
            </div>
            <FooterColumn title="Product" items={['Features', 'Pricing', 'Templates', 'Integrations']} />
            <FooterColumn title="Company" items={['About', 'Blog', 'Careers', 'Press']} />
            <FooterColumn title="Resources" items={['Documentation', 'Help Center', 'Community', 'Contact']} />
            <SocialLinks />
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 DigiTools. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-lg font-bold">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="transition hover:text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
function SocialLinks() {
  const socialItems = [
    {
      name: 'Instagram',
      href: '#',
      icon: <FaInstagram className="text-xl" />,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: <FaFacebookF className="text-xl" />,
    },
    {
      name: 'X',
      href: '#',
      icon: <FaXTwitter className="text-xl" />,
    },
  ];

  return (
    <div>
      <h4 className="text-lg font-bold">Social Links</h4>

      <div className="mt-5 flex items-center gap-4">
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#081126] transition duration-300 hover:scale-105 hover:bg-slate-200"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;

import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <section className="hero">
      <div className="wrap container">
        <div className="bottom">
          <div>
            <h1>Joshua Sanger</h1>
            <h2>Senior Front End Developer at Shopify</h2>
            <Link to="/projects" className="button white">View my work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

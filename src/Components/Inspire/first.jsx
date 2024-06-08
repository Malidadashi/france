import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Button = ({ label, to }) => {
  return (
    <Link to={to} className="button">
      {label}
    </Link>
  );
};

const Nature = () => (
  <div>
    <h3>Nature</h3>
    <ul>
      <li>Mountains</li>
      <li>Beaches</li>
      <li>Forests</li>
    </ul>
  </div>
);

const Culture = () => (
  <div>
    <h3>Culture</h3>
    <ul>
      <li>Museums</li>
      <li>Historical Sites</li>
      <li>Cultural Festivals</li>
    </ul>
  </div>
);

const Food = () => (
  <div>
    <h3>Food</h3>
    <ul>
      <li>Local Cuisine</li>
      <li>Wine Tasting</li>
      <li>Cooking Classes</li>
    </ul>
  </div>
);

const GetInspired = () => (
  <div className="get-inspired">
    <h2>Get Inspired</h2>
    <div className="button-container">
      <Button label="Nature" to="/nature" />
      <Button label="Culture" to="/culture" />
      <Button label="Food" to="/food" />
    </div>
    <div className="item-container">
      <Route path="/nature" component={Nature} />
      <Route path="/culture" component={Culture} />
      <Route path="/food" component={Food} />
    </div>
  </div>
);


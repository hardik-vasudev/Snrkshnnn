import React from 'react';
import './FeatureItem.css'; // Custom styles for FeatureItem

function FeatureItem({ title, description }) {
  return (
    <div className="feature-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureItem;

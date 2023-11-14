import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleTogglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  return (
    <div className="privacy-policy">
      <button onClick={handleTogglePrivacyPolicy}>Privacy Policy</button>
      {showPrivacyPolicy && (
        <div className="privacy-policy-panel">
          <h3>Privacy Policy</h3>
          <p>
            This Privacy Policy outlines how we collect, use, and store your personal information
            when you use our React Twitter clone application. By using the app, you agree to the terms
            outlined in this policy.
          </p>
          <h4>Information We Collect</h4>
          <p>
            We collect information you provide when using the app, such as your username. Additionally,
            we automatically collect log data, including IP addresses and device information.
          </p>
          <h4>How We Use Your Information</h4>
          <p>
            We use your information to provide and improve the app's functionality and to communicate
            with you about app-related updates.
          </p>
          <h4>Sharing of Your Information</h4>
          <p>
            We do not sell, trade, or share your personally identifiable information with third parties.
          </p>
          <h4>Your Choices</h4>
          <p>
            You can edit your profile information and privacy settings within the app.
          </p>
          <h4>Security</h4>
          <p>
            We take reasonable measures to protect your information from unauthorized access.
          </p>
          <h4>Changes to This Privacy Policy</h4>
          <p>
            We may update this Privacy Policy. Check this page for the latest version and review
            any changes.
          </p>
          <h4>Contact Us</h4>
          <p>
            If you have any questions about this Privacy Policy, please contact us at [your email address].
          </p>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;

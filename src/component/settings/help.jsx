import React, { useState } from "react";

import '../../styles/settings/help.css'


function HelpSupport({ user, onSubmitSupport }) {
  const [email, setEmail] = useState(user?.email || "");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("category", category);
      formData.append("order_id", orderId);
      formData.append("message", message);
      if (attachment) formData.append("attachment", attachment);

      if (onSubmitSupport) {
        await onSubmitSupport(formData);
      }

      setSuccessMessage("Support request sent successfully!");
      setError("");
      setSubject("");
      setCategory("");
      setOrderId("");
      setMessage("");
      setAttachment(null);
    } catch (err) {
      setError("Failed to send support request. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="help-support">
      <h2>Help & Support</h2>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Contact Support Form */}
      <section className="contact-support">
        <h3>Contact support</h3>
        <form id="supportForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Your email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Short summary (e.g., Can't log in)"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="account">Account & login</option>
              <option value="orders">Orders</option>
              <option value="payments">Payments & refunds</option>
              <option value="technical">Technical issue</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Order ID (optional)</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., ORD-12345"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Describe the issue in detail..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Attachment (optional)</label>
            <input
              type="file"
              className="form-control"
              accept=".png,.jpg,.jpeg,.pdf"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
            <small className="text-muted">
              Screenshots or PDFs up to 5 MB.
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fa-regular fa-paper-plane me-1"></i> Send
          </button>

          <div className="mt-2">
            <small className="text-muted">
              Prefer email? Write to{" "}
              <a href="mailto:support@example.com">support@example.com</a>
            </small>
          </div>
        </form>
      </section>

      <hr className="my-4" />

      {/* FAQs */}
      <section className="faqs">
        <h3>FAQs</h3>

        <details className="mb-2">
          <summary>
            <strong>How do I reset my password?</strong>
          </summary>
          <div className="mt-2">
            Go to <em>Settings → Security & Login</em>, enter a new password and
            confirm it, then submit.
          </div>
        </details>

        <details className="mb-2">
          <summary>
            <strong>I didn’t receive the verification email.</strong>
          </summary>
          <div className="mt-2">
            Check spam/junk, then add our address to your contacts and request
            another email from your profile page.
          </div>
        </details>

        <details className="mb-2">
          <summary>
            <strong>How can I update my address?</strong>
          </summary>
          <div className="mt-2">
            Go to <em>Settings → Address & Delivery</em>, edit your address and
            click <em>Save</em>.
          </div>
        </details>

        <details className="mb-2">
          <summary>
            <strong>How do I delete my account?</strong>
          </summary>
          <div className="mt-2">
            Go to <em>Settings → Danger Zone</em> and choose{" "}
            <em>Permanently Delete Account</em>. This action is irreversible.
          </div>
        </details>

        <details className="mb-2">
          <summary>
            <strong>Where can I see my orders?</strong>
          </summary>
          <div className="mt-2">
            Go to <em>Settings → Orders & Subscriptions</em> to view your order
            history and track active orders.
          </div>
        </details>
      </section>
    </div>
  );
}

export default HelpSupport;
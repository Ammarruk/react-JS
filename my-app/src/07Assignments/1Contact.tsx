import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{ text: string; type: "success" | "warning" | "" }>({ text: "", type: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: "⚠️ Please fill in all fields before sending the message.", type: "warning" });
      return;
    }

    // Optional: Here you could actually send the data to an API

    // Simulate successful submission
    setStatus({ text: "✅ Your message has been sent successfully!", type: "success" });

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container my-5">
      <div className="bg-light p-5 rounded shadow text-center">
        <h1 className="text-primary fw-bold display-6 mb-3">Contact Us</h1>
        <p className="text-secondary fs-5 mb-4">
          We'd love to hear from you! Reach out to us with your questions, feedback, or collaboration ideas.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6 text-start">
            {status.text && (
              <div className={`alert ${status.type === "success" ? "alert-success" : "alert-warning"} fw-bold`}>
                {status.text}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  placeholder="Write your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

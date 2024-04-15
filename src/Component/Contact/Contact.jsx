import React from 'react';
import './Contact.css';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bed41d3a-1ec6-48b4-9023-76005d1f38e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="contact">

        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <input type="text" placeholder='enter your name' />
            <input type="email" placeholder='enter your email' />
            <textarea name="message" cols="50" rows="10" placeholder="message"></textarea>
            <button>Sent message</button>
          </form>
          <span>{result}</span>
        </div>
        <div className="contact-info">
          <h2>Let's collaborate</h2>
          <div className="dial">
            <p>Feel free to reach out through contact form or find out contact information below.
              Your feedback, questions, and suggestions are important to us we strive to provide exceptional
              service to our community.
            </p>
            <h5>Contact us +1 123-456-789</h5>
            <h5>Contact@Techwa</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

import { useState } from "react";
import logo from "../../assets/logo.png";
import service from "../../assets/Service 24_7-pana 1.svg";
import styles from './ContactUs.module.css';
const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(text);
  }
  return (
    <div className="container">
      <header  className={`container ${styles.header}`}>
          <img src={logo} alt="logo" />
        <nav>
          <ul className={`${styles.navlinks}`}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>
      <main className={styles.content}>
        <h1>Contact Us</h1>
        <p className={styles.contentText}>LET US CONNECT: WE ARE HERE TO HELP, AND WE WOULD LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        <div className={styles.contactForm}>
          <div className={`${styles.contactFormDetails} ${styles.sectionHalf}`}>
            <div>
              <button>VIA SUPPORT CHAT</button>
              <button>VIA CALL</button>
            </div>
            <div>
              <button className={styles.fullButton}>VIA EMAIL FORM</button>
            </div>
            <form className={styles.form}>
              <fieldset>
                <legend>Name</legend>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
              </fieldset>
              <fieldset>
                <legend>E-mail</legend>
                <input type="email" name="usermail" onChange={(e) => setEmail(e.target.value)}/>
              </fieldset>
              <fieldset>
                <legend>Text</legend>
                <input type="text" name="text" onChange={(e) => setText(e.target.value)}/>
              </fieldset>
              <div className={styles.submitBtn}>
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
          <div className={styles.sectionHalf}>
            <img src={service} alt="services" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactUs
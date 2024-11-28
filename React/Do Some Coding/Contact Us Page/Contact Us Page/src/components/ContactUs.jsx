import logo from "../assets/Header.png";
import service from "../assets/Service 24_7-pana 1.svg";
const ContactUs = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Contact Us</h1>
        <p>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        <div>
          <div>
            <button>VIA SUPPORT CHAT</button>
            <button>VIA CALL</button>
            <button>VIA EMAIL FORM</button>
            <form>
              <fieldset>
                <legend>Name</legend>
                <input type="text" name="username" />
              </fieldset>
              <fieldset>
                <legend>E-mail</legend>
                <input type="email" name="usermail" />
              </fieldset>
              <fieldset>
                <legend>Text</legend>
                <input type="text" name="username" />
              </fieldset>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div>
            <img src={service} alt="services" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactUs
import React, { useState } from 'react';
import '../AuthPage.css'; // Assuming your CSS is saved in AuthPage.css
import fetchUsers from '../components/fetchUsers'; // Import fetchUsers function
import addUser from '../components/addUser';
import constructUser from '../components/constructUser';
function AuthPage(props) {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Access form values from state
    const newUser = { firstName, lastName, email, password };

    // Check if user with this email already exists
    const duplicate = fetchUsers().find(user => user.email === email);
    if (duplicate) {
      console.warn("User with this email already exists.");
      return;
    }

    // Add new user
    addUser(newUser);
    alert("you've successfully signed up!");
    // Optionally, you can perform additional actions after signup, such as redirecting to another page
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch existing users
    const users = fetchUsers();

    // Check if the provided email and password match any existing user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // Call onLogin when user logs in successfully
      setIsLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
      alert("you've successfully logged in");
      setTimeout(() => {
        window.location.href = '/'; // Replace '/landing' with your actual landing page URL
      }, 1000);
    } else {
      // Handle login failure, such as displaying an error message
      alert('Invalid email or password');
    }
  };

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title color">Don't have an account?</h2>
            <p className="user_unregistered-text">Create now!</p>
            <button className="user_unregistered-signup" onClick={() => setIsLoginActive(false)}>Sign up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Already have an account!</h2>
            <p className="user_registered-text">Get started..</p>
            <button className="user_registered-login" onClick={() => setIsLoginActive(true)}>Login</button>
          </div>
        </div>
        
        <div className={`user_options-forms ${isLoginActive ? "bounceRight" : "bounceLeft"}`}>
          {isLoginActive ? (
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form" onSubmit={handleLogin}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Log In" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
          ) : (
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form" onSubmit={handleSignUp}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="First Name" className="forms_field-input" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className="forms_field">
                    <input type="text" placeholder="Last Name" className="forms_field-input" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AuthPage;


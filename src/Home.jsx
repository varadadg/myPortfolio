import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import myImage from "./assets/Varada.jpg"; // Import the image
import Varada_Resume from "./Varada_Resume.pdf";

const Home = () => {
  const animationStyleFromLeft = {
    position: "relative",
    animationName: "fromLeft",
    animationDuration: "4s",
  };

  const animationStyleFromRight = {
    position: "relative",
    animationName: "fromRight",
    animationDuration: "4s",
  };

  const keyframes = `
    @keyframes fromLeft {
      100%   { left: 0px; }
      0% { left: calc(100% - 500px); } /* Adjust the width of the text container */
    }

    @keyframes fromRight {
      100%   { right: 0px; }
      0% { right: calc(100% - 500px); } /* Adjust the width of the text container */
    }
  `;

  return (
    <div className="flex justify-center w-full">
      <style>{keyframes}</style>
      <div className="xl:-mt-14 xs:grid  grid-cols-1 gap-2 sm:grid grid-cols-1 gap-2  justify-center md:grid grid-cols-1 gap-2  justify-center   lg:flex ">
        <div className="xs:w-64 xs:h-64 xs:mt-8   xs:place-self-center sm:w-72 sm:h-72 flex items-center justify-center">
          <p
            className="text-center text-black lg:text-md "
            style={animationStyleFromLeft}>
            I am a frontend developer living in Karnataka, India. I enjoy
            building everything from scratch using React. With every line of
            code, I strive to make the web aesthetically pleasing. Currently, I
            am working as a technology analyst in Infosys, building fully
            functional UI screens.{" "}
            <Link
              to={Varada_Resume}
              download="Varada-Resume"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline">
              Download Resume
            </Link>
          </p>
        </div>

        <div className="lg:w-96 2xl:mt-[28rem] xl:mt-[25rem]  lg:mt-[32rem] md:mt-6 xs:w-96 xs:h-64 xs:-mt-[1.9rem] bg-contain bg-center xs:place-self-center sm:w-72 sm:h-72  overflow-hidden">
          <img
            src={myImage}
            alt="Your image description"
            className="w-full h-full object-cover"
          />
          <a
            href="https://www.instagram.com/elixirofthoughts/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center text-blue-500 hover:underline"
            style={{ ...animationStyleFromLeft, fontSize: "1.25rem" }}>
            Visit my Instagram
          </a>
        </div>

        <div className="xs:w-64 xs:h-64 xs:mt-8  xs:place-self-center sm:w-72 sm:h-72 md:mt-32 text-md ">
          <p
            className="text-center text-black "
            style={animationStyleFromRight}>
            I write poetry centered on mental health and provide spiritual
            counsel to individuals navigating life's challenges through tarot
            cards. Our Instagram community boasts a following of 40k. Feel free
            to explore!
            <a
              href="https://www.instagram.com/elixirofthoughts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-1">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
// import React, { useState } from "react";

// function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     dropdownValue: "", // Added dropdownValue
//     checkboxChecked: false, // Added checkboxChecked
//     textBoxValue: "", // Added textBoxValue
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const inputValue = type === "checkbox" ? checked : value;

//     setFormData({
//       ...formData,
//       [name]: inputValue,
//     });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     // Validate email
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     }

//     // Validate password
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//       isValid = false;
//     }

//     // Validate dropdown
//     if (!formData.dropdownValue) {
//       newErrors.dropdownValue = "Please select an option";
//       isValid = false;
//     }

//     // Validate checkbox
//     if (!formData.checkboxChecked) {
//       newErrors.checkboxChecked = "Please check the checkbox";
//       isValid = false;
//     }

//     // Validate text box
//     if (!formData.textBoxValue.trim()) {
//       newErrors.textBoxValue = "Please enter a value";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Form is valid, you can submit or process the data here
//       console.log("Form data:", formData);
//       setSubmitted(true); // Set a submitted flag
//     } else {
//       // Form is not valid, display error messages
//     }
//   };

//   const isFormValid = Object.keys(errors).length === 0;

//   return (
//     <div>
//       <h2>Login</h2>
//       {submitted ? (
//         <div className="success-message">Login successful!</div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email:</label>
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             {errors.email && <div className="error">{errors.email}</div>}
//           </div>

//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             {errors.password && <div className="error">{errors.password}</div>}
//           </div>

//           <div>
//             <label>Dropdown:</label>
//             <select
//               name="dropdownValue"
//               value={formData.dropdownValue}
//               onChange={handleInputChange}>
//               <option value="">Select an option</option>
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//             </select>
//             {errors.dropdownValue && (
//               <div className="error">{errors.dropdownValue}</div>
//             )}
//           </div>

//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 name="checkboxChecked"
//                 checked={formData.checkboxChecked}
//                 onChange={handleInputChange}
//               />
//               Checkbox
//             </label>
//             {errors.checkboxChecked && (
//               <div className="error">{errors.checkboxChecked}</div>
//             )}
//           </div>

//           <div>
//             <label>Text Box:</label>
//             <input
//               type="text"
//               name="textBoxValue"
//               value={formData.textBoxValue}
//               onChange={handleInputChange}
//             />
//             {errors.textBoxValue && (
//               <div className="error">{errors.textBoxValue}</div>
//             )}
//           </div>

//           <button type="submit" disabled={!isFormValid}>
//             Login
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default LoginForm;

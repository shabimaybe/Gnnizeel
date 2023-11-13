import React, { useState } from 'react';
import './SignUpForm.css';
import { postApiWithoutAuth } from '../../utils/api';
import { Url } from '../../utils/Url';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {

    const navigate=useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
    company_name: '',
    patients_count: 0,
    company_address: '',
    clinic_longitude: 0,
    clinic_latitude: 0,
    about: '',
    postal_code: '',
    phone_number: ''
  });

  const handleChange = async (e) => {
    e.preventDefault();

    try {
      const response = await postApiWithoutAuth(Url.SIGNUP_URL, formData);

      if (response.success) {
        alert('Signup was successful!');
        console.log(response.data);
        setFormData({
          email: '',
          password: '',
          role: '',
          company_name: '',
          patients_count: 0,
          company_address: '',
          clinic_longitude: 0,
          clinic_latitude: 0,
          about: '',
          postal_code: '',
          phone_number: '',
        });

        navigate("/login")
      } else {
        console.log('Error:', response.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  };

  return (
    <div className="bg-image">
      <div>
        <div className="image-text">
          <img className="img-sign" src="Vectorblue.svg" alt="Image" />
          <p className="text-1">Ginzzel</p>
        </div>
      </div>

      <div>
        <form onSubmit={handleChange}>
          <div className="custom-form2">
            <h1>Sign Up</h1>
            <input
              className="input2"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              className="input2"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <input
              className="input2"
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
            <input
              className="input2"
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            />
            <input
              className="input2"
              type="number"
              name="patients_count"
              placeholder="Patients Count"
              value={formData.patients_count}
              onChange={(e) => setFormData({ ...formData, patients_count: e.target.value })}
            />
            <input
              className="input2"
              type="text"
              name="company_address"
              placeholder="Company Address"
              value={formData.company_address}
              onChange={(e) => setFormData({ ...formData, company_address: e.target.value })}
            />
            <input
              className="input2"
              type="number"
              name="clinic_longitude"
              placeholder="Clinic Longitude"
              value={formData.clinic_longitude}
              onChange={(e) => setFormData({ ...formData, clinic_longitude: e.target.value })}
            />
            <input
              className="input2"
              type="number"
              name="clinic_latitude"
              placeholder="Clinic Latitude"
              value={formData.clinic_latitude}
              onChange={(e) => setFormData({ ...formData, clinic_latitude: e.target.value })}
            />
            <input
              className="input2"
              type="text"
              name="about"
              placeholder="About"
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            />
            <input
              className="input2"
              type="text"
              name="postal_code"
              placeholder="Postal Code"
              value={formData.postal_code}
              onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
            />
            <input
              className="input2"
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
            />
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
            <button className="button2" type="submit">
              Sign Up
            </button>
            <p>
              By signing up, you agree to our <a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;

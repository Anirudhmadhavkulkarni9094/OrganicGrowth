import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/Login.css'
import { Button } from '@mui/material';

function FirstPage() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  // Track if all required fields are filled
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Check if all required fields are filled
    setIsFormValid(
      formData.name.trim() !== '' &&
      formData.phoneNumber.trim() !== '' &&
      formData.email.trim() !== ''
    );
  };

  const handleSubmit = () => {
    localStorage.setItem('userDetails', JSON.stringify(formData));
    localStorage.setItem('isLoggedIn', 'true');
    
    history.push('/Second-page');
  };

  return (
    <div className='first-page'>
      <form>
        <h1>Login to View Data</h1>
        <div className='form-input'>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className='form-input'>
          <label>Phone Number:</label>
          <input type="Number" maxLength={10} name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className='form-input'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <Button
          variant="contained"
          onClick={handleSubmit}
          className='btn'
          disabled={!isFormValid} // Disable the button if the form is not valid
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FirstPage;

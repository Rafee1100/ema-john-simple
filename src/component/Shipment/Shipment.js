import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser]= useContext(UserContext);
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); 
  
    return (
      
      <form className="ship-form"onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="Your name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
        {errors.name && <span className="error">Name is required</span>}

        <input name="email" placeholder="Your email"  defaultValue={loggedInUser.email} ref={register({ required: true })} />
        {errors.email && <span className="error">Email is required</span>}

        <input name="address" placeholder="Your address"  ref={register({ required: true })} />
        {errors.address && <span className="error">Address is required</span>}
        
        <input name="phone" placeholder="Your phone number"  ref={register({ required: true })} />
        {errors.phone && <span className="error">Phone number is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;
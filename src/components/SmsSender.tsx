import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useCountry } from "../context/countryContext";


function SmsSender() {
  const country = useCountry().code;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function resetMessageStatus () {
    setMessageSent(false);
    setPhoneNumber('');
    setIsValid(false);
    return false;
  }

  function handleOnChange(value: string) {
    setPhoneNumber(value);

    if(phoneNumber.length > 8 ) {
      setIsValid(true);
    } else setIsValid(false)
  }

  function sendMessage() {
    const url = 'https://didi.mainserver.com.br/api/twilio/message/'+ '+' + phoneNumber;
    console.log(url);

    fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    })
      .then(res => res.json())
      .then(data => {
        
        console.log(data);
        alert("Sms sent!");
      });
  }

  return (
    <div className="">
      <PhoneInput 
        country={country} 
        enableSearch={true} 
        autoFormat={true} 
        containerStyle={{width:'50px'}} 
        inputStyle={{width: '235px'}} 
        value={phoneNumber} 
        onChange={value => handleOnChange(value)}></PhoneInput>
      <button disabled={!isValid} className='hover:bg-orange-700 hover:cursor-pointer active:bg-orange-900 lg:text-xs xl:text-base border-transparent text-white font-bold rounded-full bg-orange-primary text-lg md:text-base my-4 lg:ml-4 xl:ml-0 py-2 px-6 bg-orange' onClick={sendMessage} type='button'>Descargar en mi celular</button>
    </div>
  );
}

export default SmsSender;
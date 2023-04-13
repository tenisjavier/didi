import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useCountry } from "../context/countryContext";


function SmsSender() {
  const country = useCountry().code;
  const [phoneNumber, setPhoneNumber] = useState('');
  console.log(phoneNumber);

  function sendMessage() {
    const url = 'https://didi.mainserver.com.br/api/twilio/message/'+ '+' + phoneNumber;
    console.log(url);

    // xhttp.open('GET', url);
    // xhttp.setRequestHeader('Content-Type', 'application/json');
    // xhttp.onload = function() {
    //   if (xhttp.status === 200) {
    //     console.log(xhttp.responseText);
    //   } else {
    //     console.log('Error: ' + xhttp.status);
    //   }
    // };
    // xhttp.send();

    fetch(url, {
      method: 'GET',
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
        onChange={value => setPhoneNumber(value)}></PhoneInput>
      <button className='hover:bg-orange-700 active:bg-orange-900 lg:text-xs xl:text-base border-transparent text-white font-bold rounded-full bg-orange-primary text-lg md:text-base my-4 lg:ml-4 xl:ml-0 py-2 px-6 bg-orange' onClick={sendMessage} type='button'>Descargar en mi celular</button>
    </div>
  );
}

export default SmsSender;
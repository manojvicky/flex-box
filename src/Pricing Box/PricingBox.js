import React from "react";
import LinktoHome from "../Link/LinktoHome";
import "./style.css";

const PricingBox = () => {
  return (
    <div>
      <LinktoHome />
      <div className="animalcontainer">
        <div className="animal cat">
          <h1>CAT</h1>
          <p>I am cat because i am a cat</p>
          <p>I do meow meow</p>
          <p>I am naughty cat</p>
          <p>I am cat </p>
          <p>I am pussy pussy cat </p>
          <h2>Free</h2>
          <button className="BuyMe">Buy me</button>
        </div>

        <div className="animal dog">
          <h1>DOG</h1>
          <p>I am Dog because i am a cat</p>
          <p>I do Bhoo Bhoo</p>
          <p>I am naughty dog</p>
          <p>I am dog </p>
          <p>Ypu are also a dog </p>
          <p>Basanti in kutto ke ssamne mat maachna</p>
          <p>me tumhara khoon pee jaaaunga kutto </p>
          <p>me kutta hu kamina nhi</p>
          <p>Who let the dogs out, bhoo bhoo...</p>
          <h2>82$</h2>
          <button className="BuyMe">Buy me</button>
        </div>

        <div className="animal lion">
          <h1>LION</h1>
          <p>I am Lion because i am a Lion</p>
          <p>I do roar</p>
          <p>I am naughty lion</p>
          <p>I am lion </p>
          <span>katy perry made song on me "ROAR"</span>
          <h2>Not for sale</h2>
          <button className="BuyMe" disabled={true}>
            Buy me
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;

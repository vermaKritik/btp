import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [id, setId] = useState("#1b0f545c-eb31-48ba-8ac5-a4573de11b65");
  const [email, setEmail] = useState("john.doe@example.com");
  const [first, setFirst] = useState("John");
  const [last, setLast] = useState("Doe");
  const [organization, setOrganization] = useState("Example");
  const [publicKey, setPublicKey] = useState("aGVsbG9kc2ZzZGZ3ZXdmdzMycmQzZXJyZmV5cmZz");

  return (
    <div className="profile">
      <div className="profile__main">
        <div className="profile__image">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA+RJREFUeF7t3b2NVEEQReFeAxNjIZB1EClgEQISCSBtKEiEsCkQBcLZBMgACR8DtCnsN9Jl0Bm/X/XcOn2r+v3efH3/6s8Z/j48/Kbob+8fabwO/vb5jg7x8OEFjdfBNwFgEgaA6XdygByAEKoEkHynEmD6nUoAClgJqAQQQpUAkq8SYPKdSoAKWAmoBBBDlQCSrxJg8lUCVL9OBHUquGsBvIrgAJ0IAvGehnYiCAVsF9AugBBqF0DynZvbXy+n9wNoAj/9fGMK4Ogvr7/TEbSEUPBzAkAFDABUMAewO4pQ/hxABcwBUMEcIAcghGoCSb5KgMl3TiUAFawEVAIIoUoAyVcJMPkqAarfqQRUAgiiSgDJVwkw+SoBql8lAB8u1QR0NRAV7DwAClgTOG4C9fFwXQHaxGl85Pes56/x+Z5ATYD+AY0fAPiGEE1AANgdRapfDoAWoAlYL6AACAB7SdSaYI2P+a8J1ASsLTQAagKJgTXAGr8egNJ/KgGVAHswZa1fDpADtAsQBrQG5wD4bJ8KKMl/GhsA+HDkWsAAaBtIDKwB1vg1gZT+SgDKd/glUTyB8QH6XgB+MGKcPw4fAAHAEMkBuAeQ4E9j9SVRGn89PgfIAaYM5gBT+c/JAXKAKYI5wFT+HKAmsJdF28uixwuYw9cD1AMwRHKAegBR7wJjc4Ac4AIYPf8QOcDztbvIyBwgB7gISM89SA7wXOUuNO7qHWB9MWct4LX/f3aAaxdAF/K1//8AQAICYNzEVQLso1M5QA5gTwZduwVi/ucXs9QBcwAk4NoXQAAEQCVAGMgB2gUIPzy2HmB8R00OkAPwKpYD5AA5gPBz2gWQfPsnm3KAHIAQzgFIvv/AAW5/vfyDGtBwtTAK/g8MXu8i5p+MCYDtcxEBMHaBHGDcxI3zP7+amAOMCcgBcoApgjnAVP79NjIAAqDzAEsG6gHqAZb87b8e3omgTgRNV8A6eCWgEjBlsF3AVP62gfMXJY7z36ngmsArbwI1gdoEaXx1gPX8NT73AJoA/QMaPwDwjiBNQADY492qXw6AFqAJWC+gAAgAuxi0JljjY/55G6fzVwfKAZAATUAA4LOFKiDmPwfQBKxXUAC0DSQG1gBr/HoASr9fzFk7aAAEQNtAYUAtOAdoFyD88S6kEkDy1wPwDR1rC8X88wqcl4B3H3/Q+wG+fb5TDRsPCry9f4TR59wEAOk3HxwA8xRsJxAAW/3n0QNgnoLtBAJgq/88egDMU7CdQABs9Z9HD4B5CrYTCICt/vPoATBPwXYCAbDVfx49AOYp2E4gALb6z6MHwDwF2wkEwFb/eXQF4C9i39/ehRjnHgAAAABJRU5ErkJggg==" alt="" srcset="" />
        </div>
        <p className="profile__hash">{id}</p>
        <div className="profile__content">
          <div className="profile__contentSec">
            <div className="profile__inputCover">
              <TextField
              disabled
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                defaultValue={first}
              />
            </div>
            <div className="profile__inputCover">
              <TextField
              disabled
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                defaultValue={last}
              />
            </div>
          </div>
          <div className="profile__contentSec">
            <div className="profile__inputCover">
              <TextField
              disabled
                id="outlined-basic"
                label="Organization Name"
                variant="outlined"
                defaultValue={organization}
              />
            </div>
            <div className="profile__inputCover">
              <TextField
              disabled
                id="outlined-basic"
                label="Email"
                variant="outlined"
                defaultValue={email}
              />
            </div>
          </div>
          <div className="profile__contentSec">
            <div className="profile__inputCover">
              <TextField
              disabled
                id="outlined-basic"
                label="Licensed Id"
                variant="outlined"
                defaultValue={"#"}
              />
            </div>
            <div className="profile__inputCover">
              <TextField
              disabled
                id="outlined-basic"
                label="Public Key"
                variant="outlined"
                defaultValue={publicKey}
              />
            </div>
          </div>
          <div className="profile__contentSec">
            
            <TextField
              fullWidth
              disabled
              defaultValue={id}
              id="outlined-basic"
              label="User ID"
              variant="outlined"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

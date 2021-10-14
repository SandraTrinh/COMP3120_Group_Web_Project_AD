import React from 'react'

import {Link} from 'react-router-dom'

import productService from '../services/vaccinations'

const UserInfo = ({user}) => {


  
console.log(user)
var myUserdata = [
    {
        "id": "0",
        "name": "Sam Smith",
        "username": "SamSmith",
        "password": "$2b$10$LpaUCjA1yrbIwPV5ZkhPK.2Xgx5eliBSOxUqK27GSc2MSAqoBlNO2",
        "territoryName": "Capital Region",
        "vaccineName": "Pfizer",
        "status": "Vaccinated",
        "FirstDose": "02-09-2021",
        "SecondDose": "23-09-2021"
    },
    {
        "id": "1",
        "name": "John Kim",
        "username": "JohnKim",
        "password": "$2b$10$39Yu1WXfi31ddsAa1V1g5e1iZEko3NNbpaBbnANA7wi.l4QvxjylW",
        "territoryName": "Central Coast",
        "vaccineName": "Pfizer",
        "status": "Vaccinated",
        "FirstDose": "09-09-2021",
        "SecondDose": "30-09-2021"
    },
    {
        "id": "2",
        "name": "Elliott Tsie",
        "username": "ElliottTsie",
        "password": "$2b$10$et2USQZTO230INwRwUB0xe3ZwBHkORgsSwmZNCVWvSGtcf2sCSTVO",
        "territoryName": "Central West",
        "vaccineName": "AstraZeneca",
        "status": "Vaccinated",
        "FirstDose": "15-09-2021",
        "SecondDose": "07-10-2021"
    },
    {
        "id": "3",
        "name": "Jack Dan",
        "username": "JackDan",
        "password": "$2b$10$am1JFJXiIaiMBEFrmF58tOffYs5kTKSU/xOQY5NyqXTGXWg6TE7GK",
        "territoryName": "Coffs Harbour - Grafton",
        "vaccineName": "Pfizer",
        "status": "Vaccinated",
        "FirstDose": "18-09-2021",
        "SecondDose": "13-10-2021"
    },
    {
        "id": "4",
        "name": "Liam White",
        "username": "LiamWhite",
        "password": "$2b$10$9TSTbg3E6MH1f1JfcklDuuj/hoPjHCXuI74fRPbs7VzrwcLnIV3jy",
        "territoryName": "Far West and Orana",
        "vaccineName": "AstraZeneca",
        "status": "Vaccinated",
        "FirstDose": "22-09-2021",
        "SecondDose": "18-10-2021"
    },
    {
        "id": "5",
        "name": "Noah Benjamin",
        "username": "NoahBenjamin",
        "password": "$2b$10$sUs7SZyFQ5N3CKCIgxtp3er1euenE9194pB4.lL9CEdqIqxzvn6qi",
        "territoryName": "Hunter Valley exc Newcastle",
        "vaccineName": "Pfizer",
        "status": "Vaccinated",
        "FirstDose": "29-09-2021",
        "SecondDose": "21-10-2021"
    },
    {
        "id": "6",
        "name": "Oliver Thompson",
        "username": "OliverThomson",
        "password": "$2b$10$KWfAIHnCbHnocMeZZ.LkO.a1FPeKXv0amr8pT5mTDWwC9VdcV15sW",
        "territoryName": "Illawarra",
        "vaccineName": "AstraZeneca",
        "status": "Vaccinated",
        "FirstDose": "29-09-2021",
        "SecondDose": "21-10-2021"
    },
    {
        "id": "7",
        "name": "Elijah Taylor",
        "username": "ElijahTaylor",
        "password": "$2b$10$tXkTd00/F/soZy7kLLgJV.NIe8UzH8lIW6IAgGIRoNCVyttDcCX.K",
        "territoryName": "Mid North Coast",
        "vaccineName": "Pfizer",
        "status": "Vaccinated",
        "FirstDose": "02-10-2021",
        "SecondDose": "23-10-2021"
    },
    {
        "id": "8",
        "name": "William Walker",
        "username": "WilliamWalker",
        "password": "$2b$10$cOeH/lB7v2nvwwb2BaBf7elPHqk4/RKdacsXOaCkzwdDdyRt8LwfK",
        "territoryName": "Murray",
        "vaccineName": "AstraZeneca",
        "status": "Vaccinated",
        "FirstDose": "08-10-2021",
        "SecondDose": "Not Available"
    },
    {
        "id": "9",
        "name": "James Bond",
        "username": "JamesBond",
        "password": "$2b$10$SwHGYUkOPj1IWtfXVNNW.udAlZxDbpji8TDE9kWAFEGgcyMYa2RQi",
        "territoryName": "New England and North West",
        "vaccineName": "Pfizer",
        "status": "Vaccinated",
        "FirstDose": "10-10-2021",
        "SecondDose": "Not Available"
    },
    {
        "id": "10",
        "name": "Lucas Wong",
        "username": "LucasWong",
        "password": "$2b$10$S8uYH/keFyMW4xKBmJW/l.NZYB4k2ak60bB/E2Fwah4PC9vGio38a",
        "territoryName": "Newcastle and Lake Macquarie",
        "vaccineName": "AstraZeneca",
        "status": "Vaccinated",
        "FirstDose": "13-10-2021",
        "SecondDose": "Not Available"
    },
    {
        "id": "11",
        "name": "Henry Clark",
        "username": "HenryClark",
        "password": "$2b$10$QA1hJbN8wUCmLnhgnyJeMOPgFqnCdqytGT7nqq4Eg/qfUn/Ugyj.W",
        "territoryName": "Richmond - Tweed",
        "vaccineName": "Pfizer",
        "FirstDose": "16-10-2021",
        "SecondDose": "Not Available"
    },
    {
        "id": "12",
        "name": "Alexander Grey",
        "username": "AlexanderGrey",
        "password": "$2b$10$17TxF2Yuz8L3Gv2t2YlqXOy9I75m4vg.sgbglThVmBLWbbyhs9UUu",
        "territoryName": "Riverina",
        "vaccineName": "AstraZeneca",
        "status": "Vaccinated",
        "FirstDose": "18-10-2021",
        "SecondDose": "Not Available"
    },
    {
        "id": "13",
        "name": "Olivia Morris",
        "username": "OliviaMorris",
        "password": "$2b$10$HWx78nB0tJG3T7npykFU3.B8VEKiilRBn103qIHzd4RMzkl0bfMri",
        "territoryName": "Southern Highlands and Shoalhaven",
        "vaccineName": "Pfizer",
        "status": "Vaccinated",
        "FirstDose": "09-09-2021",
        "SecondDose": "Not Available"
    },
    {
        "id": "14",
        "name": "Emma Watson",
        "username": "EmmaWatson",
        "password": "$2b$10$oOASonlXAmRdB9sc76R5Ze4cJWmIqKiYjRgcjAd7RvYsKJR6bO19m",
        "territoryName": "Sydney - Baulkham Hills and Hawkesbury",
        "vaccineName": "Unknown",
        "status": "Not Vaccinated",
        "FirstDose": "Not Available",
        "SecondDose": "Not Available"
    },
    {
        "id": "15",
        "name": "Ava Max",
        "username": "AvaMax",
        "password": "$2b$10$9DVgeqyjGvVOSaQdp7/zcOAmJ8pDYflDIbbyM0eMYQxcc4DTSE/QK",
        "territoryName": "Sydney - Blacktown",
        "vaccineName": "Unknown",
        "status": "Not Vaccinated",
        "FirstDose": "Not Available",
        "SecondDose": "Not Available"
    },
    {
        "id": "16",
        "name": "Charlotte Zhang",
        "username": "CharlotteZhang",
        "password": "$2b$10$s4.g0KYWImULjYh5vUn4ieE39chE00L2gsavEz.UfZ.loBZU2hr1C",
        "territoryName": "Sydney - City and Inner South",
        "vaccineName": "Unknown",
        "status": "Not Vaccinated",
        "FirstDose": "Not Available",
        "SecondDose": "Not Available"
    },
    {
        "id": "17",
        "name": "Amelia Rhodes",
        "username": "AmeliaRhodes",
        "password": "$2b$10$dx13bOPZIgUWQySFXtbgOeYenKP16e/WsXVfimZL8cl2hbg6NFOeq",
        "territoryName": "Sydney - Eastern Suburbs",
        "vaccineName": "Unknown",
        "status": "Not Vaccinated",
        "FirstDose": "Not Available",
        "SecondDose": "Not Available"
    },
    {
        "id": "18",
        "name": "Evelyn Stone",
        "username": "EvelynStone",
        "password": "$2b$10$hnfQ8UntldJUagMHgrnRT.tB3KV3/OuDT6nhTDjIgO7wjCfC3keJe",
        "territoryName": "Sydney - Inner South West",
        "vaccineName": "Unknown",
        "status": "Not Vaccinated",
        "FirstDose": "Not Available",
        "SecondDose": "Not Available"
    },
    {
        "id": "19",
        "name": "Harper Murphy",
        "username": "HarperMurphy",
        "password": "$2b$10$2R4wicOSm5i0v2fBgC5NvO0X0XB3mRrwGzY09pvQisNr5ybA.39gu",
        "territoryName": "Sydney - Inner West",
        "vaccineName": "Unknown",
        "status": "Not Vaccinated",
        "FirstDose": "Not Available",
        "SecondDose": "Not Available"
    }
]
var myUser;
if(user!=null) {
for(let i =0 ; i<myUserdata.length; i++) {

    if(myUserdata[i].name==user.name){
         myUser = myUserdata[i]
           console.log(myUser)
    }

}
}
 




  if(user!=null) {
    return(
      <div className="vaccination col-12">

        <ul className="vaccination-list">
          <li> Full Name: {myUser.name}     </li>
          <li> Territory Name: {myUser.territoryName}     </li>
          <li> Vaccine name: {myUser.vaccineName}     </li>
          <li> Vaccination status: {myUser.status}     </li>
          <li> First Dose Date: {myUser.FirstDose}     </li>
          <li> Second Dose Date: {myUser.SecondDose}     </li>

          
        </ul>

      </div> 
    )
} else {
return(
     <div > 
         <Link className="App-link" to="/login">Click me to log in</Link>
  
    </div>
)

}

}
export default UserInfo
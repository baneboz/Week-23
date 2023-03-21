import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

const randomUsers = [
  {
    gender: "male",
    name: {
      title: "mr",
      first: "petros",
      last: "bitzer",
    },
    location: {
      street: "lindenstraße 187",
      city: "isselburg",
      state: "mecklenburg-vorpommern",
      postcode: 33605,
      coordinates: {
        latitude: "-37.8740",
        longitude: "-18.9553",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "petros.bitzer@example.com",
    login: {
      uuid: "c0cc9674-bb8d-49af-b5e1-a2c3b375280f",
      username: "tinybird686",
      password: "franco",
      salt: "UTFZKP7S",
      md5: "9b79000542f2d49b1be9503cf4c7d00d",
      sha1: "19d7a70655093aebffdc593376843fad5c2a1a89",
      sha256:
        "400725a81e2f2ec3ce0eafe61b3e67d0e60dc43026f35e482f8ae33680b85f43",
    },
    dob: {
      date: "1954-05-09T06:36:09Z",
      age: 65,
    },
    registered: {
      date: "2014-11-11T01:17:23Z",
      age: 4,
    },
    phone: "0724-3150940",
    cell: "0177-1653372",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
    },
    nat: "DE",
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "arturo",
      last: "ibañez",
    },
    location: {
      street: "8598 calle nebrija",
      city: "vitoria",
      state: "cantabria",
      postcode: 19191,
      coordinates: {
        latitude: "-4.7987",
        longitude: "-151.0872",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "arturo.ibañez@example.com",
    login: {
      uuid: "c29855c3-e572-469d-af31-5c430a65dd4d",
      username: "tinyelephant852",
      password: "smokey",
      salt: "tWqndPzv",
      md5: "4c771041d94a39ad2858347444aad5f9",
      sha1: "7e371bf66a77e0d47f03e84d6147f1cc9db48067",
      sha256:
        "ce54338f11afdead2549d5416105ce61f8c5c561183d9e8bb61f7452823cbb57",
    },
    dob: {
      date: "1954-11-06T12:22:31Z",
      age: 64,
    },
    registered: {
      date: "2005-05-18T17:48:08Z",
      age: 14,
    },
    phone: "945-959-276",
    cell: "606-294-358",
    id: {
      name: "DNI",
      value: "40735773-S",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    },
    nat: "ES",
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "deniz",
      last: "koçyiğit",
    },
    location: {
      street: "668 doktorlar cd",
      city: "kahramanmaraş",
      state: "karabük",
      postcode: 61780,
      coordinates: {
        latitude: "-55.2488",
        longitude: "-109.9305",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "deniz.koçyiğit@example.com",
    login: {
      uuid: "869f9e3c-90a4-4e76-9d70-b48bc4be238f",
      username: "brownzebra970",
      password: "othello",
      salt: "YOoMqfBs",
      md5: "200ddb3a575860c4882a14ea21dc7fcf",
      sha1: "262e157c3a4b0be58fd3ced7977a5ee2f5f72210",
      sha256:
        "10ec3a61d8756a0902408ca3e07badaed2e8ce080b1488a0792fd850a8ac3d74",
    },
    dob: {
      date: "1972-03-24T23:15:37Z",
      age: 47,
    },
    registered: {
      date: "2012-05-02T23:57:28Z",
      age: 7,
    },
    phone: "(942)-972-6256",
    cell: "(554)-683-1796",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/44.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
    },
    nat: "TR",
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "brad",
      last: "newman",
    },
    location: {
      street: "3273 springfield road",
      city: "edenderry",
      state: "kildare",
      postcode: 38439,
      coordinates: {
        latitude: "-77.9791",
        longitude: "-132.5350",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "brad.newman@example.com",
    login: {
      uuid: "9f9da394-174a-43ff-897f-74fb4a489897",
      username: "lazydog677",
      password: "lala",
      salt: "tfsjeKeC",
      md5: "06840ebb88b32cff2784c892bd03918e",
      sha1: "1de0ab082cae1324b215a6ddcaf42d63105990a7",
      sha256:
        "a1242c908a15a7b66b820e56a54e400bfbb2a2620cddec1c593c63d4e9fa493b",
    },
    dob: {
      date: "1973-12-01T17:18:31Z",
      age: 45,
    },
    registered: {
      date: "2011-11-11T12:23:38Z",
      age: 7,
    },
    phone: "021-076-9165",
    cell: "081-050-8608",
    id: {
      name: "PPS",
      value: "6848928T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/31.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    },
    nat: "IE",
  },
  {
    gender: "female",
    name: {
      title: "miss",
      first: "آوین",
      last: "سالاری",
    },
    location: {
      street: "7369 آیت الله سعیدی",
      city: "دزفول",
      state: "یزد",
      postcode: 78477,
      coordinates: {
        latitude: "30.2363",
        longitude: "133.4235",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "آوین.سالاری@example.com",
    login: {
      uuid: "51bfa911-ac5c-4665-8142-1917882a8952",
      username: "bigpanda836",
      password: "katie",
      salt: "BUBY54Ix",
      md5: "0ccf5bdd303f8bf1e01b8168fe1f72fc",
      sha1: "59856c36521aeb9040029bffe1ce5478457cf8af",
      sha256:
        "508abc0fd483c7ddd60ca4bc97257debe8bc63ee61878dc8745d616b07bfa4b9",
    },
    dob: {
      date: "1978-09-28T21:13:41Z",
      age: 40,
    },
    registered: {
      date: "2002-05-20T08:51:18Z",
      age: 17,
    },
    phone: "020-35220027",
    cell: "0949-597-2710",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/81.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: {
      title: "ms",
      first: "jasmine",
      last: "white",
    },
    location: {
      street: "4505 esk street",
      city: "rotorua",
      state: "west coast",
      postcode: 14009,
      coordinates: {
        latitude: "-83.1128",
        longitude: "84.9500",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "jasmine.white@example.com",
    login: {
      uuid: "be2a8081-c90d-4ad7-9e4d-ad154fb06fc6",
      username: "lazydog206",
      password: "shark1",
      salt: "DH7pnjdS",
      md5: "08686064e9dad8c75005af3e03e89dbb",
      sha1: "82a709ceedc49d63b40d2f2222d892d2884d8f60",
      sha256:
        "1cebd0c46901d1b206f37301ea45729ab43135fb2757baa530620b467d122454",
    },
    dob: {
      date: "1992-07-06T19:11:03Z",
      age: 26,
    },
    registered: {
      date: "2009-07-31T08:08:25Z",
      age: 9,
    },
    phone: "(886)-945-5025",
    cell: "(702)-881-8135",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "väinö",
      last: "hatala",
    },
    location: {
      street: "3449 suvantokatu",
      city: "virrat",
      state: "central finland",
      postcode: 93183,
      coordinates: {
        latitude: "45.8277",
        longitude: "-18.4697",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "väinö.hatala@example.com",
    login: {
      uuid: "dee8581b-da0d-4405-8341-03b7f8ec3c20",
      username: "smallpanda402",
      password: "dorian",
      salt: "4HjSYZd5",
      md5: "e5ea3e311bd51d14bae1dbc3681d6809",
      sha1: "01498f65290add4dd13265bdfb5d3adb49244a5e",
      sha256:
        "05f0537e9ad953616496444021260c549f05961f4eb9e3b862590ba61893217f",
    },
    dob: {
      date: "1971-12-10T22:13:29Z",
      age: 47,
    },
    registered: {
      date: "2014-12-25T08:05:59Z",
      age: 4,
    },
    phone: "04-129-559",
    cell: "043-995-98-18",
    id: {
      name: "HETU",
      value: "NaNNA219undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/99.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: {
      title: "ms",
      first: "alessia",
      last: "van der beek",
    },
    location: {
      street: "3609 nicolaasweg",
      city: "asten",
      state: "flevoland",
      postcode: 59435,
      coordinates: {
        latitude: "68.5392",
        longitude: "98.7207",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "alessia.vanderbeek@example.com",
    login: {
      uuid: "7dc074bf-078f-4432-8bc8-31e70ddaf698",
      username: "greenladybug586",
      password: "wishbone",
      salt: "QojOIwvR",
      md5: "7f68a130c9de292d9088b3a2063dab0d",
      sha1: "b5a6417b6c8ddde4de977a6aebc1a53250ffc3c8",
      sha256:
        "3a545dfe0522424f8762dd59cf64d224e7cb2b1b843600349a9dc4ecda89a210",
    },
    dob: {
      date: "1948-01-16T11:23:24Z",
      age: 71,
    },
    registered: {
      date: "2014-11-26T13:49:07Z",
      age: 4,
    },
    phone: "(911)-170-1105",
    cell: "(979)-968-7420",
    id: {
      name: "BSN",
      value: "18926680",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "daoud",
      last: "zantingh",
    },
    location: {
      street: "2843 wed",
      city: "edam-volendam",
      state: "overijssel",
      postcode: 23807,
      coordinates: {
        latitude: "-75.0208",
        longitude: "-97.5566",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "daoud.zantingh@example.com",
    login: {
      uuid: "9b03de3d-1687-47f2-95df-0ee82bcd0e4c",
      username: "silverfish664",
      password: "zach",
      salt: "3SKtzrvD",
      md5: "8267960beaed17a9a77f351d9ccd1430",
      sha1: "0848b9e793865da4e9c2974c043b58988ab811b7",
      sha256:
        "90f1a1efc6fb21e890ea56c29d375f393e7563bc6c5567c5860240eb83c4929b",
    },
    dob: {
      date: "1963-01-13T00:28:52Z",
      age: 56,
    },
    registered: {
      date: "2012-07-06T14:25:08Z",
      age: 6,
    },
    phone: "(426)-687-7132",
    cell: "(456)-465-4230",
    id: {
      name: "BSN",
      value: "30334017",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/99.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "storm",
      last: "olsen",
    },
    location: {
      street: "5813 nylandsvej",
      city: "odense sv",
      state: "hovedstaden",
      postcode: 88780,
      coordinates: {
        latitude: "40.2371",
        longitude: "-58.9843",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "storm.olsen@example.com",
    login: {
      uuid: "8cf523f8-8f5f-4e9e-92c4-2ebf0cec5a01",
      username: "yellowlion196",
      password: "juliette",
      salt: "dPYE7ys7",
      md5: "5524a735f8bf0fe72623166c679249df",
      sha1: "6da5a3ee874d1513b6a164b10357c74cbc555ab7",
      sha256:
        "6433fb6d6530507b412736a8e3131e3515a4135c64c2d6aacdcf2e39e9a1a36d",
    },
    dob: {
      date: "1994-06-24T19:13:21Z",
      age: 24,
    },
    registered: {
      date: "2011-03-12T08:06:41Z",
      age: 8,
    },
    phone: "54504912",
    cell: "09284671",
    id: {
      name: "CPR",
      value: "340400-2583",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "harvey",
      last: "parker",
    },
    location: {
      street: "5411 bruce st",
      city: "el cajon",
      state: "michigan",
      postcode: 18226,
      coordinates: {
        latitude: "8.8701",
        longitude: "65.7145",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "harvey.parker@example.com",
    login: {
      uuid: "32a855bf-5781-4c9f-a22c-03209fbeeadb",
      username: "purplepanda521",
      password: "jake",
      salt: "AL3zonCU",
      md5: "fccf3b1430977228c1d95e46f80ec6b4",
      sha1: "b476e3ebe94e895e3b1d1706f589d43753aba8b2",
      sha256:
        "431eba51099e18ba9ff9ef17376f042a10b8109b1d2b38c4da4412f890937c83",
    },
    dob: {
      date: "1962-04-28T09:46:59Z",
      age: 57,
    },
    registered: {
      date: "2014-05-01T20:16:10Z",
      age: 5,
    },
    phone: "(786)-738-8959",
    cell: "(522)-709-4783",
    id: {
      name: "SSN",
      value: "769-02-9194",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: {
      title: "mrs",
      first: "kaylee",
      last: "perkins",
    },
    location: {
      street: "9464 hickory creek dr",
      city: "fairfield",
      state: "oregon",
      postcode: 27179,
      coordinates: {
        latitude: "-16.5497",
        longitude: "-97.8680",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "kaylee.perkins@example.com",
    login: {
      uuid: "11de4aac-0b52-4fc4-a3b2-eb956457fc4a",
      username: "organicbutterfly828",
      password: "laura",
      salt: "ArNVfmil",
      md5: "a1940136a03a4e628f3aff6e4a6d3c8f",
      sha1: "dd2c8965c9f4abeee465e3f86fd0805ab5de7d15",
      sha256:
        "7b3cf9e03a8f7a69e8649e0b328716eba63c31ff2cf3b72dbc98fa4a8f996261",
    },
    dob: {
      date: "1959-02-02T08:41:21Z",
      age: 60,
    },
    registered: {
      date: "2017-09-29T01:19:21Z",
      age: 1,
    },
    phone: "(754)-400-2895",
    cell: "(281)-478-9373",
    id: {
      name: "SSN",
      value: "280-58-0394",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/93.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg",
    },
    nat: "US",
  },
];

console.log(randomUsers);

const users = randomUsers.map(user => {
  return (
    <tr key={user.login.username}>
      <td>
        <Image
          roundedCircle
          src={user.picture.thumbnail}
          alt={
            "Nice looking picture of " + user.name.first + " " + user.name.last
          }
        ></Image>
      </td>
      <td>
        <p>name: {user.name.first} </p>
        <p>email: {user.email} </p>
        <p>
          date of birth: {new Date(user.dob.date).getDate()}-
          {new Date(user.dob.date).getMonth() + 1}-
          {new Date(user.dob.date).getFullYear()}{" "}
        </p>
      </td>
    </tr>
    // <Col xs={12}>
    //   <article className="user__card" key={user.login.username}>
    //     <img
    //       className="user__img"
    //       src={user.picture.thumbnail}
    //       alt={
    //         "Nice looking picture of " + user.name.first + " " + user.name.last
    //       }
    //     />
    //     <div className="user__info">
    //       <p>name: {user.name.first} </p>
    //       <p>email: {user.email} </p>
    //       <p>
    //         date of birth: {new Date(user.dob.date).getDate()}-
    //         {new Date(user.dob.date).getMonth() + 1}-
    //         {new Date(user.dob.date).getFullYear()}{" "}
    //       </p>
    //     </div>
    //   </article>
    // </Col>
  );
});

export default function User() {
  return (
    <main className="user__list">
      <Container>
        <Table hover responsive>
          <tbody>{users}</tbody>
        </Table>
      </Container>
    </main>
  );
}

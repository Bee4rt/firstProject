import React from "react";
import TeamMember from "./TeamMember";

function TeamProfile() {
  const data = [
    {
      id: 1,
      img: "/public/images/01.jpg",
      name: "Walter White",
      position: "Bryan Cranston",
      phone: "+49 12345678",
      email: "walter@b-bad.com",
      website: "walterwhite.com",
    },
    {
      id: 2,
      img: "/public/images/02.jpg",
      name: "Jesse Pinkman",
      position: "Aaron Paul",
      phone: "+49 12345678",
      email: "jesse@b-bad.com",
      website: "jessepinkman.com",
    },
    {
      id: 3,
      img: "/public/images/03.jpg",
      name: "Skyler White",
      position: "Anna Gunn",
      phone: "+49 12345678",
      email: "skyler@b-bad.com",
      website: "skylerwhite.com",
    },
    {
      id: 4,
      img: "/public/images/04.jpg",
      name: "Gus Fring",
      position: "Giancarlo Esposito",
      phone: "+49 12345678",
      email: "gus@b-bad.com",
    },
    {
      id: 5,
      img: "/public/images/05.jpg",
      name: "Saul Goodman",
      position: "Bob Odenkirk",
      phone: "+49 12345678",
      email: "saul@b-bad.com",
    },
    {
      id: 6,
      img: "/public/images/06.jpg",
      name: "Hank Schrader",
      position: "Dean Norris",
      phone: "+49 12345678",
      email: "hank@b-bad.com",
    },
  ];

  const members = data.map((member) => (
    <TeamMember
      key={member.id}
      img={member.img}
      name={member.name}
      position={member.position}
      phone={member.phone}
      email={member.email}
      website={member.website}
    />
  ));

  return <div className="box2">{members}</div>;
}

export default TeamProfile;

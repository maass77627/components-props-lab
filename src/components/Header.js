import React from "react";

function Header({name}) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

// interface HeaderProps {
//   name: string;
// }

// function Header({ name }: HeaderProps) {
//   return (
//     <header>
//       <h1>{name}</h1>
//     </header>
//   );
// }

export default Header;

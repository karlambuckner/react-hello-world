import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
    names: 'Madison and Karla',
    location: '3A',
    issue: 'Firebase'
  },
  {
    names: 'Bonnie and Clyde',
    location: '4F',
    issue: 'Active Record'
  },
  {
    names: 'Rachel and Ross',
    location: '5E',
    issue: 'Ruby database'
  }
];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      key={index}/>
    )}
    </div>
  )
  };

export default TicketList;

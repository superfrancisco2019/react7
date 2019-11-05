import React from 'react'

function FetchSimpsons ({ simpson }) {
    return (
      <div className=" FetchSimpsons">
        <img
          src={simpson.image}
          alt={simpson.character}
        />
        <ul>
          <li>
            Name: {simpson.character}
           Quote : {simpson.quote}
          </li>
        </ul>
      </div>
    );
    }

export default FetchSimpsons;
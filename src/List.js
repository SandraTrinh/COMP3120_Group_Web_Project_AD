import React from 'react'

/**
 * Component for showing a list of things with a vote button
 * 
 * @component
 */
const List = ({contents, addVote}) => {
    return (
      <ul>
        {
          contents.map((item) => 
            <li key={item.id}>
              {item.content} [{item.votes} Votes]
            </li>)
          } 
      </ul> 
    )
  }

  export default List

  
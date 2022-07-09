import React from 'react'

const NextButton = (props: { addTrip: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  return <button onClick={props.addTrip}>Next</button>
}

export default NextButton;
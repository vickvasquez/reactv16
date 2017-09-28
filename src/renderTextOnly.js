import React from 'react';

const Comment = ({text}) => {

	const emojifiedText = text
		.replace(':)','😛')
		.replace(':D','🙄')
		.replace(':(','😓')

//Las dos formas funcionan. la linea comentada inserta un span dentro del div
/*
	return (
		<span>
			{emojifiedText}
		</span>
	)
*/
	return emojifiedText
}

export default class renderTextOnly extends React.Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<Comment text="Hola, hoy estoy aprendiendo react 16 :(" />
      </div>
    );
  }
}

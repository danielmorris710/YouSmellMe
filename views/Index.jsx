const React = require('react')

const myStyle = {
    color: '#1434A4',
    backgroundColor: '#FFDEAD',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

class Index extends React.Component {
   render () {
    return (
    <div style = {myStyle}>
      <h1> 'Welcome To You Smell Me!' </h1>
      <h2> 'Let's Get You Noticed!' </h2>
    </div>
     );
    }
 }
 module.exports  = Index
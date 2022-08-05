const React = require('react')


const myStyle = {
    color: '#1434A4',
    backgroundColor: '#FFDEAD',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

class Home extends React.Component {
    render () {
     const { pokemon } = this.props
        return (
        <div style = {myStyle}>
         <h1> 'Welcome to You Smell Me!' </h1>
            <a href="/fragrance"><button type="submit"> Follow Your Nose </button></a>
        </div>
        );
    }
}

module.exports = Home
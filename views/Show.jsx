const React = require('react')

const myStyle = {
    color: '#1434A4',
    backgroundColor: '#FFDEAD',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

class Show extends React.Component {
   render () {
    const { fragrance } = this.props
    return (
    <div style = {myStyle}>
      <h1> 'You Smell Me!' </h1>
      <h2> {fragrance.name} </h2>
      <img src= {fragrance.img}></img>
      Size:  {fragrance.size} oz.<br/>
      Price: ${fragrance.price} <br/>
      In Stock: {fragrance.stock}
      <nav>
          <a href="/fragrance"><button type="submit"> Back </button></a>
      </nav>
      <nav>
      <a href={`/fragrance/${fragrance.id}/edit`}><button type="submit"> Edit Fragrance </button></a>
      </nav>
    </div>
     );
    }
 }
 module.exports  = Show
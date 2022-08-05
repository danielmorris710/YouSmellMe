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
    const { fragrance } = this.props
    return (
    <div style = {myStyle}>
      <h1> 'Welcome To You Smell Me!' </h1>
      <h2> 'Let's Get You Noticed!' </h2>
      <ul>
        {fragrance.map((fragrance, x) => {
            return(
                    <a href={`/fragrance/${x}`}>
                       <img src= {fragrance.img}></img>
                    </a>
            )
        })}
      </ul>
      <nav>
        <a href="/fragrance/new"><button> Add Fragrance </button></a>
      </nav>
    </div>
     );
    }
 }
 module.exports  = Index
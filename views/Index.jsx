const React = require('react')

const body = {
  minHeight: '100%',
  backgroundRepeat: 'no repeat',
  backgroundImage: ' linear-gradient( rgba(255,222,173,1) 0%, rgba(173,205,255,1) 75%, rgba(0,0,0,1) 95%)',
}

const button = {
  height: '30px',
  borderRadius: '10px',
  marginLeft: '1300px',
}

const myStyle = {
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '30px',
  fontFamily: 'Cinzel Decorative',
  fontWeight: 'bold'
};

const newDef = {
  fontFamily: 'Cinzel Decorative',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
}  

const images = {
  margin: '10px',
  height: '200px',
  marginLeft: '20px',
  border: 'solid black',
  borderRadius: '30px',
  boxShadow: '10px 5px 5px grey',
}

class Index extends React.Component {
   render () {
    const { fragrance } = this.props
    return (
    <html style = {body}>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet"></link>
      </head>
        <nav>
          <a href="/fragrance/new"><button style = {button}> Add Fragrance </button></a>
        </nav>

      <div style = {myStyle}>
        <h1> You Smell Me? </h1>
        <h2 style = {newDef}> Let's Get You Noticed! </h2>
        <ul>
          {fragrance.map((fragrance) => {
              return(
                      <a href={`/fragrance/${fragrance.id}`}>
                        <img src= {fragrance.img} style = {images}></img>
                      </a>
              )
          })}
        </ul>
      </div>
    </html>
     );
    }
 }
 module.exports  = Index
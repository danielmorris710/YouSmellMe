const React = require('react')

const body = {
  minHeight: '100%',
  backgroundRepeat: 'no repeat',
  backgroundImage: ' linear-gradient( rgba(173,205,255,.5) 20%, rgba(240,240,240,1) 85%, rgba(0,0,0,1) 100%)',
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
  marginTop: '50px'
}  

const images = {
  margin: '10px',
  height: '200px',
  marginLeft: '120px',
  borderRadius: '30px',
  boxShadow: '10px 5px 5px grey',
}

const header = {
  height: '100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  minWidth: '100%',
  backgroundColor: 'rgb(250, 249, 246, .5)',
}

const button = {
  height: '30px',
  borderRadius: '10px',
}

const logo = {
  letterSpacing: '5px',
  fontFamily: 'Cinzel Decorative',
  fontSize: '60px',
  marginLeft: '450px',
  paddingRight: '225px'
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

        <header style = {header}> 
          <h1 style = {logo}> You Smell Me? </h1>
          <a href="/fragrance/new"><button style = {button}> Add Fragrance </button></a>
        </header>  

      <div style = {myStyle}>
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
const React = require('react')

const body = {
  minHeight: '100%',
  backgroundRepeat: 'no repeat',
  backgroundImage: ' linear-gradient( rgba(173,205,255,.5) 20%, rgba(240,240,240,1) 85%, rgba(0,0,0,1) 100%)',
}

const button = {
  height: '30px',
  borderRadius: '10px',
  margin: '3px',
}

const backButton = {
  height: '30px',
  borderRadius: '10px',
}

const myStyle = {
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '60px',
  fontFamily: 'Cinzel Decorative',
  fontWeight: 'bold',
};

const images = {
  margin: '5px',
  height: '300px',
  borderRadius: '30px',
  boxShadow: '10px 5px 5px grey',
}

const newDef = {
  fontFamily: 'Cinzel Decorative',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '15px',
  marginTop: '50px'
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

const logo = {
  letterSpacing: '5px',
  fontFamily: 'Cinzel Decorative',
  fontSize: '60px',
  marginLeft: '450px',
  paddingRight: '225px'
}

class Show extends React.Component {
  
   render () {
    const { fragrance } = this.props
    return (
    <html style = {body}>  
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet"></link>
        </head>
    <body>
        <header style = {header}> 
          <h1 style = {logo}> You Smell Me? </h1>
          <a href="/fragrance"> <button style = {backButton} type="submit"> Back </button> </a>
        </header>

      <div style = {newDef}>
          <h2> {fragrance.name} </h2>

          <nav>
          <a href={`/fragrance/${fragrance.id}/edit`}><button style = {button} type="submit"> Edit Fragrance </button> </a>
          </nav>

          <img src= {fragrance.img} style = {images}></img>
          Size:  {fragrance.size} oz.<br/>
          Price: ${fragrance.price} <br/>
          {fragrance.stock>0? `In Stock: ${fragrance.stock}` : 'Out Of Stock'}

          <nav>
          {fragrance.stock>0? <form action={`/fragrance/${fragrance.id}/buy?_method=PUT`} method="POST"> <button type="submit" style = {button}> Buy </button> </form> : <button disabled='true' style = {button}> Out Of Stock </button> }
          </nav>

          <nav>
          <form action={`/fragrance/${fragrance.id}?_method=DELETE`} method='POST'> <button style = {button} type="submit"> Delete </button> </form>  
          </nav>  

      </div>
    </body>  
    </html>  
     );
    }
 } 

 module.exports  = Show
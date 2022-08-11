const React = require('react')

const body = {
  minHeight: '100%',
  backgroundRepeat: 'no repeat',
  backgroundImage: ' linear-gradient( rgba(255,222,173,1) 0%, rgba(173,205,255,1) 75%, rgba(0,0,0,1) 95%)'
}

const button = {
  height: '30px',
  borderRadius: '10px',
  margin: '3px',
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
  margin: '10px',
  height: '300px',
  border: 'solid black',
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
  marginTop: '-25px'
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
      <div style = {newDef}>
        <h1 style = {myStyle}> You Smell Me! </h1>
        <h2> {fragrance.name} </h2>

        <nav>
        <a href={`/fragrance/${fragrance.id}/edit`}><button style = {button} type="submit"> Edit Fragrance </button> </a>
        </nav>

        <img src= {fragrance.img} style = {images}></img>
        Size:  {fragrance.size} oz.<br/>
        Price: ${fragrance.price} <br/>
        {fragrance.stock==0? 'Out Of Stock' : `In Stock: ${fragrance.stock}` }

        <nav>
        {fragrance.stock==0?  <button disabled='true' style = {button}> Out Of Stock </button>  : <button style = {button}> Buy </button> }
        </nav>

        <nav>
          <a href="/fragrance"> <button style = {button} type="submit"> Back </button> </a>
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
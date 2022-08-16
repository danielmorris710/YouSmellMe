const React = require('react')

const body = {
  minHeight: '100%',
  backgroundRepeat: 'no repeat',
  backgroundImage: ' linear-gradient( rgba(173,205,255,.5) 20%, rgba(240,240,240,1) 85%, rgba(0,0,0,1) 100%)',
}

const button = {
  height: '30px',
  borderRadius: '10px'
}

const backButton = {
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
  fontSize: '20px',
  fontWeight: 'bold',
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

class Edit extends React.Component {
  render() {
    const fragrance = this.props.fragrance
    return (
    <html style = {body}> 
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet"></link>
    </head> 

        <header style = {header}> 
          <h1 style = {logo}> You Smell Me? </h1>
          <a href={`/fragrance/${fragrance.id}`}> <button style = {button} type="submit"> Back </button> </a>  
        </header> 

        <div style = {myStyle}>
            <h1>Edit Fragrance</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action={`/fragrance/${fragrance.id}?_method=PUT`} method="POST">
              Name: <input type="text" name="name" value={fragrance.name}/><br/>
              Image URL: <input type="text" name="img" value={fragrance.img}/><br/>
              Size: <input type="text" name="size" value={fragrance.size}/> oz.<br/>
              Price: $ <input type="text" name="price" value={fragrance.price}/><br/>
              In Stock: <input type="text" name="stock" value={fragrance.stock}/><br/>
              <input style = {button} type="submit" name="" value="Update Fragrance"/>
            </form>   
        </div>
    </html>  
       );
    }
  }

module.exports = Edit
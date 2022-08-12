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
  fontWeight: 'bold'
};

class Edit extends React.Component {
  render() {
    const fragrance = this.props.fragrance
    return (
    <html style = {body}>  
        <div style = {myStyle}>
        <nav>
          <a href="/fragrance"> <button style = {backButton} type="submit"> Back </button> </a>
        </nav>
            <h1>Edit Fragrance</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action={`/fragrance/${fragrance.id}?_method=PUT`} method="POST">
              Name: <input type="text" name="name" /><br/>
              Image URL: <input type="text" name="img" /><br/>
              Size: <input type="text" name="size" /> oz.<br/>
              Price: $ <input type="text" name="price" /><br/>
              In Stock: <input type="text" name="stock" /><br/>
              <input style = {button} type="submit" name="" value="Update Fragrance"/>
            </form>   
        </div>
    </html>  
       );
    }
  }

module.exports = Edit
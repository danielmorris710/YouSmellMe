const React = require('react')

const body = {
  minHeight: '100%',
  backgroundRepeat: 'no repeat',
  backgroundImage: ' linear-gradient( rgba(255,222,173,1) 0%, rgba(173,205,255,1) 75%, rgba(0,0,0,1) 95%)'
}


const button = {
  display: 'flex',
  jusiftyContent: 'center',
  height: '30px',
  borderRadius: '10px'
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

class New extends React.Component {
  render() {
    return (
    <html style = {body}>  
      <div style = {myStyle}>
          <h1>New Fragrance</h1>
          {/* NOTE: action will be the route, method will be the HTTP verb */}
          <form action="/fragrance" method="POST">
            Name: <input type="text" name="name" /><br/>
            Image URL: <input type="text" name="img" /><br/>
            Size: <input type="text" name="size" /> oz.<br/>
            Price: $<input type="text" name="price" /><br/>
            In Stock: <input type="text" name="stock" /><br/>
            <input style = {button} type="submit" name="" value="Add Fragrance"/>
          </form>
      </div>
    </html> 
      );
    }
  }

module.exports = New
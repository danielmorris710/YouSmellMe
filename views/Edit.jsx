const React = require('react')

const myStyle = {
    color: '#1434A4',
    backgroundColor: '#FFDEAD',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

class Edit extends React.Component {
  render() {
    return (
        <div style = {myStyle}>
            <h1>Edit Fragrance</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/fragrance" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image URL: <input type="text" name="name" /><br/>
              Size: <input type="text" name="name" /> oz.<br/>
              Price: $<input type="text" name="name" /><br/>
              Stock: <input type="text" name="name" /><br/>
              <input type="submit" name="" value="Update Fragrance"/>
            </form>   
        </div>);
    }
  }

module.exports = Edit
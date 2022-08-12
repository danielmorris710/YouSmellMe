const React = require('react')

const body = {
    minHeight: '100%',
    backgroundRepeat: 'no repeat',
    backgroundImage: ' linear-gradient( rgba(173,205,255,.5) 20%, rgba(240,240,240,1) 85%, rgba(0,0,0,1) 100%)',
  }
  
const button = {
    height: '30px',
    borderRadius: '10px',    
}

const myStyle = {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px',
    fontSize: '40px',
    fontFamily: 'Cinzel Decorative', 
    fontWeight: 'bold'
};

const newDef = {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    fontFamily: 'Cinzel Decorative',
    marginTop: '200px'
}  


class Home extends React.Component {
    render () {
        return (
        <html style = {body}> 
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet"></link>
        </head>
        <body>
          <div style = {myStyle}>
          <h1> Welcome to You Smell Me </h1>
                <a href="/fragrance"><button style = {button} type="submit"> Follow Your Nose </button></a>
          </div>
          <h2 style = {newDef}>
          You smell me (phrase) <br/>
          Type: phrase, slang <br/>
          Pronunciation: /you-smell-me/ <br/>
          Definition:  Do you understand what I am saying? /<br/>
                        A form of saying thank you to a compliment.
                      
                     <br/>
          </h2>
        </body>  
        </html>
        );
    }
}

module.exports = Home

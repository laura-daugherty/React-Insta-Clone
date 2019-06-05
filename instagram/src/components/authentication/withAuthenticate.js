// const withUpperCase = SomeComp => props => {
//   const upperCaseText = props.text.toUpperCase();
//   return <SomeComp text={upperCaseText} />;
// };
import React from "react"


const withAuthenticate = App =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };
    



export default withAuthenticate
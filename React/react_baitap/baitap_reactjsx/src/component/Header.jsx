/* eslint-disable react/prop-types */
function Header(){
    // eslint-disable-next-line no-unused-vars
    const Greeting = (props) => {
        return (
          <div>
            <h2>Hello, {props.userName}!</h2>
          </div>
        );
      }
}
export default Header;
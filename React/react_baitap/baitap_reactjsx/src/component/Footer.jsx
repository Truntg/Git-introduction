/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
function Footer(){
    // eslint-disable-next-line no-unused-vars
    class UserForm extends Component {
      constructor(props) {
        super(props);
        this.state = { userInput: '' };
      }
    
      handleChange = (event) => {
        this.setState({ userInput: event.target.value });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.userInput);
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={this.state.userInput}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
}
export default Footer;
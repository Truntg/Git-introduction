/* eslint-disable react/prop-types */


function Header(props){

    console.log(props);
    
    const handleLogin = () => {props.onClick();};

    const handleLogout = () => {props.onLogout();};
    // const [isLogin, setIsLogin] = useState(false);


    // const onLogout = () =>{
    //     console.log(isLogin);
    //     setIsLogin(false);
    // }

    // console.log(isLogin);
    // const onLogin = () => {
    //     console.log(2222, isLogin);
    //     setIsLogin(true);
    // }
    return (
        props.isLogined ?( <header>This is navbar <button onClick={handleLogout}>Logout</button></header>
    ): (
    <button onClick={handleLogin}>login</button>
    ));
}
export default Header;
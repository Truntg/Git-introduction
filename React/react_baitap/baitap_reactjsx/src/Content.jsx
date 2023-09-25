function Content(){
    let name = "ChunXi";

  const user = {
    firstName: "Nguyễn Thành",
    lastName:"Trung"
  };

  const formatName = (user) =>{
    return user.firstName + ''+user.lastName;
  };
    return(
        <div>
            <div>
                Helllo : {name} and {formatName(user)}
            </div>
            <div>{name === "ChunXi" ? 'Xin Chào ChunXi' : `Xin Chào ${formatName(user)}`}</div>
        </div>
    );
}
export default Content;
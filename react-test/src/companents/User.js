import PropTypes from "prop-types";

function User({name, surname, age, friends, isLoggedIn,adress}) {

    if(!isLoggedIn){
        return <div>Giriş Yapmadınız</div>
    }


    return (
    <>
       <h1>
           {`${name} ${surname} (${age})`}
       </h1>

        {adress.title} {adress.zip}
        <br />
        <br />
        {friends && friends.map((friend , index) => (
            <div key={index}>
                {friend}
            </div>
        ))}
    </>
    );
}

User.prototype = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    age : PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends : PropTypes.array,
    adress :PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
};

User.defaultProps ={
    isLoggedIn: false,
    name: "İsimsiz",
};

export default User;
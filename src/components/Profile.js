import React from "react";

class Profile extends React.Component {
    render() {
        const person = this.props;

        return (
            <div className="scientist-profile">
                <img className="scientist-image" src={person.image} />
                <div className="scientist-name">{person.name}</div>
            </div>
        );
    }
}

export default Profile;
import React, { Component } from 'react';
import { connect } from 'react-redux';
// No longer necessary for component to fetch own data
// import { fetchUser } from '../actions';

class UserHeader extends Component {
    // No longer necessary for component to fetch own data
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        const { user } = this.props;

        if(!user) {
            return null;
        }

        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find( user => user.id === ownProps.userId)};
}

// No longer necessary for component to fetch own data
// export default connect (mapStateToProps, { fetchUser })(UserHeader);
export default connect (mapStateToProps)(UserHeader);
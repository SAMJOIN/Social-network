import Friends from "./Friends"
import {connect} from 'react-redux'
import Friend from "./Friend"

const mapStateToProps = (state) => {
    return {
        friendsList: state.friendsPage.friends.map( friend => <Friend img={friend.img} name={friend.name} key={friend.id}/>)
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)

export default FriendsContainer;
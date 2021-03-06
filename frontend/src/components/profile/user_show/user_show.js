import React from 'react';
import { withRouter } from 'react-router-dom';
import PostBox from '../../posts/post_box';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    UNSAFE_componentWillMount() {
        this.props.fetchUserPosts(this.props.userId);
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render() {
        if (this.state.posts.length === 0) {
            return (<div>This user has no Posts</div>)
        } else {
            return (
                <div>
                    <h2>All of {this.props.users[0].user}'s Posts</h2>
                    {this.state.posts.map(post => (
                        <PostBox key={post._id} title={post.title} description={post.description} imageUrl={post.imageUrl}/>
                    ))}
                </div>
            );
        }
    }   
}

export default withRouter(UserShow);
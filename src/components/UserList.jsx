import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;
    

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    image={ user.image }
                    name={ user.name }
                    email={ user.email }
                    salary={ user.salary }
                    isGoldClient={ user.isGoldClient }
                    key={ index }
                    // onDelete={ this.handleDelete }
                />
            })}
        </div>
    );
}

export default UserList;
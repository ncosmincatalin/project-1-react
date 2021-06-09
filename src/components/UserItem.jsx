import React from 'react';

function UserItem(props) {
    const {name, email, salary, isGoldClient} = props;

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            <p>{ salary } RON</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
        </div>
    );
}

export default UserItem;
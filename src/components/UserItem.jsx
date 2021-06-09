import React from 'react';

function UserItem(props) {
    const {image, name, email, salary, isGoldClient} = props;

    return (
        <div>
            <img src={image} alt="No image found!"/>
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
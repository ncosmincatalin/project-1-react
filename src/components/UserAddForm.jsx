import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: '',
            email: '',
            salary: '',
            isGoldClient: false
        };
    }

    updateImage(event) {
        this.setState({image: event.target.value});
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateSalary(event) {
        this.setState({salary: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {image, name, email, salary, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, image, name, email, salary, isGoldClient)}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="image">Imagine:</label>
                <input
                    type="url"
                    name="image"
                    onChange={(event) => this.updateImage(event)}
                />
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="salary">Salariu:</label>
                <input
                    type="number"
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;
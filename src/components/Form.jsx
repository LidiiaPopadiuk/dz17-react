
import x from './Form.module.css'


export const Form = ({inputData}) => {

    const inputData2 = () => {
        const dataFromInput = document.querySelector('#input')
        const valueFromInput = dataFromInput.value

        const dataFromInput2 = document.querySelector('#input2')
        const valueFromInput2 = dataFromInput2.value

        inputData(valueFromInput, valueFromInput2)

        dataFromInput.value = ''
        dataFromInput2.value = ''
    }

        return (
            <form className={x.formClas}>

                <label htmlFor="input">Name</label>
                <input
                    id="input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />

                <label htmlFor="input2">Number</label>
                <input
                className={x.formClas}
                    id="input2"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />

                <button type="button" onClick={inputData2}>Add Contact</button>
            </form>
        )
}
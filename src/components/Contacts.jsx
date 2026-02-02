
import contactsImg from '../img/noContactsYet.jpg'

export const Contacts = ({ deleteData, contacts, filter }) => {
    console.log('contacts', contacts);
    

    const deleteContact = (e) => {
        const contactId = e.target.id
        deleteData(contactId)
    }

    // const { contacts, filter } = listData
    const filterValue = filter.toUpperCase()

    const filterContacts = contacts.filter((contact) => {
        return contact.name.toUpperCase().includes(filterValue)
    })
    return (
        <div>
            <h2>Contacts</h2>
            {filterContacts.length === 0 ? (
                <div>
                    <p>No contacts yet</p>
                    <img style={{ width: '100px', height: '100px' }} src={contactsImg} alt={contactsImg} />
                </div>
            ) : (
                <ul>
                    {filterContacts.map(contact => {
                        return <li key={contact.id}>{contact.name}: {contact.number} <button id={contact.id} onClick={deleteContact}>Delete</button></li>
                    })}
                </ul>
            )}
        </div>
    )
}
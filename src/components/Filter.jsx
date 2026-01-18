
export const Filter = ({ filterData }) => {

    const filterNames = () => {
        const inputFilter = document.querySelector("#filterInput")
        const inputValue = inputFilter.value
        filterData(inputValue)
    }

    return (
        <div>
            <p>Find contacts by name</p>
            <input onInput={filterNames} id="filterInput" type="text" />
        </div>
    )
}
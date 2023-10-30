import './style.js'

export const Header = () => {

    return (

        <header>
            <div className='imgContainer'>
                <img src="" alt="Pokedex" />
            </div>

            <div>
                <form className='searchForm'>
                    <input type="text" />
                    <button>Search</button>
                </form>
                <button className='dropdownBtn'></button>
            </div>
        </header>

    )

}
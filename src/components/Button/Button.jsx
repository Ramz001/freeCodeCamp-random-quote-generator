import PlusIcon from '../../assets/plus-solid.svg'

const Button = ({ text, handleClick }) => {
    return (
        <button 
            className="bg-blue-600 hover:bg-blue-700 h-10 text-white gap-2 w-36 
            flex items-center justify-center rounded-md"
            onClick={handleClick}
        >
            <img src={PlusIcon} alt="plus icon" className='w-5' />
            { text }
        </button>
    )
}

export default Button
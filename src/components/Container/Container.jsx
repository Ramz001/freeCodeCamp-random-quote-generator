import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Button from "../Button/Button"
import CloneIcon from '../../assets/clone-solid.svg'
import LinkedInIcon from '../../assets/linkedin-brands.svg'
import '../../index.css'

const Container = () => {
    const [currentQuote, setCurrentQuote] = useState({
        quote: '',
        author: ''
    })

    const updateQuote = async () => {
        const response = await fetch("https://api.quotable.io/random")
        const data = await response.json()

        try{
            setCurrentQuote({ quote: data.content, author: data.author })
        }
        catch(error){
            console.log(error, 'Error occured while fetching for a quote!')
        }
    }

    useEffect(()=>{
       updateQuote()
    },[])

    const copyToClipboard = () => {
        const text = `"${currentQuote.quote}" -${currentQuote.author}`

        navigator.clipboard.writeText(text).then(() => {
            alert("copied to clipboard")
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='border-gray-700 border rounded-lg md:w-2/4 mx-4 md:mx-0'
        >
            <motion.div 
                key={currentQuote.quote}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8"
            >
                <h2 className="text-stone-900 font-semibold text-lg">
                    "{ currentQuote.quote }"
                </h2>
                <p className="text-gray-500 mt-2">- { currentQuote.author }</p>
            </motion.div>
            <div 
                className="py-4 px-6 border-t border-gray-700 flex justify-between bg-gray-100 
                rounded-b-lg">
                <div className="flex gap-5">
                    <div className="link-button-container" >
                        <img src={CloneIcon} alt='clone icon' className="w-7" onClick={copyToClipboard} />
                    </div>
                    <a 
                        href="https://www.linkedin.com/feed/" 
                        target='_blank' 
                        rel="noreferrer"
                        className="link-button-container"
                    >
                        <img src={LinkedInIcon} alt='linkedin icon' className="w-7"  />
                    </a>
                </div>
                <Button text={'New Quote'} handleClick={updateQuote} />
            </div>
        </motion.div>
    )
}

export default Container
import SocialMediaContainer from "./SocialMediaContainer";
import logo from '../../../assets/logo.png'

export default function Header() {
    return (
        <div className='flex justify-between py-8'>
            <div className="flex gap-2 items-center">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <img src={logo} alt="" className="h-full w-full object-cover"/>
                </div>
                <h1 className='text-white text-[32px]'>Sachith Abeywardhana</h1>
            </div>
            <SocialMediaContainer show={false}/>
        </div>
    )
}

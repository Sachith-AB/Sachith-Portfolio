import SocialMediaContainer from "./SocialMediaContainer";

export default function Header() {
    return (
        <div className='flex justify-between py-8'>
            <h1 className='text-white text-[20px]'>Sachith Abeywardhana</h1>
            <SocialMediaContainer show={false}/>
        </div>
    )
}

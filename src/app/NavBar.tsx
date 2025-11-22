import { IoMdMenu } from "react-icons/io";

interface props{
    menuClick:() =>void;
}

export const NavBar:React.FC<props> = ({
    menuClick
}) => {
    return(
        <>
            <div className="text-black bg-white p-2 rounded-sm cursor-pointer" onClick={menuClick}>
                <IoMdMenu size={20}/>
            </div>
        </>
    );
}

import { Link } from "react-router-dom";

function NavLink({ icon: Icon, link, navLink }) {
    return (
        <div className="text-white text-[30px] hover:font-bold flex items-center">
            {Icon && <Icon className="mr-2" />}
            <Link to={`/admin/${link}`} className="flex-1">
                {navLink}
            </Link>
        </div>
    );
}

export default NavLink;

import React from "react";
import {Link} from "react-router-dom";
import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle} from "@nextui-org/react";
import TabList from "../tabs/TabList.tsx";
import {PathProperties} from "../../util/PathProperties.ts";


interface Props {
    list?: PathProperties[]
}

export default function Nav(props:Props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (<Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand>
                {/*<img src={EcoTrackerLogo} alt="Your Logo"/>*/}
                <p className="font-bold text-inherit">ECO Tracker Pro</p>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <TabList list={props.list}/>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <Link to="/signup">
                    <Button className={'hidden border-1 hover:border-green-400 lg:flex'} variant="flat">
                        Register
                    </Button>
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link to="/signin">
                    <Button className={'bg-green-400 text-white font-medium'} variant="flat">
                        Login
                    </Button>
                </Link>
            </NavbarItem>
        </NavbarContent>

        {/* <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                      className="w-full" size="lg">
                    {item}
                </Link>
            </NavbarMenuItem>))}
        </NavbarMenu>*/}
    </Navbar>);
}

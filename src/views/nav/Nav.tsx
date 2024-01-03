import React from "react";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";

// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System", "Deployments", "My Settings", "Team Settings", "Help & Feedback", "Log Out",];

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
                {/*//need to make true isActive when mouseclick*/}
                <NavbarItem isActive>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="#">
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#" color="foreground">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Areas
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem >
                    <Button as={Link} className={'hidden border border-1 hover:border-green-400 lg:flex'} href="#" variant="flat">
                        Sign In
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className={'bg-green-400 text-white font-medium'} href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem  key={`${item}-${index}`}>
                        <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full" size="lg">
                            {item}
                        </Link>
                    </NavbarMenuItem>))}
            </NavbarMenu>
        </Navbar>);
}

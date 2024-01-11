import {Tab, Tabs} from "@nextui-org/react";
import {PathProperties} from "../../util/PathProperties.ts";
import {Link} from "react-router-dom";

interface Props {
    list?: PathProperties[]
}

export const TabList = (props: Props) => {
    return (<div className="flex flex-wrap gap-4">
        <Tabs radius="lg" variant="light" color={"success"} className={'bg-transparent'} aria-label="Tabs radius">
            {props.list ? props.list.map((element) => {
                return (<Tab key={element.name} title={element.name} className={'hover:bg-green-400'}>
                    <Link to={element.path}>
                        {element.name}
                    </Link>
                </Tab>)
            }) : null}
        </Tabs>
    </div>);
}

export default TabList;
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, FunctionComponent } from "react";
import MenuOption from "./MenuOption";

type Props = {
    title: string,
}

const CustomDropDown:FunctionComponent<Props> = (props) => {

  return (
    <div className="w-36">
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center">
                {props.title}
                <ChevronDownIcon className="ml-1 w-5 h-5" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute mt-8 z-10">
                    <div className="w-56 px-1 flex flex-col bg-white border-t-2 border-teal-600 rounded-b-lg">
                        <Menu.Item as="div" className="border-b-2 border-slate-200 py-2">
                            <MenuOption title="Medicina Estetica" option="medicina-estetica" />
                        </Menu.Item>
                        <Menu.Item as="div" className="border-b-2 border-slate-200 py-2">
                            <MenuOption title="Dermatologia" option="dermatologia" />
                        </Menu.Item>
                        <Menu.Item as="div" className="border-b-2 border-slate-200 py-2">
                            <MenuOption title="Cosmiatria" option="cosmiatria" />
                        </Menu.Item>
                        <Menu.Item as="div" className="border-b-2 border-slate-200 py-2">
                            <MenuOption title="Masajes" option="masajes" />
                        </Menu.Item>
                        <Menu.Item as="div" className="border-b-2 border-slate-200 py-2">
                            <MenuOption title="Consultas Medicas" option="consultas-medicas" />
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    </div>
  );
}

export default CustomDropDown

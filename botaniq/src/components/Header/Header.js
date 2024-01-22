import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import Logo from "../../assest/logo/logo.png";
import { Link } from 'react-router-dom';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <Link to={item.to} className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </Link>
    );

    const items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/',
        template: itemRenderer
    },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Category',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Trees',
                    icon: 'pi pi-bolt',
                    to: '/trees',
                    template: itemRenderer
                },
                {
                    label: 'Plants',
                    icon: 'pi pi-server',
                    to: '/plants',
                    template: itemRenderer
                },
                {
                    label: 'Ferns',
                    icon: 'pi pi-star',
                    to: '/ferns',
                    template: itemRenderer
                },
                {
                    separator: true
                },
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            to: '/contact',
            template: itemRenderer
        }
    ];

    const start = <img alt="logo" src={Logo} height="40" className="mr-2" />;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}

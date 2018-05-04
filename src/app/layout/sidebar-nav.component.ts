import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.scss'],
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.Emulated
})
export class SideBarNavComponent {

    menuItems: MenuItem[] = [
        new MenuItem("Dashboards", "", "", "/app/home"),
        new MenuItem("Projects", "Pages.Projects", "", "/app/projects"),
        new MenuItem("Defect Categories", "Pages.DefectCategories", "", "/app/defect-categories"),
        new MenuItem("Partners", "Pages.Partners", "", "/app/partners"),
        new MenuItem("Users", "Pages.Users", "", "/app/users"),
        new MenuItem("Roles", "Pages.Roles", "", "/app/roles"),
        new MenuItem("Helpdesk", "Pages.Helpdesk", "", "/app/helpdesk"),
    ];

    constructor(
        injector: Injector
    ) {
    }

    showMenuItem(menuItem): boolean {
        return true;
    }
}

export type DocsMap = {
	name: string;
	path?: string;
	type?: "page" | "category";
	icon?: string;
	pages?: DocsMap[];
};

// SVG stuff is hopefully temporary
export const docsMap: DocsMap[] = [
	{
		name: "Overview",
		path: "",
		icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z"/><path d="M8 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z"/></svg>`
	},
	{
		name: "FAQ",
		path: "/faq",
		icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z"/><path d="M8 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z"/></svg>`
	},
	{
		name: "Restore the Microsoft Store (Windows 11)",
		path: "/restoremicrosoftstore",
		icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z"/><path d="M8 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z"/></svg>`
	},
	{
		name: "Status",
		path: "/status",
		icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z"/><path d="M8 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z"/></svg>`
	},
	{
		name: "Creating a Windows ISO with UUPMediaCreator",
		path: "/createwindowsiso",
		icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z"/><path d="M8 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z"/></svg>`
	},
	{
		type: "category",
		name: "Install Windows 10X",
		pages: [
			{
				name: "Install Windows 10X on Surface Duo 1",
				path: "/install10x/surfaceduo1",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			}
		]
	},
	{
		type: "category",
		name: "Other",
		pages: [
			{
				name: "Extract the boot partition or other partitions",
				path: "/other/extractingpartitions",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			}
		]
	},
	{
		type: "category",
		name: "Update",
		pages: [
			{
				name: "Migration Guidance for Secure Boot",
				path: "/update/migrationguidanceforsecureboot",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			},
			{
				name: "Updating Drivers and UEFI firmware",
				path: "/update/updatedriversanduefi",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			}
		]
	},
	{
		type: "category",
		name: "Install Windows",
		pages: [
			{
				name: "Making Cellular work on Sim Unlocked AT&T Surface Duo 1 devices",
				path: "/installwindows/attcellular-surfaceduo1",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			},
			{
				name: "Enabling Dual Boot on Surface Duo",
				path: "/installwindows/dualboot-surfaceduo1",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			},
			{
				name: "Install Windows on Surface Duo 1",
				path: "/installwindows/installwindows-surfaceduo1",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			},
			{
				name: "Install Windows on Surface Duo 2",
				path: "/installwindows/installwindows-surfaceduo2",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			},
			{
				name: "Reinstall Windows on Surface Duo 1",
				path: "/installwindows/reinstallwindows-surfaceduo1",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			},
			{
				name: "Uninstall Windows and revert your Surface Duo to stock",
				path: "/installwindows/uninstall-surfaceduo1",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			}
		]
	}
];

// {
// 	name: "ComboBox",
// 	path: "/components/combobox",
// 	icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H9.22047L9.43163 16.1553C9.44469 16.1031 9.45904 16.0513 9.47466 16H5C4.44772 16 4 15.5523 4 15V5C4 4.44772 4.44772 4 5 4H15C15.5523 4 16 4.44772 16 5V9.23163C16.3194 9.09477 16.6586 9.01856 17 9.00299V5C17 3.89543 16.1046 3 15 3H5ZM9.5 14H10.9427L11.9427 13H9.5C9.22386 13 9 13.2239 9 13.5C9 13.7761 9.22386 14 9.5 14ZM7.5 7.25C7.5 7.66421 7.16421 8 6.75 8C6.33579 8 6 7.66421 6 7.25C6 6.83579 6.33579 6.5 6.75 6.5C7.16421 6.5 7.5 6.83579 7.5 7.25ZM6.75 11C7.16421 11 7.5 10.6642 7.5 10.25C7.5 9.83579 7.16421 9.5 6.75 9.5C6.33579 9.5 6 9.83579 6 10.25C6 10.6642 6.33579 11 6.75 11ZM6.75 14C7.16421 14 7.5 13.6642 7.5 13.25C7.5 12.8358 7.16421 12.5 6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H9.5ZM9.5 10C9.22386 10 9 10.2239 9 10.5C9 10.7761 9.22386 11 9.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H9.5ZM10.9798 15.3772L15.8092 10.5478C16.5395 9.81741 17.7237 9.81741 18.454 10.5478C19.1843 11.2781 19.1843 12.4622 18.454 13.1926L13.6246 18.022C13.343 18.3036 12.9902 18.5033 12.6039 18.5999L11.106 18.9744C10.4546 19.1372 9.86451 18.5472 10.0274 17.8958L10.4018 16.3979C10.4984 16.0116 10.6982 15.6588 10.9798 15.3772Z" /></svg>`
// },
// {
// 	name: "Slider",
// 	path: "/components/slider",
// 	icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9C6.93191 9 7.71496 9.63738 7.93699 10.5L13.5 10.5C13.7761 10.5 14 10.7239 14 11C14 11.2455 13.8231 11.4496 13.5899 11.4919L13.5 11.5L7.93673 11.501C7.71435 12.3631 6.93155 13 6 13C5.06845 13 4.28565 12.3631 4.06327 11.501L2.5 11.5C2.22386 11.5 2 11.2761 2 11C2 10.7545 2.17688 10.5504 2.41012 10.5081L2.5 10.5L4.06301 10.5C4.28504 9.63738 5.06809 9 6 9ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10ZM10 3C10.9319 3 11.715 3.63738 11.937 4.49998L13.5 4.5C13.7761 4.5 14 4.72386 14 5C14 5.24546 13.8231 5.44961 13.5899 5.49194L13.5 5.5L11.9367 5.50102C11.7144 6.36312 10.9316 7 10 7C9.06845 7 8.28565 6.36312 8.06327 5.50102L2.5 5.5C2.22386 5.5 2 5.27614 2 5C2 4.75454 2.17688 4.55039 2.41012 4.50806L2.5 4.5L8.06301 4.49998C8.28504 3.63738 9.06809 3 10 3ZM10 4C9.44772 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4Z"/></svg>`
// },

export const docsPages = filterPages(docsMap);

function filterPages(docsStructure: DocsMap[] | DocsMap): DocsMap[] {
	if (Array.isArray(docsStructure)) {
		// it's an array of pages/categories
		return docsStructure
			.map(page => filterPages(page)) // recursively flatten the structure and filter to only include pages
			.flat(Infinity) as DocsMap[]; // flatten the structure to get rid of any nesting
	} else {
		// it's a single page/category, not a structure
		if (docsStructure.type === "category") {
			// it's a category
			return docsStructure.pages
				.map(page => filterPages(page)) // filter down and down until only pages are left
				.flat(Infinity) as DocsMap[]; // flatten the array
		} else {
			// it's a page
			return [docsStructure];
		}
	}
}

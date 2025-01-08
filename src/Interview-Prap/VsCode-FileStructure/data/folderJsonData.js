const folderData = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "src",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "components",
                    isFolder: true,
                    items: [
                       {
                        id: "4",
                        name: "home.jsx",
                        isFolder: false,
                        items: []
                       },{
                        id: "5",
                        name: "error.jsx",
                        isFolder: false,
                        items: []
                       }
                    ]
                },
                {
                    id: "6",
                    name: "Layout",
                    isFolder: true,
                    items: [
                       {
                        id: "7",
                        name: "header.jsx",
                        isFolder: false,
                        items: []
                       },{
                        id: "8",
                        name: "footer.jsx",
                        isFolder: false,
                        items: []
                       }
                    ]
                },
                {
                    id: "9",
                    name: "Apis",
                    isFolder: true,
                    items: [
                     {
                        id: "10",
                        name: "productApi.js",
                        isFolder: false,
                        items: []
                     },{
                        id: "11",
                        name: "userApi.js",
                        isFolder: false,
                        items: []
                     }
                    ]
                },
            ]
        },
        {
            id: "12",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "13",
                    name: "index.html",
                    isFolder: false,
                    items: []
                }
            ]
        }
    ]
}

export default folderData;
import type { filesProps, selectedFolderProps } from "./datatype/fileDataTypes";

export const FilesDirectoryArrObj:selectedFolderProps[] = [
    {   
        folderId:1,
        folderText:'new folder 1',
        files:[
            {
                fileId:1.1,
                fileName:'dummy.txt',
                summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut ducimus impedit cum. Dolorem exercitationem reprehenderit eaque mollitia natus harum similique sequi facere in odit ab, aperiam assumenda vel magni!'
            },
            {
                fileId:1.2,
                fileName:'dummy-2.txt',
                summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut ducimus impedit cum. Dolorem exercitationem reprehenderit eaque mollitia natus harum similique sequi facere in odit ab, aperiam assumenda vel magni!'
            },
            {
                fileId:1.3,
                fileName:'dummy-3.txt',
                summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut ducimus impedit cum. Dolorem exercitationem reprehenderit eaque mollitia natus harum similique sequi facere in odit ab, aperiam assumenda vel magni!'
            },
        ]
    },
    {
        folderId:2,
        folderText:'new folder 2',
        files:[]
    }
];

export const openFilesArr:filesProps[] = [];
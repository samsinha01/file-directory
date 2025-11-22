export interface selectedFolderProps {
    folderText: string;
    folderId: number;
    files: filesProps[];
}

export interface filesProps {
    fileId: number | string;
    fileName: string;
    summary:string;
}
"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useTheme } from "next-themes";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

interface EditorProps{
    onChange:(value:string)=>void;
    initialContent?: string;
    editable?: boolean;
}
 
const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    const {resolvedTheme} = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload = async (file: File) =>{
        const response = await edgestore.publicFiles.upload({file});
        return response.url;
    }

    const editorChange= ()=>{
        onChange(JSON.stringify(editor, null, 2))
    }

    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent?JSON.parse(initialContent) as PartialBlock[] : undefined,
        uploadFile: handleUpload,
        
    });
    return ( 
    <div>
        <BlockNoteView 
        editor={editor} 
        onChange={editorChange}
        theme={resolvedTheme === "dark"?"dark":"light"}
        editable={editable}/>
    </div>
     );
}
 
export default Editor;

 
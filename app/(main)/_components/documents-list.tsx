"use client";

import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Item } from "./items";
import { cn } from "@/lib/utils";
import { FileIcon, GlobeIcon, } from "lucide-react";

interface DocumentsListProp{
    parentDocumentId?: Id<"documents">;
    level?: number;
    data?: Doc<"documents">[];
    listtype?: string;
}

export const DocumentsList = ({
    parentDocumentId,
    level=0,
    listtype="Personal"
}:DocumentsListProp) => {
    const params = useParams();
    const router = useRouter();
    const [expanded, setExpanded] = useState<Record<string,boolean>>({});

    const onExpand=(documentId:string)=>{
        setExpanded(prevExpanded=>({
            ...prevExpanded,
            [documentId]: !prevExpanded[documentId]
        }));
    };

    const onRedirect=(documentId:string)=>{
        router.push(`/documents/${documentId}`);
    };

    if(listtype==="Personal"){
      const documents = useQuery(api.documents.getSidebar, {
          parentDocument: parentDocumentId
      });
      if (documents===undefined){
        return(
            <>
                <Item.Skeleton level={level}/>
                {level===0 &&(
                    <>
                        <Item.Skeleton level={level}/>
                        <Item.Skeleton level={level}/>
                    </>
                )}
            </>
        );
    };
      return (
        <>
          <p
            className={cn(
              "hidden text-sm font-medium text-muted-foreground/80",
              expanded && "last:block",
              level === 0 && "hidden",
            )}
            style={{ paddingLeft: level ? `${level * 12 + 25}px` : undefined }}
          >
            No page inside
          </p>
          {documents.map((document) => (
            <div key={document._id}>
              <Item
                id={document._id}
                label={document.title}
                onClick={() => onRedirect(document._id)}
                icon={FileIcon}
                documentIcon={document.icon}
                active={params.documentId === document._id}
                level={level}
                onExpand={() => onExpand(document._id)}
                expanded={expanded[document._id]}
              />
              {expanded[document._id] && (
                <DocumentsList parentDocumentId={document._id} level={level + 1} />
              )}
            </div>
          ))}
        </>
      );

    }else{
          const documents = useQuery(api.documents.getSidebarCollab);
          if (documents===undefined||documents.length===0){
            return(
                <>
                </>
            );
        };
          return (
            <>
              <Item
                label="Collaborative Documents"
                icon={GlobeIcon}
                button={false}/>
              {documents.map((document) => (
                <div key={document._id}>
                  <Item
                    id={document._id}
                    label={document.title}
                    onClick={() => onRedirect(document._id)}
                    icon={FileIcon}
                    documentIcon={document.icon}
                    active={params.documentId === document._id}
                    onExpand={() => onExpand(document._id)}
                  />
                </div>
              ))}
            </>
          );
    }




}

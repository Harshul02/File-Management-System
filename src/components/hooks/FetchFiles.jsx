import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../../firebase";

let files = collection(database, "files");

const FetchFiles = (parentId, userEmail) => {
    console.log(parentId)
    const [fileList, setFileList] = useState([]);
    console.log(userEmail);

    const filterWithoutParent = (item) =>{
        console.log(item, userEmail);
        return item.parentId === "" && (item.userEmail === userEmail)
    }
    const filterWithParent = (item) =>{
        return item.parentId === parentId && (item.userEmail === userEmail) 
    }

    const getFolders = () => {

        if(!parentId){
            onSnapshot(files, (response) => {
                setFileList(
                  response.docs
                    .map((item) => {
                      return { ...item.data(), id: item.id };
                    })
                    .filter(
                      (item) =>
                        {return filterWithoutParent(item)}
                    )
                );
              });
        }else{
            onSnapshot(files, (response) => {
                setFileList(
                  response.docs
                    .map((item) => {
                      return { ...item.data(), id: item.id };
                    })
                    .filter(
                      (item) =>
                        {return filterWithParent(item)}
                    )
                );
              });
        }
      };

      useEffect(() => {
        getFolders();
        // console.log(getFolders());
      }, [parentId, userEmail]);
    
      return { fileList };
}

export default FetchFiles

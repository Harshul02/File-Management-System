import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../../firebase";

let files = collection(database, "files");

const FetchFiles = (parentId) => {
    console.log(parentId)
    const [fileList, setFileList] = useState([]);
    // console.log(files);

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
                        item.parentId === ""
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
                        item.parentId === parentId
                    )
                );
              });
        }
      };

      useEffect(() => {
        getFolders();
        // console.log(getFolders());
      }, [parentId]);
    
      return { fileList };
}

export default FetchFiles

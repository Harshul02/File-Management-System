import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../../firebase";

let files = collection(database, "files");

const FetchFiles = () => {
    const [fileList, setFileList] = useState([]);
    // console.log(files);

    const getFolders = () => {
            onSnapshot(files, (response) => {
              setFileList(
                response.docs
                  .map((item) => {
                    return { ...item.data(), id: item.id };
                  })
                  
              );
            });
      };

      useEffect(() => {
        getFolders();
        // console.log(getFolders());
      }, []);
    
      return { fileList };
}

export default FetchFiles

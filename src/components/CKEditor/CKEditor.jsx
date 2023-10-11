import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useLocalStorage from "hooks/useLocalStorage";
import { Box } from "@mui/material";
import GatheringData from "pages/Auths/GatheringData";

const Test = ({aboutMe, setAboutMe}) => {

  return (
    <Box sx={{ color: "rgba(0,0,0,0.87)" }}>
      <CKEditor
        // @ts-ignore
        editor={Editor}
        onReady={(editor) => {
          // @ts-ignore
          editor.setData(`${aboutMe}`);
        }}
        onChange={(event, editor) => {
          // @ts-ignore
          const data = editor.getData();
          setAboutMe(data);
        }}
      />
    </Box>
  );
};

export default Test;

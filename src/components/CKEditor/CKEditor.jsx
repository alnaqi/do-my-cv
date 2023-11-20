import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Box } from "@mui/material";

const Test = ({ aboutMe, setAboutMe, inputLoading }) => {
  return (
    <Box sx={{ color: "rgba(0,0,0,0.87)" }}>
      <CKEditor
        data={aboutMe}
        disabled={inputLoading}
        // @ts-ignore
        editor={Editor}
        onReady={(editor) => {
          // @ts-ignore
          editor.setData(`${aboutMe}`);
        }}

        onChange={(event, editor) => {
          // @ts-ignore
          setAboutMe(editor.getData());
        }}
        // config={{toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList' ], removePlugins: ['Heading']}}
      />
    </Box>
  );
};

export default Test;

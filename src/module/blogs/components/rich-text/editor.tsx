import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRef } from 'react';

type EditorProps = {
  height?: number | string;
}

const  Editor = ({height}:EditorProps) => {
  const ref = useRef(null);
  
  return (
    <div className='App py-2'>
      <CKEditor
        
        editor={ ClassicEditor }
        data="<p>Write here ...</p>"
        config={{
          toolbar: {
            items: [ 'undo', 'redo',
            '|', 'heading',
            '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
            '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
            '|', 'link', 'blockQuote', 'codeBlock',
            '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'],
          },
        }}        
        onReady={ ( editor ) => {
          console.log( "CKEditor5 React Component is ready to use!", editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { data} );
        } }
      />
    </div>
  );
}

export default Editor;